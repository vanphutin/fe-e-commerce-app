import React, { useEffect, useRef, useState } from "react";
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
import { Link, useLocation } from "react-router-dom";
import useActive from "../../hooks/useActive";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MdDelete, MdRemoveShoppingCart } from "react-icons/md";
import Cart from "../Products/Content/Cart";
import { useProductsContext } from "../Products/Content/ContextProduct";

const Header = (props) => {
  const count = useSelector((state) => state.count);
  const account = useSelector((state) => state.user.account);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  // console.log(account, "| ", isAuthenticated);
  const [hiddenInput, setHiddenInput] = useState(false);
  const navigate = useNavigate();
  const [isCartVisible, setIsCartVisible] = useState(false);

  const { product, setProduct, newCart, setNewCart, addToCart } =
    useProductsContext();
  const { pathname } = useLocation();
  console.log("ead", newCart);

  //custom hook
  const { active, nodeRef } = useActive();
  const fixedRef = useRef(null);
  const refSctrool = useRef(null);
  useEffect(() => {
    const fixed = fixedRef.current;
    // console.log(fixed, count);
    if (count >= 1 && fixed) {
      setTimeout(() => {
        if (fixed.classList.contains("fixed")) {
          fixed.classList.remove("fixed");
        }
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
  const scrollIntoView_PRODUCTS = () => {
    const productElement = document.getElementById("products");
    if (productElement) {
      productElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <div className="header-items container " ref={fixedRef}>
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
                onClick={scrollIntoView_PRODUCTS}
                className={`products ${active === 2 ? "active" : ""}`}
                ref={(el) => (nodeRef.current[2] = el)}
                rel={refSctrool}
              >
                Products <FaAngleDown />
              </Link>
            </li>
            <li>
              <Link
                to={`${isAuthenticated ? "/admin" : "/login"}`}
                className={active === 3 ? "active" : ""}
                ref={(el) => (nodeRef.current[3] = el)}
              >
                Admin
              </Link>{" "}
              <FaAngleDown />
            </li>

            <li>
              <Link
                to={`${isAuthenticated ? "/users" : "/login"}`}
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
          {isAuthenticated === false ? (
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
                  {count.length >= 1 && isAuthenticated === true ? (
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

                <div
                  className="cart"
                  onMouseEnter={() => setIsCartVisible(true)}
                  onMouseLeave={() => setIsCartVisible(false)}
                >
                  {newCart.length > 0 ? (
                    <div className="cart-count ">
                      <button type="button" class="btn  position-relative p-0">
                        <FaShoppingCart size="24px" />
                        <span class="position-absolute  top-0 start-100 translate-middle badge border border-light  rounded-pill bg-danger p-1">
                          <span class="visually">{newCart.length || 0}</span>
                        </span>
                      </button>
                    </div>
                  ) : (
                    <MdRemoveShoppingCart size="24px" />
                  )}
                  <p className="pice">$55.55</p>
                  {isCartVisible && <Cart />}
                </div>
              </div>
              <div className="header-avata">
                <Link to="/users">
                  <img
                    src="https://avatars.githubusercontent.com/u/162568386?s=400&u=73ca66903679e2fca3f97ea4c646bdb62a35b382&v=4"
                    alt=""
                  />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
