import React from "react";
import "../../../styles/product-card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import toast, { Toaster } from "react-hot-toast";
const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();
  const addToCart = () => {
    toast.success("Item added..");
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={``}>{title}</Link>
        </h5>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <span className="product__price">&#8358;{price}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
          <Toaster
            position="top-center"
            reverseOrder={true}
            containerStyle={{
              zIndex: 99999 // For the container
             }}
            toastOptions={{
              className: "",
              style: {
                zIndex: 99999 // For toasts
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
