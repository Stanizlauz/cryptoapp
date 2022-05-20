import React from 'react'

export default function Footer() {
  return (
    <>
<div>
  <section className="widget_section padding">
    <div className="container">
      <div className="row widget_wrapper">
        <div className="col-lg-3 col-sm-6 sm-padding">
          <img className="mb-10" src="img/footer-logo.png" alt="Logo" />
          <p>Lorem Ipsum is simply dummy the printing and typesetting industry. It has survived not only five centuries.</p>
          <ul className="footer_social">
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-instagram" /></a></li>
            <li><a href="#"><i className="fa fa-pinterest" /></a></li>
            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-sm-6 sm-padding">
          <h3>Company</h3>
          <ul className="widget_links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Quick Orders</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-sm-6 sm-padding">
          <h3>Usefull Link</h3>
          <ul className="widget_links">
            <li><a href="#">Help &amp; Support Center</a></li>
            <li><a href="#">Returens &amp; Refunds</a></li>
            <li><a href="#">Online Store</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-sm-6 sm-padding">
          <h3>Subscribe Newslatters</h3>
          <p>Lorem Ipsum is simply dummy the printing and industry.</p>
          <div className="subscribe_form">
            <form action="#" className="subscribe_form">
              <input type="email" name="email" id="subs-email" className="form_input" placeholder="Email Address..." />
              <button type="submit" className="submit">SUBSCRIBE</button>
              <div className="clearfix" />
              <div id="subscribe-result">
                <p className="subscription-success" />
                <p className="subscription-error" />
              </div>
            </form>
          </div>{/* Subscribe Form */}
        </div>
      </div>
    </div>
  </section>{/* ./Widget Section */}
</div>

    </>
  )
}
