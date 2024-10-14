// UserList.js
import React from "react";
import {
  UserListContainer,
  UserItem,
  UserAvatar,
  UserName,
} from "./StyledComponents";

const UserList = ({ users, selectUser }) => {
  const player_id = JSON.parse(localStorage.getItem("user"))?.player_id;

  return (
    <UserListContainer>
      {users.map((user) => {
        return (
          <>
            {user?._id !== player_id && (
              <UserItem key={user._id} onClick={() => selectUser(user)}>
                <UserAvatar
                  src={
                    user.avatarUrl ||
                    "https://t3.ftcdn.net/jpg/08/60/86/66/240_F_860866611_HT8uVSub4ot8CHxxo74kUubGH0Rz7MBp.jpg"
                  }
                  alt={user.name}
                />
                <div>
                  <UserName>{user.name}</UserName>
                </div>
              </UserItem>
            )}
          </>
        );
      })}
    </UserListContainer>
  );
};

export default UserList;
