import React from 'react'
import { Link } from "react-router-dom";


export default function About() {
  return (
    <>
   <section className="about_section bd-bottom padding">
  <div className="container">
    <div className="section_heading align-center mb-40">
      {/* <h4>Number One</h4> */}
      <h2>Making money and making you rich.</h2>
      <p>Our goal is to provide our investors with a reliable source of high income, while minimizing any possible risks and offering high-quality service</p>
    </div>{/* /Section Heading */}
    <div className="row about_box">
      <div className="col-sm-6 xs-padding">
        <div className="about_info">
          <h3>Recognizing your need is our primary motive.</h3>
          <p>Our aim is to minimize risk and make profit from the crypto currency market while putting smiles on our customers faces.</p>
          {/* <a href="#" className="button_1">More About Us</a> */}
          <Link to="/about"  className="button_1">More about us</Link>
        </div>
      </div>
    </div>
  </div>
  <div className="about_image" />
</section>{/* /About Section */}

    </>
  )
}
