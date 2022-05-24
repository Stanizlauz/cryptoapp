import React from 'react'

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
            <img
              src="img/slider-2.jpg"
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
                <span>Invest In Cryptocoin</span>
                <br />
                <span>Easy Way To Trade Bitcoin.</span>
              </h1>
              <p className="wow fadeInRight2" data-wow-delay="1s">
                We offer free consulting and the best project management <br />
                for your ideas, 100% delivery guaranteed.
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
    </>
  )
}
