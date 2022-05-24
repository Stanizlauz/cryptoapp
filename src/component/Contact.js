import React from 'react'

export default function Contact() {
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
              src="img/slider-3.jpg"
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
                <span>Contact Us Here</span>
                <br />
                <span>Always Available</span>
              </h1>
              <p className="wow fadeInRight2" data-wow-delay="1s">
                Thank You
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


   <section className="contact_section bd-bottom padding">
  <div className="container">
    <div className="row">
      <div className="col-sm-6 xs-padding">
        <div className="contact_info">
          <h2>Contact Information</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <ul>
            <li><i className="ti-mobile" /><span>Call:</span> +88 023 524 0251</li>
            <li><i className="ti-envelope" /><span>Mail:</span> Cryptocoin@yourmail.com</li>
            <li><i className="ti-location-arrow" /><span>Address:</span>  692 Eagle Lane Duluth, Australia.</li>
          </ul>
        </div>
      </div>
      <div className="col-sm-6 xs-padding">
        <div className="contact_form">
          <h2>Send Us Message</h2>
          <p>Please don’t hesitate to chat with me just drop a line.</p>
          <form action="contact.php" method="post" id="ajax_form" className="form-horizontal">
            <div className="form-group row">
              <div className="col-sm-6">
                <input type="text" id="name" name="name" className="form-control" placeholder="Name" required />
              </div>
              <div className="col-sm-6">
                <input type="email" id="email" name="email" className="form-control" placeholder="Email" required />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12">
                <textarea id="message" name="message" className="form-control" placeholder="Message" required defaultValue={""} />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12">
                <button id="submit" className="button_1" type="submit">Send Message</button>
              </div>
            </div>
            <div id="form-messages" className="alert" role="alert" />
          </form>
        </div>{/* /.contact_form */}
      </div>
    </div>
  </div>
</section>{/* /.Contact Section */}

    </>
  )
}
