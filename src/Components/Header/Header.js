import React, { useState } from "react";
import { FaAngleDown, FaHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import avata from "../../assets/avata/Avatar.png";
import logo from "../../assets/logo/Vector.svg";
import "./Header.scss";
import "../../assets/font/Poppins/Poppins-Bold.ttf";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [hiddenInput, setHiddenInput] = useState(false);
  const count = useSelector((state) => state.count);

  const handleClick = () => {
    setHiddenInput(!hiddenInput);
  };
  return (
    <div className="header ">
      <div className="header-items container">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="" className="logo" />
            <span className="logo-name">vanphutin</span>
          </Link>
        </div>
        <div className="header-menu">
          <ul>
            <li className="home ">
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              Grocery <FaAngleDown />
            </li>
            <li>
              Beauty <FaAngleDown />
            </li>
            <li>
              <Link to="/admin">Admin</Link> <FaAngleDown />
            </li>
            <li>
              <Link to="/users">Users</Link> <FaAngleDown />
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
        </div>
      </div>
    </div>
  );
};

export default Header;
