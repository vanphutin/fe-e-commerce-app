import axios from "axios";
import React from "react";

const axiosCustomize = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default axiosCustomize;
