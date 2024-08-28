import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple authentication logic
    if (username === 'user' && password === 'password') {
      onLogin();
      alert('Login successful! Welcome to Pet Heaven Society!');
      navigate('/');
    } else {
      alert('Unable to find time to link registered data from Register, hardcoded to "user" and "password"');
    }
  };

  return (
    <div className="ring">
        <div className="login">
            <h2>Login</h2>
            <div className="inputBx">
            <form onSubmit={handleSubmit}>
                <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                </div>
                <div>
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>
                <div>
                <button className="login-button" type="submit">Login</button>
                </div>
            </form>
            </div>
        </div>
    </div>
  );
};

export default Login;
