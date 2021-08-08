/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header-line">
        <Link to="/">
          <img
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG8.png"
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
          <Link to="/checkout">
            <div className="header_link-cart">
              <ShoppingCartOutlinedIcon />
              <span className="header_link-cart-count">{basket?.length}</span>
              <span className="header_link_line2">Cart</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="header-row2">
        <div className="row2-left">
          <Link to="/checkout">
            <div className="header_link-cart">
              <span className="header_link_line2">Delivering to </span>
              <span className="header_link_line3">John Doe</span>
            </div>
          </Link>
          <Link to="/checkout">
            <div className="header_link-cart">
              <span className="spaced-link">Try Prime</span>
            </div>
          </Link>
          <Link to="/checkout">
            <div className="header_link-cart">
              <span className="spaced-link">Sell on Amazon</span>
            </div>
          </Link>
        </div>
        <div className="row2-right">
        <Link to="/checkout">
            <div className="header_link-cart">
              <span className="spaced-link">Sell on Amazon</span>
            </div>
          </Link><Link to="/checkout">
            <div className="header_link-cart">
              <span className="spaced-link">Help</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
