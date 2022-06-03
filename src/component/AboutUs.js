import React from 'react'
import Headerss from "./Headerss";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <>
      <Headerss />
    
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
            <img
              src="img/slider-1.jpg"
              className="d-block w-100"
              alt
              title="#slider-caption-1"
            />
            {/* <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div> */}
            <div className="carousel-caption d-none d-md-block">
              <h1 className="wow fadeInLeft2" data-wow-delay="1s">
                <span>About Us</span>
                <br />
              </h1>
            </div>
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
      {/* Carousel wrapper */}

   <section className="about_section bd-bottom padding">
  <div className="container">
    <div className="section_heading align-center mb-40">
      <h2>Making money and making you rich.</h2>
    </div>{/* /Section Heading */}
    <div className="row about_box">
      <div className="col-sm-6 xs-padding">
        <div className="about_info">
          <h3>Recognizing your need is our primary motive.</h3>
          <p>Our aim is to minimize risk and make profit from the crypto currency market while putting smiles on our customers faces.</p>

        </div>
      </div>
      <div className="col-sm-6 xs-padding">
        <div className="why_content">
          <h3>Why Choose Us?</h3>
          <ul>
            <li><i className="fa fa-check" />We offer the most package of service in the industry.</li>
            <li><i className="fa fa-check" />High customer retention rate. Printing and type company.</li>
            <li><i className="fa fa-check" />Our service features are unmatched in the center.</li>
            <li><i className="fa fa-check" />Afordable pricing offers. Printing and typesetting house.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="about_image" />
</section>{/* /About Section */}


<section className="team section">
  <div className="container">
    <h1 className="section-title2">Our Team</h1>
    <div className="row">
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="team-item">
          <figure>
            <img src="img/joandav.jpg" alt />
            <figcaption>
              <div className="info">
                <h3>Miss Joan Davies</h3>
                <p>Crypto Expert</p>
                {/* <a href="https://t.me/Stanizlauz" aria-hidden="true"><i className="fa-telegram" /></a> */}
              </div>
              <div className="social">
                <a href="https://t.me/Stanizlauz"><i className="ti ti-comment" aria-hidden="true"></i></a>
                {/* <a href="#" className="facebook" data-abc="true"><i className="fa fa-facebook" /></a> */}
                {/* <a href="#" className="google-plus" data-abc="true"><i className="fa fa-linkedin" /></a> */}
              </div>
              
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="team-item">
          <figure>
            <img src="img/denise-thompson.jpg" alt />
            <figcaption>
              <div className="info">
                <h3>Miss Denise Thompson</h3>
                <p>Crypto Expert</p>
              </div>
              <div className="social">
                {/* <a href="#" className="twitter" data-abc="true"><i className="fa fa-twitter" /></a>
                <a href="#" className="facebook" data-abc="true"><i className="fa fa-facebook" /></a>
                <a href="#" className="google-plus" data-abc="true"><i className="fa fa-linkedin" /></a> */}
                <a href="https://t.me/Denisethompson"><i className="ti ti-comment" aria-hidden="true"></i></a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="team-item">
          <figure>
            <img src="img/anitajenna.jpg" alt />
            <figcaption>
              <div className="info">
                <h3>Alan Stuart</h3>
                <p>Chief Executive Officer</p>
              </div>
              <div className="social">
                <a href="https://t.me/Denisethompson"><i className="ti ti-comment" aria-hidden="true"></i></a>
                {/* <a href="#" className="twitter" data-abc="true"><i className="fa fa-twitter" /></a>
                <a href="#" className="facebook" data-abc="true"><i className="fa fa-facebook" /></a>
                <a href="#" className="google-plus" data-abc="true"><i className="fa fa-linkedin" /></a> */}
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="team-item">
          <figure>
            <img src="img/helen.jpg" alt />
            <figcaption>
              <div className="info">
                <h3>Miss Helen Williams</h3>
                <p>Crypto Expert</p>
              </div>
              <div className="social">
                <a href="https://t.me/experthelen"><i className="ti ti-comment" aria-hidden="true"></i></a>
                {/* <a href="#" className="twitter" data-abc="true"><i className="fa fa-twitter" /></a>
                <a href="#" className="facebook" data-abc="true"><i className="fa fa-facebook" /></a>
                <a href="#" className="google-plus" data-abc="true"><i className="fa fa-linkedin" /></a> */}
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="team-item">
          <figure>
            <img src="img/evelyn.jpg" alt />
            <figcaption>
              <div className="info">
                <h3>Miss Evelyn Smith</h3>
                <p>Crypto Expert</p>
              </div>
              <div className="social">
                <a href="https://t.me/evelynsmith"><i className="ti ti-comment" aria-hidden="true"></i></a>
                {/* <a href="#" className="twitter" data-abc="true"><i className="fa fa-twitter" /></a>
                <a href="#" className="facebook" data-abc="true"><i className="fa fa-facebook" /></a>
                <a href="#" className="google-plus" data-abc="true"><i className="fa fa-linkedin" /></a> */}
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      {/* <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="team-item">
          <figure>
            <img src="https://i.imgur.com/J6l19aF.jpg" alt />
            <figcaption>
              <div className="info">
                <h3>Michael Slater</h3>
                <p>Marketing Manager</p>
              </div>
              <div className="social">
                <a href="#" className="twitter" data-abc="true"><i className="fa fa-twitter" /></a>
                <a href="#" className="facebook" data-abc="true"><i className="fa fa-facebook" /></a>
                <a href="#" className="google-plus" data-abc="true"><i className="fa fa-linkedin" /></a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div> */}
    </div>
  </div>
</section>

<div id="counter" className="counter_section">
  <div className="container">
    <ul className="row counters">
      <li className="col-md-3 col-sm-6 sm-padding">
        <div className="counter_content">
          <i className="ti-reload" />
          <h3 className="counter">85389</h3>
          <h4>TOTAL TRANSACTIONS</h4>
        </div>
      </li>
      <li className="col-md-3 col-sm-6 sm-padding">
        <div className="counter_content">
          <i className="ti-time" />
          <h3 className="counter">10293</h3>
          <h4>TRANSACTIONS PER HOUR</h4>
        </div>
      </li>
      <li className="col-md-3 col-sm-6 sm-padding">
        <div className="counter_content">
          <i className="ti-stats-up" />
          <h3 className="counter">50177</h3>
          <h4>LARGEST TRANSACTIONS</h4>
        </div>
      </li>
      <li className="col-md-3 col-sm-6 sm-padding">
        <div className="counter_content">
          <i className="ti-comments" />
          <h3 className="counter">669</h3>
          <h4>Positive Feedbacks</h4>
        </div>
      </li>
    </ul>
  </div>
</div>{/* Counter Section */}
<Footer />

    </>
  )
}
