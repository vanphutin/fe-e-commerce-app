// redux/userReducer.js
import { GET_PRODUCTS } from "../redux/action/productCartAction";

const INITIAL_STATE = {
  product: {
    id: "",
    title: "",
    price: "",
    category: "",
    image: "",
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      // console.log(action?.payload?.category);
      return {
        ...state,
        product: {
          ...state.product,
          id: action?.payload?.id,
          title: action?.payload?.title,
          price: action?.payload?.price,
          category: action?.payload?.category,
          image: action?.payload?.image,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
