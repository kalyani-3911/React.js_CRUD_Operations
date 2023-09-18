// src/User.js
import React from 'react';

const User = ({ user, onDelete, onUpdate }) => {
  return (
    <div className="user">
      <img src={user.profileImage} alt={user.name} />
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
      <button onClick={() => onDelete(user.id)}>Delete</button>
      <button onClick={() => onUpdate(user.id)}>Update</button>
    </div>
  );
};

export default User;
