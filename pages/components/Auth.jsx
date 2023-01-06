import React, { useState } from 'react';
import Router from 'next/router';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



const Authentication = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // make a request to the server to authenticate the user
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.success) {
        // store the JWT token in the browser's local storage
        localStorage.setItem('token', data.token);
        // redirect the user to the todo list page
        Router.push('/todo');
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      
      <TextField
      
      label="username"
      variant="outlined"
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      
      <br />
      <div className="password-container">
        <TextField
        label="password"
        variant="outlined"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <Button variant="contained" color="primary">Log In</Button>
    </form>
  );
};

export default Authentication;