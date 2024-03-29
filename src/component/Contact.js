import React from "react";
import Headerss from "./Headerss";
import Footer from "./Footer";
import emailjs from '@emailjs/browser';


export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_is1k6x2', 'template_kh9sg39', e.target, 'user_3Qmrr6MR0vYHh7GiRvOW9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
};
  
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
              src="img/slider-3.jpg"
              className="d-block w-100 pd-4"
              alt=""
              title="#slider-caption-1"
            />
         
            <div className="carousel-caption d-none d-md-block mb-8">
              <h1 className="wow fadeInLeft2 mb-12" data-wow-delay="1s">
                <span style={{fontSize: '70px', fontWeight: 'bolder'}}>Contact Us Here</span>
                <br />
                <span>Always Available</span>
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
                <p>
                 Let us hear from you!
                </p>
                <ul>
                 
                  <li>
                    <i className="ti-envelope text-dark" />
                    <span>Mail:  arkstrades.info@gmail.com</span> 
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 xs-padding">
              <div className="contact_form">
                <h2>Send Us Message</h2>
                <p>Please don’t hesitate to chat with me just drop a line.</p>
                <form
                onSubmit={sendEmail}
                  className="form-horizontal"
                >
                  <div className="form-group row">
                    <div className="col-sm-6">
                    <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                    <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-12">
                    <label htmlFor="message">Write your message...</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        placeholder="Message"
                        required
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <button className="button_1" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* /.contact_form */}
            </div>
          </div>
        </div>
      </section>
      {/* /.Contact Section */}
      <Footer />
    </>
  );
}
