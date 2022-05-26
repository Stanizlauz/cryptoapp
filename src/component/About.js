import React from 'react'
import { Link } from "react-router-dom";


export default function About() {
  return (
    <>
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
          {/* <a href="#" className="button_1">More About Us</a> */}
          <Link to="/about"  className="button_1">More about us</Link>
        </div>
      </div>
      {/* <div className="col-sm-6 xs-padding">
        <div className="why_content">
          <h3>Why Choose Us?</h3>
          <ul>
            <li><i className="fa fa-check" />We offer the most package of service in the industry.</li>
            <li><i className="fa fa-check" />High customer retention rate. Printing and type company.</li>
            <li><i className="fa fa-check" />Our service features are unmatched in the center.</li>
            <li><i className="fa fa-check" />Afordable pricing offers. Printing and typesetting house.</li>
          </ul>
        </div>
      </div> */}
    </div>
  </div>
  <div className="about_image" />
</section>{/* /About Section */}

    </>
  )
}
