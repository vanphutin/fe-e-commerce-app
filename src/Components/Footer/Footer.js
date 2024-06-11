import React from "react";
import logo from "../../assets/logo/Vector.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer container">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <ul>
              <li>
                <img src={logo} alt="" className="logo" />
                <span className="logo-name">grocerymart</span>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  maxime et veniam eligendi rem voluptatibus.
                </p>
              </li>
              <li>
                <div className="receive-product">
                  <p>Receive product news and updates.</p>
                  <div className="input-fill">
                    <input type="text" name="" id="" />
                    <button>send</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
