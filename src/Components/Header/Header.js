import React, { useEffect, useState } from "react";
import {
  FaAngleDown,
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
} from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import avata from "../../assets/avata/Avatar.png";
import logo from "../../assets/logo/Vector.svg";
import "./Header.scss";
import "../../assets/font/Poppins/Poppins-Bold.ttf";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useActive from "../../hooks/useActive";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const [hiddenInput, setHiddenInput] = useState(false);
  const count = useSelector((state) => state.count);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  //custom hook
  const { active, nodeRef } = useActive();

  useEffect(() => {
    const fixed = document.querySelector(".header-items");
    if (fixed) {
      fixed.classList.add("fixed");

      setTimeout(() => {
        fixed.classList.remove("fixed");
      }, 1000); // Xóa class sau 1 giây
    }
  }, [count]);

  const handleClick = () => {
    setHiddenInput(!hiddenInput);
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/register");
  };
  return (
    <div className="header">
      <div className="header-items container">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="" className="logo" />
            <span className="logo-name">vanphutin</span>
          </Link>
        </div>
        <div className="header-menu">
          <ul>
            <li className="home">
              <Link
                to="/"
                className={active === 0 ? "active" : ""}
                ref={(el) => (nodeRef.current[0] = el)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#grocery"
                className={active === 1 ? "active" : ""}
                ref={(el) => (nodeRef.current[1] = el)}
              >
                Grocery <FaAngleDown />
              </Link>
            </li>
            <li>
              <Link
                to="#beauty"
                className={active === 2 ? "active" : ""}
                ref={(el) => (nodeRef.current[2] = el)}
              >
                Beauty <FaAngleDown />
              </Link>
            </li>
            <li>
              <Link
                to="/admin"
                className={active === 3 ? "active" : ""}
                ref={(el) => (nodeRef.current[3] = el)}
              >
                Admin
              </Link>{" "}
              <FaAngleDown />
            </li>
            <li>
              <Link
                to="/users"
                className={active === 4 ? "active" : ""}
                ref={(el) => (nodeRef.current[4] = el)}
              >
                Users
              </Link>{" "}
              <FaAngleDown />
            </li>
          </ul>
        </div>
        <div className="header-info">
          <div className="header-search" onClick={handleClick}>
            <IoIosSearch size="24px" className="font" />
            {hiddenInput && (
              <input type="text" placeholder="Enter name product..." />
            )}
          </div>
          {!login ? (
            <>
              <button
                className="btn btn-light text-wrap fw-800"
                onClick={() => handleLogin()}
              >
                LOGIN
              </button>
              <div className="mx-2"></div>
              <button
                className="btn btn-dark text-wrap"
                onClick={() => handleSignUp()}
              >
                REGISTER
              </button>
            </>
          ) : (
            <>
              <div className="header-heart-cart">
                <div className="heart">
                  {count.length >= 1 ? (
                    <>
                      <FaHeart
                        size="24px"
                        className="font"
                        style={{ color: "red" }}
                      />
                      <p>{count}</p>
                    </>
                  ) : (
                    <>
                      <FaRegHeart size="24px" className="font" />
                      <p>{count}</p>
                    </>
                  )}
                </div>

                <div className="cart">
                  <FaShoppingCart size="24px" />
                  <p className="pice">$55.55</p>
                </div>
              </div>
              <div className="header-avata">
                <img
                  src="https://avatars.githubusercontent.com/u/162568386?s=400&u=73ca66903679e2fca3f97ea4c646bdb62a35b382&v=4"
                  alt=""
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
