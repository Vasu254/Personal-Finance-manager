import React, { useState } from "react";
import "./Login.css";

export default function Login({ onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    // Simulate login validation
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setSuccess("Login successful! Welcome back.");
  };

  return (
    <div className="auth-bg">
      <div className="auth-container">
        <h2 className="auth-title">Login</h2>
        <form className="auth-form" onSubmit={handleSubmit} autoComplete="off">
          <input type="email" name="email" placeholder="Email" required />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <div className="switch-link">
          <span>Don't have an account? </span>
          <span
            className="switch-action"
            onClick={() => onSwitch && onSwitch("register")}
          >
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
}
