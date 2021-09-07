import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header-logo"
        />
      </Link>

      <div className="header-search">
        <input className="header-search-bar" type="text" />
        <SearchIcon className="header-search-icons" />
      </div>

      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option">
            <span className="header-option1">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header-option2" onClick={handleAuth}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header-option">
          <span className="header-option1">Return</span>
          <Link to="/orders">
            <span className="header-option2">& Orders</span>
          </Link>
        </div>

        <div className="header-option">
          <span className="header-option1">Your</span>
          <span className="header-option2">Prime</span>
        </div>

        <div className="header-option"></div>

        <Link to="/checkout">
          <div className="header-option-cart">
            <ShoppingCartIcon />
            <span className="header-option2 header-cart-count">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
