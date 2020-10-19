import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "./Header.css";
import logo from "../../assets/logo.png";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="shoppers" />
      </Link>

      <div className="header__search">
        <input className="header__searchinput" type="text" />
        <SearchIcon className="header__searchlogo" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__option1">Hello {user ? `${user.email}` : "Guest"}</span>
            <span className="header__option2">{user ? "Sign Out " : "Sign In"}</span>
          </div>
        </Link>
        <Link to="/primevideos">
          <div className="header__option">
            <span className="header__option1">Your</span>
            <span className="header__option2">Prime</span>
          </div>
        </Link>
      </div>

      <Link to="/checkout">
        <div className="header__optionbasket">
          <ShoppingBasketIcon />
          <span className="header__option2 header__basketCount">{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
