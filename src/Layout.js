import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./Components/Role/Users/Users";
import Admin from "./Components/Role/Admin/Admin";
import ProductPage from "./Components/Products/Content/ProductPage";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewProducts from "./Components/Products/Content/ViewProducts";
import Checkout from "./Components/Products/Content/Checkout";
import PrivateRoutes from "./Route/PrivateRoutes";

const Layout = () => {
  const NotFound = () => {
    return (
      <div
        className="container mt-3 alert alert-danger text-center"
        role="alert"
      >
        <b>404 </b>. Page Not Found
      </div>
    );
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/users"
          element={
            <PrivateRoutes>
              <Users />
            </PrivateRoutes>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoutes>
              <Admin />
            </PrivateRoutes>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoutes>
              <Checkout />
            </PrivateRoutes>
          }
        />

        <Route path="/products/:id" element={<ProductPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Layout;
