import React, { useState } from "react";
import "./Register.scss";
import "./Login.scss";
import img_register from "../../assets/auth/register.png";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../../severs/apiService";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from submitting
    setError(""); // Clear previous error
    setIsLoading(true);
    try {
      const res = await postLogin(username, password);

      if (!password || password === "") {
        toast.error("Invalid password");
        return setIsLoading(false);
      }
      if (!username || username === "") {
        toast.error("Invalid password");
        return setIsLoading(false);
      }

      if (res.data && res.data.token) {
        dispatch({
          type: "FETCH_USER_LOGIN_SUCCESS",
          payload: res.data,
        });
        toast.success("Login success");
        navigate("/");
      } else {
        toast.error("Login error: Invalid token received");
        return setIsLoading(false);
      }
      // console.log("res >>", res);
      navigate("/users", { state: { username, password } });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Unauthorized: Incorrect username or password.");
        toast.error("Unauthorized: Incorrect username or password.");
        return setIsLoading(false);
      } else {
        setError("An error occurred. Please try again.");
        toast.error("An error occurred. Please try again.");
        return setIsLoading(false);
      }
    }
  };
  return (
    <div className="container">
      <div className="container-register">
        <div className="left">
          <img src={img_register} alt="Registration" />
        </div>
        <div className="right">
          <h2 className="text-center">Login</h2>
          <p className="text-center">
            Welcome back to sign in. As a returning customer, you have access to
            your previously saved all information.
          </p>
          <form className="register-form" onSubmit={handleLogin}>
            <input
              type="text"
              name="email"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Email"
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
                <button type="submit">Login</button>
              </>
            ) : (
              <div className="isLoader">
                <p>Loading...</p>
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
