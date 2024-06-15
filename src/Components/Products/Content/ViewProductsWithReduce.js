import React, { useEffect, useRef, useReducer } from "react";
import { getAllProducts, getCategory } from "../../../severs/apiService";
import { FaHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setCount } from "../../../redux/countSlice";
import Select from "react-select";
import "../Products.scss";
import "./ViewProducts.scss";
import { Link } from "react-router-dom";

const options = [
  { value: "All", label: "All" },
  { value: "electronics", label: "Electronics" },
  { value: "jewelery", label: "Jewelery" },
  { value: "men's clothing", label: "Men's Clothing" },
  { value: "women's clothing", label: "Women's Clothing" },
];

// Initial state
const initialState = {
  products: [],
  activeLoves: [],
  page: 10,
  loading: true,
  selectedOption: options[0],
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        activeLoves: Array(action.payload.length).fill(false),
        loading: false,
      };
    case "APPEND_PRODUCTS":
      return {
        ...state,
        products: [...state.products, ...action.payload],
        activeLoves: [
          ...state.activeLoves,
          ...Array(action.payload.length).fill(false),
        ],
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_SELECTED_OPTION":
      return {
        ...state,
        selectedOption: action.payload,
        page: 10,
        loading: true,
      };
    case "INCREMENT_PAGE":
      return {
        ...state,
        page: state.page + 5,
      };
    case "TOGGLE_LOVE":
      const newActiveLoves = [...state.activeLoves];
      newActiveLoves[action.payload] = !newActiveLoves[action.payload];
      return {
        ...state,
        activeLoves: newActiveLoves,
      };
    default:
      return state;
  }
};

const ViewProductsWithReduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reduxDispatch = useDispatch();
  const isFetching = useRef(false);

  useEffect(() => {
    fetchAllProducts(state.page, state.selectedOption.value);
  }, [state.page, state.selectedOption]);

  const fetchAllProducts = async (page, category) => {
    let res;
    if (category && category !== "All") {
      res = await getCategory(category, page);
    } else {
      res = await getAllProducts(page);
    }

    if (res) {
      const actionType = page === 10 ? "SET_PRODUCTS" : "APPEND_PRODUCTS";
      dispatch({ type: actionType, payload: res.data });
      if (res.data.length < page) {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    } else {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const handleChange = (selectedOption) => {
    dispatch({ type: "SET_SELECTED_OPTION", payload: selectedOption });
  };

  const handleClickLove = (index) => {
    dispatch({ type: "TOGGLE_LOVE", payload: index });
    const newCount = state.activeLoves.filter(Boolean).length;
    reduxDispatch(setCount(newCount)); // Update count in Redux
  };

  const handleSeeMore = () => {
    dispatch({ type: "INCREMENT_PAGE" });
  };

  const handleClickProduct = (index) => {
    alert(index);
  };

  return (
    <div className="total-tavAzza browse-categories">
      <div>
        <div className="option row d-flex align-items-center ms-3 outline-light">
          <p className="col-auto mb-0">Sorted by</p>
          <div className="col">
            <Select
              options={options}
              value={state.selectedOption}
              onChange={handleChange}
              className="float-start select"
              placeholder={state.selectedOption.label}
            />
          </div>
        </div>
      </div>
      {state.loading && state.selectedOption.value !== "All" ? (
        <div className="loader-container">
          <p className="loader"></p>
          <div className="mess">APIs free, very slow</div>
        </div>
      ) : (
        <>
          <div className="total-tavAzza-items">
            {state.products.length > 0 &&
              state.products.slice(0, state.page).map((item, index) => (
                <div className="total-tavAzza-item" key={index + 1}>
                  <div className="total-tavAzza-item__top" key={item.id}>
                    <div
                      className="img_product"
                      style={{ position: "relative" }}
                    >
                      <Link to={`/products/${item.id}`} key={item.id}>
                        <img src={item.image} alt="" />
                      </Link>
                      <div
                        className={`heart-love ${
                          state.activeLoves[index] ? "active" : ""
                        }`}
                        onClick={() => handleClickLove(index)}
                      >
                        <FaHeart className="icon_heart" />
                      </div>
                    </div>
                  </div>
                  <Link to={`/products/${item.id}`} key={item.id}>
                    <div className="total-tavAzza-item__bottom">
                      <div className="title_product">{item.title}</div>
                      <div className="category_product">{item.category}</div>
                      <div className="price-star_product">
                        <div className="price_product">${item.price}</div>
                        <div className="star_product">
                          <IoStar className="star" />
                          <p>{item.rating.rate}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
          <div className="d-flex justify-content-center m-2">
            {/* {state.loading && state.products.length >= state.page && ( */}
            <button
              type="button"
              className="see-more btn btn-info d-flex justify-content-center p-10"
              onClick={handleSeeMore}
            >
              See more
            </button>
            {/* )} */}
          </div>
        </>
      )}
    </div>
  );
};

export default ViewProductsWithReduce;
