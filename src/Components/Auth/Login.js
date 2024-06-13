// RegistrationForm.js

import React, { useState } from "react";
import "./Register.scss";
import img_register from "../../assets/auth/register.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - you can send formData to your server here
    console.log("Form submitted with data:", formData);
    // Example: You can use fetch or axios to send formData to your server
  };

  return (
    <div className="container">
      <div className="container-register">
        <div className="left">
          <img src={img_register} alt="Registration" />
        </div>
        <div className="right">
          <h2 className="text-center">Login Form</h2>
          <p className="text-center">
            Welcome back to sign in. As a returning customer, you have access to
            your previously saved all information.{" "}
          </p>
          <form onSubmit={handleSubmit} className="register-form">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />

            <button type="submit">Register</button>
          </form>
          <div className="my-3">
            Go to{" "}
            <Link to="/" className="link">
              <p>Home</p>
            </Link>
            <p className="or">or</p>
            <Link to="/register" className="link">
              <p>Register</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
