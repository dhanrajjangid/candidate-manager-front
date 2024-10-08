// UserList.js
import React from 'react';
import { UserListContainer, UserItem, UserAvatar, UserName, OnlineIndicator } from './StyledComponents';

const UserList = ({ users, selectUser }) => {
  return (
    <UserListContainer>
      {users.map((user) => (
        <UserItem key={user._id} onClick={() => selectUser(user)}>
          <UserAvatar src={user.avatarUrl || '/default-avatar.png'} alt={user.name} />
          <div>
            <UserName>{user.name}</UserName>
            {user.isOnline && <OnlineIndicator />}
          </div>
        </UserItem>
      ))}
    </UserListContainer>
  );
};

export default UserList;
