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

const postLogin = (username, password) => {
  return axios.post("/auth/login", { username, password });
};
const postUser = (firstname, lastname, email, username, password) => {
  return axios.post("/users", {
    email: email,
    username: username,
    password: password,
    name: {
      firstname: firstname,
      lastname: lastname,
    },
    address: {
      city: "default city",
      street: "default street",
      number: 0,
      zipcode: "00000-0000",
      geolocation: {
        lat: "0.0000",
        long: "0.0000",
      },
    },
    phone: "000-000-0000",
  });
};

export { getAllProducts };
export { getAllCategories };
export { getCategory };
export { getProductSinger };
export { postLogin };
export { postUser };
