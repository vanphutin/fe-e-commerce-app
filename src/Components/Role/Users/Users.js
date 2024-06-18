import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import "./Users.scss";
import { MdDelete } from "react-icons/md";
import { TbLock } from "react-icons/tb";
import ModalInfo from "./ModalInfo.js";
import {
  getAllUsers,
  postLogin,
  postUser,
} from "../../../severs/apiService.js";
import { useLocation } from "react-router-dom";
import { useProductsContext } from "../../Products/Content/ContextProduct.js";

const Users = () => {
  const [hiddle, setHiddle] = useState(false);
  const [user, setUser] = useState([]);
  const RANDOM_USER = Math.round(Math.random() * 9);
  const location = useLocation();
  const { username, password } = location.state || {};
  // console.log("username, password ", username, password);
  const userName = username;

  const { deleteCart, newCart, setNewCart, addToCart } = useProductsContext();
  console.log("new ủe", newCart);
  const HandleHiddlePass = () => {
    setHiddle(true);
    setTimeout(() => {
      setHiddle(false);
    }, 2000);
  };

  useEffect(() => {
    fetchUsers();
  }, [username, password]);
  const fetchUsers = async (firstname, lastname, email, username, password) => {
    const res = await getAllUsers(
      firstname,
      lastname,
      email,
      username,
      password
    );

    if (res && res.data) {
      setUser(res.data[RANDOM_USER]);
    }
  };
  // console.log("usessr", RANDOM_USER);
  return (
    <>
      <Header />
      {user ? (
        <div className="user-info container ">
          <div className="row ">
            <div className="user-info-left  col-md-6 ">
              <div className="info-left-header d-flex justify-content-between   ">
                <h2 className="rol-sm title">User Info</h2>
                <ModalInfo />
              </div>
              <div className="info-left-content">
                <div className="info-avata ">
                  <img
                    src="https://avatars.githubusercontent.com/u/162568386?s=400&u=73ca66903679e2fca3f97ea4c646bdb62a35b382&v=4"
                    alt=""
                    className="rounded-circle "
                  />
                </div>
                <div className="info-details row d-flex ">
                  <div className="left col-md-4 d-flex flex-column">
                    <div className="info-fullname">
                      <label htmlFor="">Full Name</label>
                      <p>
                        {user.name?.lastname} {user.name?.firstname}
                      </p>
                    </div>
                    <div className="info-mail">
                      <label htmlFor="">Email Address</label>
                      <p>{user.email}</p>
                    </div>
                    <div className="info-username ">
                      <label htmlFor="">User Name</label>
                      <p>{user.username}</p>
                    </div>
                    <div className="info-password">
                      <label htmlFor="">Password</label>
                      <p>
                        {hiddle ? "m38rmF$" : "*****"}{" "}
                        <TbLock onClick={() => HandleHiddlePass()} />
                      </p>
                    </div>
                  </div>
                  <div className="middle col-md-4 d-flex flex-column">
                    <div className="info-phone">
                      <label htmlFor="">Phone</label>
                      <p>{user.phone}</p>
                    </div>
                    <div className="info-zipcode">
                      <label htmlFor="">Zipcode</label>
                      <p>{user?.address?.zipcode}</p>
                    </div>
                    <div className="info-city">
                      <label htmlFor="">City</label>
                      <p>{user?.address?.city}</p>
                    </div>
                    <div className="info-street">
                      <label htmlFor="">Street</label>
                      <p>{user?.address?.street}</p>
                    </div>
                  </div>
                  <div className="right col-md-4 d-flex flex-column">
                    <div className="info-geolocation">
                      <label htmlFor="">Geolocation</label>
                      <p>lat: {user.address?.geolocation?.lat}</p>
                    </div>
                    <div className="info-role">
                      <label htmlFor="">Role</label>
                      <p>user</p>
                    </div>
                    <div className="info-department">
                      <label htmlFor="">Department</label>
                      <p>IT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="user-info-middle col-md-1 ">
              <div className="gap"></div>
            </div>

            <div className="col-md-5 cart-details user-info-right">
              <div className="info-left-header d-flex justify-content-between   ">
                <h2 className="rol-sm title">Cart Products</h2>
                <button className="btn btn-outline-danger ">Buy Now</button>
              </div>
              <hr />
              {newCart.map((item, index) => (
                <div className="cart-products-view">
                  <div className="cart-items">
                    <div className="row cart-item">
                      <div className="col-3">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="col-7">
                        <div className="describe">{item.title}</div>
                        <div className="category">
                          <small>Category : {item.category}</small>
                        </div>
                        <div className="count">Count : {item.count}</div>
                      </div>
                      <div
                        className="col-2"
                        onClick={() => deleteCart(item.id)}
                      >
                        <MdDelete className="delete" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {newCart.length === 0 && (
                <p className="cart-empty text-center fw-bolder fs-2">
                  Cart is empty
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>Nodata </>
      )}
    </>
  );
};

export default Users;
