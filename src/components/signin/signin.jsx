import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useHistory diganti dengan useNavigate
import './signin.css'; // Tambahkan stylesheet SignIn

const SignIn = () => {
  const navigate = useNavigate(); // useHistory diganti dengan useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State untuk "Remember Me"

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);

    // Redirect ke halaman home setelah berhasil sign-in
    navigate('/dashboard'); // useHistory diganti dengan navigate
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button type="submit">Masuk</button>
      </form>
    </div>
  );
};

export default SignIn;