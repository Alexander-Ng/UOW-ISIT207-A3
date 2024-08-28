import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Signed up:', { username, email, password });
    alert('Account registered successfully! Welcome to Pet Heaven Society!');
    navigate('/login');
  };

  return (
    <div className="ring">
        <div className="login">
            <h2>Register</h2>
            <div className="inputBx">
                <form onSubmit={handleSubmit}>
                    <div className="inputBx">
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
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                        <button className="login-button" type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
            <p>Already have an account?</p>
            <div className="inputBx">
                <button className="login-button" type="submit">Login Here Instead</button>
            </div>
        </div>
    </div>
  );
};

export default SignUp;

