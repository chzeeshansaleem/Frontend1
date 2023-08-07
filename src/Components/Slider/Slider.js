import React, { useState } from "react";
import "./Slider.css";
import { slider } from "./SliderData";
import { Link } from "react-router-dom";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    const index = activeIndex === slider.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(index);
  };

  const prevSlide = () => {
    const index = activeIndex === 0 ? slider.length - 1 : activeIndex - 1;
    setActiveIndex(index);
  };

  return (
    <div className=" ">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {slider.map((item, index) => (
            <div
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
              key={index}
            >
              <div className="mt-5">
                <div className="row bg-dark align-items-center justify-content-center">
                  <div className="col-md-6 offset-1 ">
                    <div className="row">
                      <h1 className="text-center   text-white col-12 align-self-center">
                        {item.heading}
                      </h1>
                      <p className="lead text-white col-12 float-center text-center">
                        {item.Description}
                      </p>
                    </div>
                    <Link to={item.url}>
                      <button className="btn  text-white btn-outline-danger rounded-0">
                        {item.btn}
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-5">
                    <img
                      src={item.imag}
                      style={{ height: "85vh" }}
                      alt="Slider Images"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
          onClick={prevSlide}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
          onClick={nextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
export default Slider;
