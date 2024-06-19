import React, { useState } from "react";
import "./Register.scss";
import img_register from "../../assets/auth/register.png";
import { Link, useNavigate } from "react-router-dom";
import { postUser } from "../../severs/apiService";
import { toast } from "react-toastify";

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error
    setIsLoading(true);
    const isValidateEmail = validateEmail(email);

    try {
      const res = await postUser(
        firstname,
        lastname,
        email,
        username,
        password
      );
      if (!isValidateEmail) {
        toast.error("Invalid email");
        return setIsLoading(false);
      }

      if (!firstname || !lastname || !email || !username || !password) {
        toast.error("All fields are required");
        return setIsLoading(false);
      }

      // Additional validation checks
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters long");

        return setIsLoading(false);
      }
      if (res.data) {
        toast.success("Register success");
        navigate("/login");
      } else {
        toast.error("Registration error: Invalid response received");
      }
      // console.log("res >>", res);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Unauthorized: Incorrect username or password.");
        toast.error("Unauthorized: Incorrect username or password.");
      } else {
        setError("An error occurred. Please try again.");
        toast.error("An error occurred. Please try again.");
      }
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="container">
      <div className="container-register">
        <div className="left">
          <img src={img_register} alt="Registration" />
        </div>
        <div className="right">
          <h2 className="text-center">Register</h2>
          <p className="text-center">
            Let’s create your account and shop like a pro and save money.
          </p>
          <form onSubmit={handleSubmit} className="register-form">
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {!isLoading ? (
              <>
                <button type="submit">Register</button>
              </>
            ) : (
              <div className="isLoader">
                <p>Creating</p>
                <div className="loader"></div>
              </div>
            )}
          </form>
          <div className="my-3">
            Go to{" "}
            <Link to="/" className="link">
              <p>Home</p>
            </Link>
            <p className="or">or</p>
            <Link to="/login" className="link">
              <p>Login</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
