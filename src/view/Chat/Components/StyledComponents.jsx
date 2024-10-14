// StyledComponents.js
import styled from "styled-components";

// Main container for the entire app
export const AppContainer = styled.div`
  display: flex;
  max-height: 70vh;
  width: 380px;
  box-sizing: border-box;
  

  @media (max-width: 768px) {
    min-height: 80vh;
    max-height: 80vh;
  }
`;

// User list (left panel)
export const UserListContainer = styled.div`
  background-color: #fff;
  width: 100%;
  width: 380px;
  min-height: 70vh;
  padding: 20px;
  border-radius: 20px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

// Each user item
export const UserItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #f9f9fb;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:hover {
    background-color: #e6e6e9;
  }
`;

// User avatar style
export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
`;

// User name and status text
export const UserName = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
  color: #333;
`;

// Chat container (right panel)
export const ChatContainer = styled.div`
  background-color: #f2f6f9;
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  box-sizing: border-box;
`;

// Chat header (name and actions)
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 5px;
  font-size: 18px;
  font-weight: bold;
`;

// Chat messages container (where messages will appear)
export const ChatMessages = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
  // border-radius: 20px;
  box-sizing: border-box;
  width: 100%;

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #F4DB4B;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #F4DB4B;
  }
  @media (max-width: 768px) {
    min-height: 80%;
  }
`;

// Single message container (for each message bubble)
export const Message = styled.div`
  display: flex;
  align-self: ${(props) => (props.isSender ? "flex-end" : "flex-start")};
  flex-direction: column;
  align-items: ${(props) => (props.isSender ? "flex-end" : "flex-start")};
  background-color: ${(props) => (props.isSender ? "#F2F6F9" : "#7e7aa3")};
  color: ${(props) => (props.isSender ? "#000" : "#fff")};
  padding: 3px 15px;
  min-width: 30%;
  margin: 10px 0;
  border-radius: ${(props) =>
    props.isSender ? " 20px 0 20px 20px" : "0 20px 20px 20px"};
  max-width: 75%;
  font-size: 12px;
  word-wrap: break-word;
`;

// Input container (for typing new messages)
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 3px;
  background-color: white;
  border-radius: 20px;
`;

// Input field styling
export const Input = styled.input`
  flex: 1;
  border: none;
  padding: 5px 10px;
  box-sizing: border-box;
  border-radius: 30px;
  outline: none;
  font-size: 14px;
  color: #333;
`;

// Send button styling
export const Button = styled.button`
  background-color: #7e7aa3;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s ease;
  &:hover {
    background-color: #4a4ab7;
  }
`;
