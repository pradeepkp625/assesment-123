import React from "react";
import logo from "../assets/Flipkart_logo-700x185.png";
import help from "../assets/help_outline-24px (3).svg";
import notify from "../assets/Group 8570.svg";
import dropdown from "../assets/arrow_drop_down_black_24dp-1.svg";
const Navbar = () => {
  return (
    <div className="nav-wrapper d-flex-row">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="right-main">
        <div className="right-nav">
          <p className="light-grey pb5" style={{ fontSize: 14 }}>
            Pay Cycle: 31-May-2021 to 31-June-2021
          </p>
          <div className="d-flex-row">
            Amazon India Pvt Ltd <img src={dropdown} alt="dropdown" />
          </div>
        </div>
        <div className="nav-menus d-flex-row center">
          <div className="menu-wrapper">
            <img src={help} alt="help" />
            <p className="small-text">SUPPORT</p>
          </div>
          <div className="menu-wrapper">
            <div className="notify">3</div>
            <img src={notify} alt="notify" />
            <p className="small-text">NOTIFICATION</p>
          </div>
          <div className="menu-wrapper">
            <div className="profile-name">R</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
