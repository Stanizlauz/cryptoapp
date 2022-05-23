import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import TradingView from "./TradingView";

export default function Headerss() {
  return (
    <>

      <header id="header" className="header_section bd-bottom">
        <div className="top_header">
          <div className="container">
            <div className="top_content_wrap row">
              <div className="col-sm-8">
                <ul className="left_info">
                  <li>
                    <a href="#">
                      <i className="ti-email" />
                      Info@YourDomain.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-mobile" />
                      +(333) 052 39876
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 d-none d-md-block">
                <ul className="right_info">
                  <li>
                    <Link to="/login"><i className="ti-user" />Login</Link>
                  </li>
                  <li>
                    <Link to="/register"><i className="ti-pencil-alt" />Register</Link>
                  </li>
                  <li>
                    <Link to="/register"><i className="ti-new-window" />Logout</Link>
                  </li>
                  <li>
                    <Link to="/register"><i className="ti-bar-chart" />Dashboard</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_header">
          <div className="container">
            <div className="bottom_content_wrap row">
              <div className="col-sm-4">
                <a href="#">
                  <img src="img/logo.png" alt="Brand" />
                </a>
              </div>
              <div className="col-sm-8 text-right">
                <ul id="mainmenu" className="nav navbar-nav nav-menu">
                  <li className="active">
                    {" "}
                    <a href="index.html">Home</a>
                   
                  </li>
                  <li>
                  <Link to="/about">About</Link>
                   
                  </li>
                  <li>
                  <Link to="/login">Plans</Link>
                  </li>
                  <li>
                  <Link to="/faqs">FAQS</Link>
                  </li>
                  <li>
                  <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
             
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header Section */}

      {/* <div className="ticker_wrapper bd-bottom">
  <ul id="webTicker">
    <li><img src="img/c-1.png" alt="icon" /> Bitcoin<span>(BTC)</span> $545.285</li>
    <li><img src="img/c-2.png" alt="icon" /> Ethereum<span>(LTC)</span> $123.912</li>
    <li><img src="img/c-3.png" alt="icon" /> Exchange Union<span>(AMD)</span> $611.278</li>
    <li><img src="img/c-4.png" alt="icon" /> Ripple<span>(DASH)</span> $095.385</li>
    <li><img src="img/c-5.png" alt="icon" /> DigitalCash<span>(XMR)</span> $745.285</li>
    <li><img src="img/c-6.png" alt="icon" /> Monero<span>(ETH)</span> $835.193</li>
    <li><img src="img/c-7.png" alt="icon" /> Litecoin<span>(ADA)</span> $381.067</li>
  </ul>
</div>Ticker */}

     <TradingView />

      {/* Carousel wrapper */}
<div id="carouselDarkVariant" className="carousel slide carousel-fade carousel-dark" data-mdb-ride="carousel">
  {/* Indicators */}
  <div className="carousel-indicators">
    <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to={1} aria-label="Slide 1" />
    <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to={2} aria-label="Slide 1" />
  </div>
  {/* Inner */}
  <div className="carousel-inner">
    {/* Single item */}
    <div className="carousel-item active">
    <img src="img/slider-2.jpg" className="d-block w-100" alt title="#slider-caption-1" />
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div> */}
       <div className="carousel-caption d-none d-md-block">
              <h1 className="wow fadeInLeft2" data-wow-delay="1s"><span>Invest In Cryptocoin</span><br /><span>Easy Way To Trade Bitcoin.</span></h1>
              <p className="wow fadeInRight2" data-wow-delay="1s">We offer free consulting and the best project management <br />for your ideas, 100% delivery guaranteed.</p>
              <a href="#" className="button_1 wow bounceInUp" data-wow-delay="0.8s">Learn More</a>
            </div>
      
    </div>
    {/* Single item */}
    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp" className="d-block w-100" alt="Mountaintop" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    {/* Single item */}
    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp" className="d-block w-100" alt="Woman Reading a Book" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  

  {/* Inner */}
  {/* Controls */}
  {/* <button className="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button> */}
</div>
{/* Carousel wrapper */}
    </>
  );
}
