// StyledComponents.js
import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 80vh; /* Adjusted for better responsiveness */

  width: 380px; /* Full width */
  margin: auto; /* Center horizontally */
  border-radius: 10px; /* Rounded corners */
  overflow: hidden; /* Prevent overflow of children */
`;

export const UserListContainer = styled.div`
  width: 400px; /* Wider user list */
  border-right: 1px solid #ccc;
  box-sizing: border-box;
  padding: 10px;
  background-color: #f5f5f5;
  overflow-y: auto; /* Scrollable if too many users */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
`;

export const UserItem = styled.div`
  display: flex; /* Flexbox for avatar and text */
  align-items: center;
  cursor: pointer;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px; /* Rounded corners for each item */
  transition: background-color 0.2s; /* Smooth hover effect */

  &:hover {
    background-color: #e0e0e0; /* Hover color */
  }
`;

export const UserAvatar = styled.img`
  width: 40px; /* Avatar size */
  height: 40px;
  border-radius: 50%; /* Circular avatar */
  margin-right: 10px; /* Spacing between avatar and text */
`;

export const UserName = styled.div`
  font-weight: bold; /* Bold username */
  color: #333; /* Dark color for text */
`;

export const OnlineIndicator = styled.span`
  display: inline-block;
  width: 8px; /* Indicator size */
  height: 8px;
  border-radius: 50%; /* Circular indicator */
  background-color: green; /* Green for online */
  
`;

export const ChatContainer = styled.div`
  flex: 1;

  max-width: 400px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const ChatMessages = styled.div`
  flex: 1;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  overflow-y: auto;
  margin-bottom: 10px;
  padding: 10px;
`;

export const Message = styled.div`
  margin: 5px 0;
  
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  align-items: flex-end;
  padding: 0.3rem 1rem;
  max-width: 70%;
  border-radius: 30px;
  background-color: ${(props) => (props.isSender ? "#EEEDFE" : "#F2F3F3")};
  word-wrap: break-word;
  color: #7C7D7D;
  align-self: ${(props) => (props.isSender ? "flex-end" : "flex-start")};  
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px;
  margin-left: 10px;
  background-color: #BF3131;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Header = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #BF3131;
  color: white;
`;
