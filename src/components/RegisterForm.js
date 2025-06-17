// src/components/RegisterForm.jsx
import { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '', email: '', password: '', confirmPassword: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setMessage('All fields are required.');
    } else if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match.');
    } else {
      setMessage('Registration successful!');
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />

        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />

        <button type="submit">Register</button>
      </form>
      <p className="message">{message}</p>
    </div>
  );
};

export default RegisterForm;
