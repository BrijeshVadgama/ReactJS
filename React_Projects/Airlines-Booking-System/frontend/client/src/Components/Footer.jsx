import React from "react";
import logo1 from "../assets/logo1.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-sm-6 col-xl-3 mt-4">
              <img src={logo1} alt="" />
              <p className="det details">Subscribe to our special offers</p>
              <p className="det1 details">
                Save with our latest fares and offers.
              </p>
              <input
                type="text"
                placeholder="Email Address"
                className="details"
              />
              <button type="button" className="btn btn-outline-secondary">
                Subscribe
              </button>
              <div className="icons">
                <a href="/">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="/">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="/">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="/">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-sm-6 col-xl-3 mt-4">
              <h5 className="heading fw-bold">About Us</h5>
              <div className="row details">
                <a href="/" className="col-12">
                  About Us
                </a>
                <a href="/" className="col-12">
                  Our Business
                </a>
                <a href="/" className="col-12">
                  Our Planet
                </a>
                <a href="/" className="col-12">
                  Our People
                </a>
                <a href="/" className="col-12">
                  Our Communities
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-sm-6 col-xl-3 mt-4">
              <h5 className="heading fw-bold">Before You Fly</h5>
              <div className="row details">
                <a href="/" className="col-12">
                  Baggage
                </a>
                <a href="/" className="col-12">
                  Visa and Passport Information
                </a>
                <a href="/" className="col-12">
                  Health
                </a>
                <a href="/" className="col-12">
                  Travel Information
                </a>
                <a href="/" className="col-12">
                  Rules and Notices
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-sm-6 col-xl-3 mt-4">
              <h5 className="heading fw-bold">Experience</h5>
              <div className="row details">
                <a href="/" className="col-12">
                  Cabin Features
                </a>
                <a href="/" className="col-12">
                  What's on your Flight
                </a>
                <a href="/" className="col-12">
                  Inflight Entertainment
                </a>
                <a href="/" className="col-12">
                  Dining
                </a>
                <a href="/" className="col-12">
                  Our Lounges
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
