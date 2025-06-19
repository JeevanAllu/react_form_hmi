// src/components/Welcome.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Welcome = () => {
  const { username } = useParams(); // get username from URL params

  return (
    <div className="form-container">
      <h2>WELCOME {username.toUpperCase()}</h2>
    </div>
  );
};

export default Welcome;

