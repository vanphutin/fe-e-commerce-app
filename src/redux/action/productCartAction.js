export const GET_PRODUCTS = " GET_PRODUCTS";

export const getProducts = (product) => {
  return {
    type: GET_PRODUCTS,
    payload: product,
  };
};
