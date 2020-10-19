import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__border">
        <div className="footer__option">
          <h3>Get to Know Us</h3>
          <p>About us</p>
          <p>Gift a Smile</p>
        </div>
        <div className="footer__option">
          <h3>Connect With US</h3>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <div className="footer__option">
          <h3>Make money with Us </h3>
          <p>Sell on Shoppers</p>
          <p>Become an Affiliate</p>
        </div>
        <div className="footer__option">
          <h3>Let us help you</h3>
          <p>Your Account</p>
          <p>Return Center</p>
        </div>
        <div className="footer__designer">
          <h4>Designed with 💖</h4>
          <p>By Sagar Bhatia</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
