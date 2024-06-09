import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import avata from "../../assets/avata/Avatar.png";
import logo from "../../assets/logo/Vector.svg";
import "./Header.scss";
import "../../assets/font/Poppins/Poppins-Bold.ttf";

const Header = (props) => {
  const [hiddenInput, setHiddenInput] = useState(false);

  const handleClick = () => {
    setHiddenInput(!hiddenInput);
  };
  return (
    <div className="header">
      <div className="header-items container">
        <div className="header-logo">
          <img src={logo} alt="" className="logo" />
          <span className="logo-name">grocerymart</span>
        </div>
        <div className="header-menu">
          <ul>
            <li>
              Departments <FaAngleDown />
            </li>
            <li>
              Grocery <FaAngleDown />
            </li>
            <li>
              Beauty <FaAngleDown />
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
              <FaRegHeart size="24px" className="font" />
              <p>03</p>
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
