import React, { Component, useContext } from "react";
import { MdDelete } from "react-icons/md";
import { ContextProduct } from "./ContextProduct";

const Cart = () => {
  const { product } = useContext(ContextProduct);
  const newCart = [];
  const handleClickDelete = () => {
    console.log(product);
  };
  return (
    <div className="cart-details user-info-right">
      <div className="info-left-header d-flex justify-content-between   ">
        <h2 className="rol-sm title">Cart Products</h2>
        {/* <p>items : 2</p> */}
        <button className="btn btn-outline-danger ">Buy Now</button>
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
                Lorem ipsum dolocscscdcsdrdolocscscdcsdr sit amet.
              </div>
              <div className="category">Category : Man's</div>
              <div className="count">Count : 1</div>
            </div>
            <div className="col-2" onClick={() => handleClickDelete()}>
              <MdDelete className="delete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
