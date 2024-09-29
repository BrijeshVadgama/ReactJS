import React, { useState } from "react";
import logo1 from "../assets/logo1.png";
import "../css/Style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav>
          <div className="logo">
            <img src={logo1} alt="Logo" />
          </div>
          <div className="menus">
            <ul>
              <li>
                <Link to="/" onClick="closeMenu()">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/OurAirCraft">Our AirCraft</Link>
              </li>
              <li>
                <Link to="/Safety">Safety</Link>
              </li>
              <li>
                <Link to="/Charters">Charters</Link>
              </li>
              <li>
                <Link to="/ContactUs">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="login">
            <button>
              <i class="fa-regular fa-circle-user"></i> Login
            </button>
          </div>
          <div class="menu-icon">
            <i class="fa-solid fa-bars-staggered" onclick="toggleMenu()"></i>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
