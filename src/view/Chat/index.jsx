import React, { useState, useEffect } from "react";
import { AppContainer } from "./Components/StyledComponents";
import { getApiData } from "@/services/ApiService";
import UserList from "./Components/UserList";
import ChatBox from "./Components/ChatBox";

const Chat = () => {
  const [users, setUsers] = useState([]);
  const [currentChatUser, setCurrentChatUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getApiData("/candidate/getCandidates");
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  const selectUser = (user) => {
    setCurrentChatUser(user);
  };

  const onBack = () => {
    setCurrentChatUser('')
  }

  return (
    <AppContainer>
      {currentChatUser ? (
        <ChatBox currentChatUser={currentChatUser} onBack={onBack}/>
      ) : (
        <UserList users={users} selectUser={selectUser} />
      )}
    </AppContainer>
  );
};

export default Chat;
