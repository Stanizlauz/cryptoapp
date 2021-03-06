import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>
 <div className="py-5 bg-light service-27">
  <div className="container">
    <div className="row justify-content-md-center">
      {/* column */}
      <div className="col-lg-6 align-self-center">
        <span className="badge badge-info font-weight-heavy" style={{fontSize: '20px'}}>Why Choose Us?</span>
        <h4 className="my-3 text-dark service-text">Our goal is to provide our investors with a reliable source of high income, while minimizing any possible risks and offering high-quality service.</h4>
        <Link
                    to="/about"
                    className="btn btn-outline-light btn-xs btn-icon-text"
                  >
                    Read More.
                  </Link>
        {/* <p className="mt-3">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time and with great quality.</p> */}
        <div className="row justify-content-md-center">
          <div className="col-md-5 mt-4 mx-2 service-box">
            <span className="text-info-gradiant display-5">
            <i className="ti ti-server" aria-hidden="true" />
            </span>
            <h6 className="font-weight-medium my-3">Our Service</h6>
            <p>The team of the company's financial specialist with strong command in crypto minning allows for effective analysis and financial situation. All plans comes with an instant trading feature.</p>
          </div>
          <div className="col-md-5 mt-4 service-box">
            <span className="text-info-gradiant display-5">
            <i className="ti ti-stats-up" aria-hidden="true" />
            </span>
            <h6 className="font-weight-medium my-3">Guaranteed Profit</h6>
            <p>Our Trading program is insured with up to $89million. This covers for 80% of your trading risk. Access your earnings and request withdrawals without a hitch.</p>
          </div>
          <div className="col-md-5 mt-4 mx-2 service-box">
            <span className="text-info-gradiant display-5">
            <i className="ti ti-settings" aria-hidden="true" />
            </span>
            <h6 className="font-weight-medium my-3">SSL Security</h6>
            <p>As a platform you can trust, we're built with a 256 bit encryption level to add an additional layer of security. Protected by Deflect & Machine Learning, DDoS protection and web security.</p>
          </div>
          <div className="col-md-5 mt-4 service-box">
          <span className="text-info-gradiant display-5">
            <i className="ti ti-shield" aria-hidden="true" />
            </span>
            <h6 className="font-weight-medium my-3">2FA</h6>
            <p>Protect your assets with google two factor authenticator. Trade stocks and mine crypto currencies with ease knowning your account is super protected.</p>
          </div>
        </div>
      </div>
      {/* column */}
      {/* <div className="col-lg-6 text-center">
        <img src="img/servicestrade.avif" className="img-fluid" alt="wrapkit" />
      </div> */}
    </div>
  </div>
</div>




    </>
  )
}
