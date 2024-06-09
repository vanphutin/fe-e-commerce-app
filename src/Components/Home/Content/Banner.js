import React from "react";
import cover from "../../../assets/banner/cover.png";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <img src={cover} alt="" className="banner-content" />
    </div>
  );
};

export default Banner;
