/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
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
        <div className="header_link-cart">
        <ShoppingCartOutlinedIcon/>
        <span className="header_link-cart-count">0</span>
          <span className="header_link_line2">Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
