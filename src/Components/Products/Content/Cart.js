import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useProductsContext } from "./ContextProduct";

const Cart = () => {
  const dispatch = useDispatch();
  const { product, setProduct, newCart, setNewCart, deleteCart } =
    useProductsContext();

  console.log("newCart", newCart); //(7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]

  return (
    <>
      <div className="cart-details user-info-right">
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
                <div className="col-2" onClick={() => deleteCart(item.id)}>
                  <MdDelete className="delete" />
                </div>
              </div>
            </div>
          </div>
        ))}
        {newCart.length === 0 && <p className="cart-empty">Cart is empty</p>}
      </div>
    </>
  );
};

export default Cart;
