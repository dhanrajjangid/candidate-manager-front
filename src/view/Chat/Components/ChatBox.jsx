import React, { useState, useEffect } from "react";

import {
  ChatContainer,
  ChatMessages,
  Message,
  InputContainer,
  Input,
  Button,
  Header,
  UserAvatar,
} from "./StyledComponents";
import { postApiData } from "@/services/ApiService";
import dayjs from "dayjs";
import { MdOutlineArrowBackIos } from "react-icons/md";

import { socket } from "../socket";

const ChatBox = ({ currentChatUser, onBack }) => {
  const player_id = JSON.parse(localStorage.getItem("user"))?.player_id;

  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);

  useEffect(() => {
    fetchChatHistory(currentChatUser?._id);
  }, [currentChatUser]);

  useEffect(() => {
    socket.emit("setup", player_id);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (socket?.on) {
      socket.on("message recieved", (newMessageRecieved) => {
        if (currentChatUser?._id !== newMessageRecieved?.senderId) {
          if (!notification.includes(newMessageRecieved)) {
            setNotification([newMessageRecieved, ...notification]);
            setFetchAgain(!fetchAgain);
          }
        } else {
          setMessages([...messages, newMessageRecieved]);
        }
      });
    }
  });

  const sendMessage = () => {
    if (messageInput.trim() !== "" && currentChatUser) {
      const message = {
        senderId: player_id,
        receiverId: currentChatUser._id,
        message: messageInput,
        timestamp: new Date(),
      };
      socket.emit("new message", message);
      setMessages([...messages, message]);
      setMessageInput("");
    }
  };
  console.log(currentChatUser, "currentChatUsercurrentChatUser");
  const fetchChatHistory = async (otherUserId) => {
    const response = await postApiData("/chat/history", {
      currentUserId: player_id,
      otherUserId,
    });
    setMessages(response);
    socket.emit("join chat", otherUserId);
  };
  return (
    <ChatContainer>
      <Header>
        <div
          onClick={() => onBack()}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MdOutlineArrowBackIos
            size={24}
            color="white"
            style={{ marginRight: "8px" }}
          />
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <h3 style={{ margin: "auto", textTransform: "capitalize" }}>
            {currentChatUser.name}
          </h3>
          <UserAvatar
            src={
              "https://t3.ftcdn.net/jpg/08/60/86/66/240_F_860866611_HT8uVSub4ot8CHxxo74kUubGH0Rz7MBp.jpg"
            }
          />
        </div>
      </Header>
      <ChatMessages>
        {messages
          ?.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
          .reduce((acc, msg, index, arr) => {
            const messageDate = dayjs(msg.timestamp);
            const prevMessageDate =
              index > 0 ? dayjs(arr[index - 1].timestamp) : null;

            if (
              !prevMessageDate ||
              messageDate.isSame(prevMessageDate, "day") === false
            ) {
              acc.push(
                <div
                  key={`date-${index}`}
                  style={{
                    margin: "10px 0",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#aaa",
                  }}
                >
                  {messageDate.format("MMMM D, YYYY")}
                </div>
              );
            }

            acc.push(
              <>
                <Message
                  key={index}
                  isSender={(msg.senderId || msg.sender) === player_id}
                >
                  <span style={{ wordBreak: "break-all" }}>
                    {msg.text || msg.message}
                  </span>
                  <span style={{ fontSize: "10px", alignSelf: "flex-end" }}>
                    {messageDate?.format("HH:mm")} {/* Formatted time */}
                  </span>
                </Message>
              </>
            );

            return acc;
          }, [])}
      </ChatMessages>
      <InputContainer>
        <Input
          type="text"
          placeholder="Type your message..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <Button onClick={sendMessage}>Send</Button>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatBox;
