import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="footer-area bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4 className="footer-heading ">Lush Store</h4>
              <div className="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="col-md-3">
              <h4 className="footer-heading">Quick Links</h4>
              <div className="" />
              <div className="mb-2">
                <a href className="text-white">
                  Home
                </a>
              </div>
              <div className="mb-2">
                <Link to="/aboutus" className="text-white">
                  About Us
                </Link>
              </div>
              <div className="mb-2">
                <Link to="/contactus" className="text-white">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="footer-heading">Shop Now</h4>
              <div className="" />
              <div className="mb-2">
                <a href className="text-white">
                  Collections
                </a>
              </div>
              <div className="mb-2">
                <a href className="text-white">
                  Sale
                </a>
              </div>
              <div className="mb-2">
                <a href className="text-white">
                  New Arrivals Products
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="footer-heading">Reach Us</h4>
              <div className="" />
              <div className="mb-2">
                <p>
                  <i className="fa fa-map-marker" /> 6A BOR Main Road Johar Town
                  Lahore
                </p>
              </div>
              <div className="mb-2">
                <a href className="text-white">
                  <i className="fa fa-phone" /> +92 3440177289
                </a>
              </div>
              <div className="mb-2">
                <a href className="text-white">
                  <i className="fa fa-envelope" /> chzeeshan1322@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container justify-content-md-center">
          <div className="row ">
            <div className="col-md-12">
              <p className> Lush Store Web all rights reserved © 2023.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
