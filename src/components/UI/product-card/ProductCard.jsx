import React from "react";
import "../../../styles/product-card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();
  const addToCart = () => {
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
        <img src={image01} alt="product-img" loading="lazy" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/&#8358;{id}`}>{title}</Link>
        </h5>
        <div style={{display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "space-between"}}>
          <span className="product__price">&#8358;{price}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;