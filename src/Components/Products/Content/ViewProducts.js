import React, { useEffect, useState, useRef } from "react";
import { getAllProducts, getCategory } from "../../../severs/apiService";
import { FaHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setCount } from "../../../redux/countSlice";
import Select from "react-select";
import "../Products.scss";
import "./ViewProducts.scss";

const options = [
  { value: "All", label: "All" },
  { value: "electronics", label: "Electronics" },
  { value: "jewelery", label: "Jewelery" },
  { value: "men's clothing", label: "Men's Clothing" },
  { value: "women's clothing", label: "Women's Clothing" },
];

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [activeLoves, setActiveLoves] = useState([]);
  const [page, setPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dispatch = useDispatch();
  const isFetching = useRef(false);

  useEffect(() => {
    fetchAllProducts(page, selectedOption.value);
  }, [page, selectedOption]);

  const fetchAllProducts = async (page, category) => {
    if (isFetching.current) return;
    isFetching.current = true;

    let res;

    if (category && category !== "All") {
      res = await getCategory(category, page);
    } else {
      res = await getAllProducts(page);
    }

    if (res) {
      if (page === 10) {
        setProducts(res.data);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...res.data]);
      }
      setActiveLoves(Array(res.data.length).fill(false));

      if (res.data.length < page) {
        setLoading(false);
      }
    }
    isFetching.current = false;
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setPage(10); // Reset to initial page count for new category
    setLoading(true);
  };

  const handleClickLove = (index) => {
    setActiveLoves((prevActiveLoves) => {
      const newActiveLoves = [...prevActiveLoves];
      newActiveLoves[index] = !newActiveLoves[index];
      const newCount = newActiveLoves.filter(Boolean).length;
      dispatch(setCount(newCount)); // Update count in Redux

      return newActiveLoves;
    });
  };

  const handleSeeMore = () => {
    setPage((prevPage) => prevPage + 5);
  };

  return (
    <div className="total-tavAzza browse-categories">
      <div>
        <div className="option row d-flex align-items-center ms-3 outline-light">
          <p className="col-auto mb-0">Sorted by</p>
          <div className="col">
            <Select
              options={options}
              value={selectedOption}
              onChange={handleChange}
              className="float-start select"
              placeholder={selectedOption.label}
            />
          </div>
        </div>
      </div>
      {loading && selectedOption.value !== "All" ? (
        <div class="loader-container">
          <p class="loader"></p>
          <div className="mess">APIs free, very slow</div>
        </div>
      ) : (
        <>
          <div className="total-tavAzza-items">
            {products.length > 0 &&
              products.slice(0, page).map((item, index) => (
                <div className="total-tavAzza-item" key={index}>
                  <div className="total-tavAzza-item__top">
                    <div
                      className="img_product"
                      style={{ position: "relative" }}
                    >
                      <img src={item.image} alt="" />
                      <div
                        className={`heart-love ${
                          activeLoves[index] ? "active" : ""
                        }`}
                        onClick={() => handleClickLove(index)}
                      >
                        <FaHeart className="icon_heart" />
                      </div>
                    </div>
                  </div>
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
                </div>
              ))}
          </div>
          <div className="d-flex justify-content-center m-2">
            {loading && products.length >= page && (
              <button
                type="button"
                className="see-more btn btn-info d-flex justify-content-center p-10"
                onClick={handleSeeMore}
              >
                See more
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ViewProducts;
