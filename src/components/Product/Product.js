import React from "react";
import { useStateValue } from "../../StateProvider";

import "./Product.css";

const Product = ({ id, title, price, rating, image }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        price: price,
        rating: rating,
        image: image,
        title: title,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={Math.random()}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="book" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
