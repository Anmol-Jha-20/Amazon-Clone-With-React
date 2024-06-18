import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../Provider/StateProvider.jsx";
import { auth } from "../firebase.js";
// import Sidebar from "./Sidebar.jsx";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  const handleClick = () => {
    document
      .getElementById("sidebar-container-navigation-id")
      .classList.toggle("slidebar-show");
  };
  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            className="header_logo"
            src="Amazon-Logo.png"
            alt="Amazon Logo"
          />
        </Link>

        <div className="nav_address border">
          <p className="first_address">Deliver to </p>
          <div className="add_icon">
            <i className="fa-solid fa-location-dot"></i>
            <p className="second_address">India</p>
          </div>
        </div>

        <div className="header_search">
          <select className="search_select">
            <option>All</option>
          </select>
          <input
            className="header_searchInput"
            type="text"
            placeholder="Search Amazon.in"
          />
          <SearchIcon className="header_searchIcon" />
        </div>

        <div className="border lang">
          <select className="nav_lang">
            <option>EN</option>
          </select>
        </div>

        <div className="header_nav">
          <Link to={!user && "/login"}>
            <div
              onClick={handleAuthentication}
              className="header_option border"
            >
              <span className="header_optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header_optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <div className="header_option border">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
          <div className="header_option border">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header_optionBasket border">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="header_optionLineTwo header_basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="panel">
        <div className="panel_all border panel_padding" onClick={handleClick}>
          <i className="fa-solid fa-bars"></i>
          All
        </div>
        <div className="panel_ops">
          <p className="border panel_padding">Amazon miniTV</p>
          <p className="border panel_padding">Sell</p>
          <p className="border panel_padding one">Best Sellers</p>
          <p className="border panel_padding ">Mobiles</p>
          <p className="border panel_padding one">Fashion</p>
          <p className="border panel_padding one">Electronics</p>
          <p className="border panel_padding ">Today's Deals</p>
          <p className="border panel_padding one">Registry</p>
          <p className="border panel_padding one">Gifts Cards</p>
          <p className="border panel_padding one">New Releases</p>
          <p className="border panel_padding ">Amazon Pay</p>
          <p className="border panel_padding ">Customer Service</p>
          <p className="border panel_padding one">Computers</p>
        </div>
      </div>
      <div
        className="sidebar-container-navigation"
        id="sidebar-container-navigation-id"
      >
        <div className="sidebar-left-part">
          <div className="sidebar-top">
            <i className="fa-solid fa-circle-user"></i>
            <h2>
              Hello, <span>{user ? "Sign Out" : "Sign In"}</span>
            </h2>
          </div>
          <div className="sidebar-wrap">
            <div className="sidebar-item">
              <h2>Trending</h2>
              <p>Best Sellers</p>
              <p>New Releases</p>
              <p>Movers and Shakers</p>
            </div>
            <div className="sidebar-item">
              <h2>Digital Content And Devices</h2>
              <p>Echo & Alexa</p>
              <p>Fire TV</p>
              <p>Kindle E-Readers & eBooks</p>
              <p>Audible Audiobooks</p>
              <p>Amazon Prime Video</p>
              <p>Amazon Prime Music</p>
            </div>
            <div className="sidebar-item">
              <h2>Shop By Category</h2>
              <p>Mobiles, Computes</p>
              <p>TV, Appliances, Electronic</p>
              <p>Men's Fashion</p>
              <p>Women's Fashion</p>
              <p>See All</p>
            </div>
            <div className="sidebar-item">
              <h2>Programs & Features</h2>
              <p>Gift Cards & Mobile Recharges</p>
              <p>Flight Tickets</p>
              <p>#Foundlt-OnAmazon</p>
              <p>Clearance store</p>
            </div>
            <div className="sidebar-item space">
              <h2>Help & Settings</h2>
              <p>Your Account</p>
              <p>Customer Service</p>
              <p>Sign in</p>
            </div>
          </div>
        </div>
        <button onClick={handleClick} id="sidebar-navigation-close">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </>
  );
}

export default Header;
