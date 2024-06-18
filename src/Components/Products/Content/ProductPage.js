import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "./ProductPage.scss"; // Import the SCSS file
import Header from "../../Header/Header";
import { getProductSinger } from "../../../severs/apiService";
import "./ViewProducts.scss";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useProductsContext } from "./ContextProduct";

const ProductPage = () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // scrollTo on top
  const { id } = useParams();
  const { product, setProduct, newCart, setNewCart, addToCart } =
    useProductsContext();
  const dispatch = useDispatch();

  let count = useSelector((state) => state.count);
  if (count >= 0) {
    count = 0;
    toast.dismiss();
  }

  useEffect(() => {
    fetchProductSinger(id);
  }, [id]);

  const fetchProductSinger = async (id) => {
    try {
      const res = await getProductSinger(id);
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const handleAddCart = () => {
    setNewCart(product);
    dispatch({
      type: "GET_PRODUCTS",
      payload: product,
    });
  };

  if (!product) {
    return (
      <>
        <Header />
        <div className="loader-container">
          <p className="loader"></p>
          <div className="mess">APIs free, very slow</div>
        </div>
      </>
    );
  }

  return (
    <div className="container">
      <Header />
      <div className="link-to"></div>
      <div className="detail-product">
        <div className="detail-product-left">
          <div className="img-product">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
        <div className="detail-product-right">
          <div className="title">{product.title}</div>
          <div className="description">{product.description}</div>
          <div className="info-product row">
            <div className="info-left col">
              <div className="star">
                <FaStar />({product?.rating?.rate}){" "}
                {product?.rating?.count * 23} reviews
              </div>
              <div className="size-weight">
                <ul>
                  <li>Small</li>
                  <li>Medium</li>
                  <li>Large</li>
                </ul>
              </div>
            </div>
            <div className="info-right col">
              <div className="category">Category: {product.category}</div>
              <div className="count">Count: {product?.rating?.count}</div>
              <div className="price">
                <div className="old-selling-price">${product.price * 0.42}</div>
                <div className="new-selling-price">${product.price}</div>
              </div>
              <button>Buy now</button>
              <button
                className="add-cart"
                onClick={() =>
                  addToCart({
                    title: product.title,
                    id: product.id,
                    image: product.image,
                    count: product?.rating?.count,
                    category: product.category,
                  })
                }
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="description-product">
        <div className="review-header">
          <ul>
            <li>Description</li>
            <li>Features</li>
            <li>Review ({product?.rating?.count * 23})</li>
            <li>Similar</li>
          </ul>
        </div>
        <div className="review-info description">{product.description}</div>
        <div className="review-info Review">
          <div className="name">Jod</div>
          <div className="username">johnd</div>
          <div className="email">John@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
