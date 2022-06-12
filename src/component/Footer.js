import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div>
        <section className="widget_section padding">
          <div className="container">
            <div className="row widget_wrapper">
              <div className="col-lg-3 col-sm-6 sm-padding">
                <img className="mb-10" src="img/footer-logo.png" alt="Logo" />
                <p>
                  All deposit should be made directly to CapitalTrades trading
                  wallet provided on your dashboard, CapitalTrades wont aknowlegde
                  fund transfer from third party agent or be accountable for
                  loss of deposit made to any account managers or refer.
                </p>
              </div>
              <div className="col-lg-3 col-sm-6 sm-padding">
                <h4>Market Coins</h4>
                <ul className="widget_links">
                  <li>Bitcoin</li>
                  <li>Ethereum</li>
                  <li>Shiba Inu</li>
                  <li>DogeCoin</li>
                  <li>Luna Coin</li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-6 sm-padding">
                <h4>Usefull Link</h4>
                <ul className="widget_links">
                  <li>
                    <Link to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                  <Link to="/register">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                  <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                  <Link to="/faqs">FAQS</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-6 sm-padding">
                <h4>We will love to hear from you.</h4>
                <div className="subscribe_form">
                  <form action="#" className="subscribe_form">
                    <input
                      type="email"
                      name="email"
                      id="subs-email"
                      className="form_input"
                      placeholder="Email Address..."
                    />
                    <button type="submit" className="submit">
                      SUBSCRIBE
                    </button>
                    <div className="clearfix" />
                    <div id="subscribe-result">
                      <p className="subscription-success" />
                      <p className="subscription-error" />
                    </div>
                  </form>
                </div>
                {/* Subscribe Form */}
              </div>
            </div>
          </div>
        </section>
        {/* ./Widget Section */}
      </div>
    </>
  );
}
