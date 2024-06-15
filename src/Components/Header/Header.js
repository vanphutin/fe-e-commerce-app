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
import { Link } from "react-router-dom";
import useActive from "../../hooks/useActive";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";

const Header = (props) => {
  const count = useSelector((state) => state.count);
  const account = useSelector((state) => state.user.account);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  // console.log(account, "| ", isAuthenticated);
  const [hiddenInput, setHiddenInput] = useState(false);
  const navigate = useNavigate();
  const [isCartVisible, setIsCartVisible] = useState(false);

  //custom hook
  const { active, nodeRef } = useActive();
  const fixedRef = useRef(null);
  useEffect(() => {
    const fixed = fixedRef.current;
    // console.log(fixed, count);
    if (count >= 1 && fixed) {
      toast.info(`❤️ ${count}`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
                to="#beauty"
                className={active === 2 ? "active" : ""}
                ref={(el) => (nodeRef.current[2] = el)}
              >
                Beauty <FaAngleDown />
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
                  <FaShoppingCart size="24px" />
                  <p className="pice">$55.55</p>
                  {isCartVisible && (
                    <div className="cart-details user-info-right">
                      <div className="info-left-header d-flex justify-content-between   ">
                        <h2 className="rol-sm title">Cart Products</h2>
                        {/* <p>items : 2</p> */}
                        <button className="btn btn-outline-danger ">
                          Buy Now
                        </button>
                      </div>
                      <hr />
                      <div className="cart-products-view">
                        <div className="cart-items">
                          <div className="row cart-item">
                            <div className="col-3">
                              <img
                                src="https://sharkskin.com.au/cdn/shop/files/Blue_4_1400x.jpg?v=1709507149"
                                alt=""
                              />
                            </div>
                            <div className="col-7">
                              <div className="describe">
                                Lorem ipsum dolocscscdcsdrdolocscscdcsdr sit
                                amet.
                              </div>
                              <div className="category">Category : Man's</div>
                              <div className="count">Count : 1</div>
                            </div>
                            <div className="col-2">
                              <MdDelete className="delete" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
