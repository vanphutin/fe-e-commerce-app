import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../severs/apiService";

const BrowseCategories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    let res;
    res = await getAllProducts();
    if (res && res.data) {
      setProducts(res.data);
    }
  };
  return (
    <>
      <div className="browse-categories">
        <div className="browse-categories-items">
          {products &&
            products.length > 0 &&
            products.slice(0, 3).map((item, index) => (
              <div className="browse-categories-item" key={index + 1}>
                <div className="img">
                  <img src={item.image} alt="" className="image-product" />
                </div>
                <div className="info-product">
                  <div className="price">
                    ${item.price} - ${item.price * 6}{" "}
                  </div>
                  <div className="description">{item.description}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default BrowseCategories;
