// components/Product/Product.js
import React, { useEffect, useState, useRef } from "react";
import { getAllProducts } from "../../severs/apiService";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setCount } from "../../redux/countSlice";
import "./Products.scss";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [activeLoves, setActiveLoves] = useState([]);
  const [page, setPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const elementRefs = useRef([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllProducts(page);
  }, [page]);

  const fetchAllProducts = async () => {
    const res = await getAllProducts(page);
    if (res) {
      setProducts(res.data);
      setActiveLoves(Array(res.data.length).fill(false));
    }
  };

  const handleClickLove = (index) => {
    setActiveLoves((prevActiveLoves) => {
      const newActiveLoves = [...prevActiveLoves];
      newActiveLoves[index] = !newActiveLoves[index];
      const newCount = newActiveLoves.filter(Boolean).length;
      dispatch(setCount(newCount)); // Cập nhật count trong Redux

      console.log(newCount);

      return newActiveLoves;
    });
  };
  const handleSeeMore = () => {
    setPage(page + 5);

    if (products.length < page) {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="browse-categories">
        <h3 className="categories">Browse Categories</h3>
        <div className="browse-categories-items">
          {products &&
            products.length > 0 &&
            products.slice(0, 3).map((item, index) => (
              <div className="browse-categories-item" key={index + 1}>
                <div className="img">
                  <img src={item.image} alt="" className="image-product" />
                </div>
                <div className="info-product">
                  <div className="price">
                    ${item.price} - ${item.price * 6}{" "}
                  </div>
                  <div className="description">{item.description}</div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="total-tavAzza browse-categories">
        <h3 className="categories">Total LavAzza 1320</h3>
        <div className="total-tavAzza-items">
          {products &&
            products.length > 0 &&
            products.slice(0, page).map((item, index) => (
              <div className="total-tavAzza-item" key={index}>
                <div className="total-tavAzza-item__top">
                  <div className="img_product" style={{ position: "relative" }}>
                    <img src={item.image} alt="" />
                    <div
                      ref={(el) => (elementRefs.current[index] = el)}
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
      </div>
      <div className="d-flex justify-content-center m-2">
        {loading && (
          <button
            type="button"
            class="see-more btn btn-info d-flex justify-content-center p-10"
            onClick={handleSeeMore}
          >
            {products.length >= page
              ? "See more"
              : `${products.length ? "Loading" : ""}`}
          </button>
        )}
      </div>
    </>
  );
};

export default Product;
