import React, { createContext, useContext, useState } from "react";

// Tạo Context
const ProductsContext = createContext();

// Tạo Provider
function ProductsProvider({ children }) {
  const [product, setProduct] = useState([]);
  const [newCart, setNewCart] = useState([]);
  const [countCart, setCountCart] = useState([]);
  // console.log(newCart);

  function addToCart(newCart) {
    setNewCart((prevItems) => {
      // console.log("prevItems", prevItems);
      const isExisted = prevItems.some((item) => item?.id === newCart?.id);
      if (isExisted) {
        return [...prevItems];
      } else {
        return [...prevItems, newCart];
      }
    });
  }
  // console.log("count", countCart);

  function deleteCart(CartId) {
    setNewCart((prevItems) => prevItems.filter((item) => item?.id !== CartId));
  }
  // console.log("newCart", newCart);
  const value = {
    product,
    newCart,
    setProduct,
    setNewCart,
    addToCart,
    deleteCart,
    countCart,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

// Custom Hook để sử dụng context
function useProductsContext() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error(
      "useProductsContext must be used within a ProductsProvider"
    );
  }
  return context;
}

export { ProductsProvider, useProductsContext };
