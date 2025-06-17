import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === '123456') {
      alert('Login successful!');
    } else {
      setError('Invalid email or password.');
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

        <button type="submit">Login</button>
      </form>

      <div className="message">
        <p>Don't have an account?</p>
        <button onClick={goToRegister} style={{ background: 'transparent', color: '#007bff', textDecoration: 'underline', border: 'none', marginTop: '10px' }}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
