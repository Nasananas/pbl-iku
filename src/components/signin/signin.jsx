import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../signin/signin.css';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Logika autentikasi atau pengiriman data ke server dapat ditambahkan di sini
    console.log("Email:", email);
    console.log("Password:", password);

    // Redirect ke halaman home setelah berhasil sign-in
    navigate("/");
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form>
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
        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
