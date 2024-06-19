import React from "react";
import { useProductsContext } from "./ContextProduct";
import { MdDelete } from "react-icons/md";
import "../../Role/Users/Users.scss";
import { Link } from "react-router-dom";
import "./Checkout.scss";
import Header from "../../Header/Header";
import ModalPay from "../Content/ModalPay/ModalPay";

const Checkout = () => {
  const { deleteCart, newCart, setNewCart, addToCart } = useProductsContext();

  // Function to calculate the total price
  const calculateTotal = () => {
    return newCart.reduce((total, item) => total + item.price, 0);
  }; // Shipping cost (fixed)
  const shippingCost = 10.0;

  // Calculate subtotal and total
  const subtotal = calculateTotal();
  const total = subtotal + shippingCost;

  return (
    <>
      <Header />
      <div className="container">
        <div className="check-out row bg-light text-dark">
          <div className="col-md-8 cart-details user-info-right ">
            <hr />
            {newCart.map((item, index) => (
              <div className="cart-products-view" key={index}>
                <div className="cart-items">
                  <div className="row cart-item">
                    <div className="col-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "90px", height: "90px" }}
                      />
                    </div>
                    <div className="col-7">
                      <div className="describe">
                        <h4>
                          <strong>{item.title}</strong>
                        </h4>
                      </div>
                      <div className="category">
                        <small>Category : {item.category}</small>
                      </div>
                      <div
                        className="delete-item"
                        onClick={() => deleteCart(item.id)}
                      >
                        <MdDelete className="delete fs-1" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="count">
                        <strong className="fs-3 text-center ">
                          ${item.price}
                        </strong>
                      </div>
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
            {newCart.length > 0 && (
              <div className="text-end pt-4">
                <h5 className="d-inline"> Total</h5>
                <h3>${calculateTotal().toFixed(2)}</h3>
              </div>
            )}
          </div>
          <div className="col-md-4">
            {newCart.length > 0 && (
              <div className="total-summary">
                <div className="pay Subtotal d-flex justify-between align-center">
                  <span>Subtotal (items)</span>
                  <span>{newCart.length}</span>
                </div>
                <div className="pay Price d-flex justify-between align-center">
                  <span>Price (Total)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="pay Shipping d-flex justify-between align-center">
                  <span>Shipping</span>
                  <span>${shippingCost.toFixed(2)} </span>
                </div>
                <hr />
                <div className="pay Estimated-Total d-flex justify-between align-center">
                  <span>Estimated Total</span>
                  <span> ${total.toFixed(2)}</span>
                </div>
                <div className="btn btn-checkout d-flex justify-center">
                  <ModalPay />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
