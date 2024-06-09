import React, { useEffect } from "react";
import Banner from "./Content/Banner";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home-slide">
        <Banner />
        <Products />
      </div>
    </div>
  );
};

export default Home;
