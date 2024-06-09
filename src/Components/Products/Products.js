import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../severs/apiService";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);
  const fetchAllProducts = async () => {
    const res = await getAllProducts();
    if (res) {
      setProducts(res.data);
    }
    console.log("nameProduct>>", products);
  };

  return (
    <div>
      {products &&
        products.length > 0 &&
        products.map((item, index) => (
          <div key={index + 1}> hi{item.title}</div>
        ))}
    </div>
  );
};

export default Products;
