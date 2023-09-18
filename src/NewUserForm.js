// src/NewUserForm.js
import React, { useState } from 'react';

const NewUserForm = ({ addUser, isEditing }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      profileImage,
    };
    addUser(newUser);
    setName('');
    setEmail('');
    setProfileImage('');
    setIsVisible(false);
  };

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isEditing ? 'Edit User' : 'New User'}
      </button>
      {isVisible && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Profile Image URL"
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.value)}
            required
          />
          <button type="submit">{isEditing ? 'Update User' : 'Add User'}</button>
        </form>
      )}
    </div>
  );
};

export default NewUserForm;
