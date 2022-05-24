import React from 'react'
import Team from './Team'

export default function AboutUs() {
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
                <span>Welcome</span>
              </h1>
              <p className="wow fadeInRight2" data-wow-delay="1s">
               Welcome
              </p>
              <a
                href="#"
                className="button_1 wow bounceInUp"
                data-wow-delay="0.8s"
              >
                Learn More
              </a>
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
      {/* Carousel wrapper */}

   <section className="about_section bd-bottom padding">
  <div className="container">
    <div className="section_heading align-center mb-40">
      <h4>Number One</h4>
      <h2>Buying And Selling Bitcoins</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />It has survived not only five centuries.</p>
    </div>{/* /Section Heading */}
    <div className="row about_box">
      <div className="col-sm-6 xs-padding">
        <div className="about_info">
          <h3>What Is Cryptocoin?</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <a href="#" className="button_1">More About Us</a>
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


<Team />

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
    </>
  )
}
