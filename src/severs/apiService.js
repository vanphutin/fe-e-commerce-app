import axios from "../utils/axiosCustomize";

//Limit results
const getAllProducts = (page) => {
  return axios.get(`/products?limit= ${page}`);
};

//Get all categories
const getAllCategories = () => {
  return axios.get("/products/categories");
};

//Get products in a specific category
const getCategory = (nameCategory) => {
  return axios.get(`/products/category/${nameCategory}`);
};

//Get a single product

const getProductSinger = (id) => {
  return axios.get(`/products/${id}`);
};
export { getAllProducts };
export { getAllCategories };
export { getCategory };
export { getProductSinger };
