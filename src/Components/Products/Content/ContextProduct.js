import React, { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../../../severs/apiService";

export const ContextProduct = createContext();

export const ProductProvider = (props) => {
  const [product, setProduct] = useState({}); // Khởi tạo state product với giá trị ban đầu là null

  useEffect(() => {
    fetchProductSinger();
  }, []);

  const fetchProductSinger = async () => {
    try {
      const res = await getAllProducts();
      setProduct(res.data);
      console.log("res.data", res.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  return <ContextProduct.Provider value={{ product, setProduct }} {...props} />;
};
