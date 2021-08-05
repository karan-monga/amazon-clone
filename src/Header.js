/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon"></SearchIcon>
        {/* Logo */}
      </div>
      <div className="header_nav">
        <div className="header_link">
          <span className="header_link_line1">Hello Guest</span>
          <span className="header_link_line2">Sign In</span>
        </div>
        <div className="header_link">
          <span className="header_link_line1">Return</span>
          <span className="header_link_line2">& Orders</span>
        </div>
        <div className="header_link">
          <span className="header_link_line1">Your</span>
          <span className="header_link_line2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_link-cart">
            <ShoppingCartOutlinedIcon />
            <span className="header_link-cart-count">{basket?.length}</span>
            <span className="header_link_line2">Cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
