import React from 'react'

export default function FAQS() {
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
                <span>FAQS</span>
                <br />
                <span>Most Asked Questions</span>
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

{/*Section: FAQ*/}
<section>
  <h3 className="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
  <p className="text-center mb-5">
    Find the answers for the most frequently asked questions below
  </p>
  <div className="row">
    <div className="col-md-6 col-lg-4 mb-4">
      <h6 className="mb-3 text-primary"><i className="far fa-paper-plane text-primary pe-2" /> A simple
        question?</h6>
      <p>
        <strong><u>Absolutely!</u></strong> We work with top payment companies which guarantees
        your
        safety and
        security. All billing information is stored on our payment processing partner.
      </p>
    </div>
    <div className="col-md-6 col-lg-4 mb-4">
      <h6 className="mb-3 text-primary"><i className="fas fa-pen-alt text-primary pe-2" /> A question
        that
        is longer then the previous one?</h6>
      <p>
        <strong><u>Yes, it is possible!</u></strong> You can cancel your subscription anytime in
        your
        account. Once the subscription is
        cancelled, you will not be charged next month.
      </p>
    </div>
    <div className="col-md-6 col-lg-4 mb-4">
      <h6 className="mb-3 text-primary"><i className="fas fa-user text-primary pe-2" /> A simple
        question?
      </h6>
      <p>
        Currently, we only offer monthly subscription. You can upgrade or cancel your monthly
        account at any time with no further obligation.
      </p>
    </div>
    <div className="col-md-6 col-lg-4 mb-4">
      <h6 className="mb-3 text-primary"><i className="fas fa-rocket text-primary pe-2" /> A simple
        question?
      </h6>
      <p>
        Yes. Go to the billing section of your dashboard and update your payment information.
      </p>
    </div>
    <div className="col-md-6 col-lg-4 mb-4">
      <h6 className="mb-3 text-primary"><i className="fas fa-home text-primary pe-2" /> A simple
        question?
      </h6>
      <p><strong><u>Unfortunately no</u>.</strong> We do not issue full or partial refunds for any
        reason.</p>
    </div>
    <div className="col-md-6 col-lg-4 mb-4">
      <h6 className="mb-3 text-primary"><i className="fas fa-book-open text-primary pe-2" /> Another
        question that is longer than usual</h6>
      <p>
        Of course! We’re happy to offer a free plan to anyone who wants to try our service.
      </p>
    </div>
  </div>
</section>
{/*Section: FAQ*/}


   </>
  )
}
