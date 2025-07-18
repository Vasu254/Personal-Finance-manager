import React, { useState } from "react";
import "./Register.css";

export default function Register({ onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Username validation: only a-z, A-Z, !, _
  const usernameRegex = /^[a-zA-Z!_]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const firstName = e.target.firstName.value.trim();
    const middleName = e.target.middleName.value.trim();
    const lastName = e.target.lastName.value.trim();
    const username = e.target.username.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const repassword = e.target.repassword.value;
    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !password ||
      !repassword
    ) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!usernameRegex.test(username)) {
      setError("Username can only contain a-z, A-Z, !, and _ characters.");
      return;
    }
    if (password !== repassword) {
      setError("Passwords do not match.");
      return;
    }
    setSuccess("Registration successful! You can now log in.");
  };

  return (
    <div className="auth-bg">
      <div className="auth-container">
        <h2 className="auth-title">Sign Up</h2>
        <form className="auth-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="row-fields">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
            <input type="text" name="middleName" placeholder="Middle Name" />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>
          <input
            type="text"
            name="username"
            placeholder="Username (a-z, A-Z, !, _)"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create New Password"
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            name="repassword"
            placeholder="Re-enter Password"
            required
          />
          <div className="show-password-row">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword((v) => !v)}
            />
            <label htmlFor="showPassword">Show Passwords</label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <div className="switch-link">
          <span>Already have an account? </span>
          <span
            className="switch-action"
            onClick={() => onSwitch && onSwitch("login")}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
}
