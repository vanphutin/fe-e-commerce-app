import axios from "../utils/axiosCustomize";

const getAllProducts = () => {
  return axios.get("/products");
};
export { getAllProducts };
