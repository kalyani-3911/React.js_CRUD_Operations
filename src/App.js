// src/App.js
import React, { useState } from 'react';
import './App.css';
import User from './User';
import NewUserForm from './NewUserForm';
import EditUserForm from './EditUserForm';

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      profileImage: 'https://example.com/john.jpg', // u can give any kind of url
    },
    // Add more users as needed
  ]);

  const [editingUser, setEditingUser] = useState(null);

  const addUser = (newUser) => {
    newUser.id = users.length + 1;
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <NewUserForm addUser={addUser} isEditing={editingUser !== null} />
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          onDelete={deleteUser}
          onUpdate={() => setEditingUser(user)}
        />
      ))}
      {editingUser && (
        <EditUserForm
          user={editingUser}
          updateUser={updateUser}
          onCancel={() => setEditingUser(null)}
        />
      )}
    </div>
  );
}

export default App;
