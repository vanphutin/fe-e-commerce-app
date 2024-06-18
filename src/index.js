import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout";
import { ProductsProvider } from "./Components/Products/Content/ContextProduct";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ProductsProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  </ProductsProvider>
);

reportWebVitals();
