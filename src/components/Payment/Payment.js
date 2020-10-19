import React from "react";
import { Link } from "react-router-dom";

import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Payment.css";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout"> {basket?.length} items </Link>)
        </h1>
        {/* //address/////////////////////////// */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Mumbai, Maharashtra</p>
          </div>
        </div>

        {/* //details/////////////////////////// */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="product__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
        {/* //payment//////////////////////////// */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Methods</h3>
          </div>
          <div className="payment__details">
            <input type="checkbox" className="payment__detailsoption" /> Credit Card
            <input type="checkbox" className="payment__detailsoption" /> COD
            <input type="checkbox" className="payment__detailsoption" /> EMI
            <button className="payment__detailsbutton">Proceed to Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
