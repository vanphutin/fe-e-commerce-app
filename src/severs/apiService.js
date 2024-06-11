import axios from "../utils/axiosCustomize";

const getAllProducts = (page) => {
  return axios.get(`/products?limit= ${page}`);
};
export { getAllProducts };
