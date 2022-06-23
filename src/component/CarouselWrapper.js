import React from "react";
import { Link } from "react-router-dom";

export default function CarouselWrapper() {
  return (
    <>
      {/* Carousel wrapper */}
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark"
        data-mdb-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            data-mdb-target="#carouselDarkVariant"
            data-mdb-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            data-mdb-target="#carouselDarkVariant"
            data-mdb-slide-to={1}
            aria-label="Slide 1"
          />
          <button
            data-mdb-target="#carouselDarkVariant"
            data-mdb-slide-to={2}
            aria-label="Slide 1"
          />
        </div>
        {/* Inner */}
        <div className="carousel-inner">
          {/* Single item */}
          <div className="carousel-item active">
            <div className="carousel-caption d-none d-md-block mb-4">
              <h1
                className="wow fadeInLeft2 mb-4"
                data-wow-delay="1s"
                style={{
                  backgroundColor: "#00757F",
                  padding: "20px 15px",
                  borderRadius: "4px",
                }}
              >
                <span>Get Organized and make Profit</span>
                <br />
              </h1>
              <p
                className="wow fadeInRight2"
                data-wow-delay="1s"
                style={{
                  backgroundColor: "#4b4b4f",
                  borderRadius: "4px",
                  }}
              >
                All you need to become a better earner in one place
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <div className="col-sm-6 xs-padding mb-4">
                <div className="about_info">
                  <h3
                    style={{
                      backgroundColor: "#00757F",
                      padding: "10px 15px",
                      borderRadius: "2px",
                    }}
                  >
                    Recognizing your need is our primary motive.
                  </h3>
                  <p
                    style={{
                      backgroundColor: "#4b4b4f",
                      borderRadius: "4px",
                    }}
                  >
                    Our aim is to minimize risk and make profit from the crypto
                    currency market while putting smiles on our customers faces.
                  </p>
                  {/* <a href="#" className="button_1">More About Us</a> */}
                  <Link
                    to="/about"
                    className="btn btn-outline-light btn-xs btn-icon-text"
                  >
                    More about us
                  </Link>
                </div>
              </div>
            </div>
            <img
              src="img/landinhpagegif.jpg"
              className="d-block w-100"
              alt=""
              title="#slider-caption-1"
            />
          </div>
          {/* Single item */}
          <div className="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
              className="d-block w-100"
              alt="Mountaintop"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          {/* Single item */}
          <div className="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
              className="d-block w-100"
              alt="Woman Reading a Book"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
