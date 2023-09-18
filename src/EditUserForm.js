// src/EditUserForm.js
import React, { useState } from 'react';

const EditUserForm = ({ user, updateUser, onCancel }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(editedUser);
  };

  return (
    <div className="new-user-form">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Profile Image URL:</label>
          <input
            type="text"
            name="profileImage"
            value={editedUser.profileImage}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit">Update User</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;
