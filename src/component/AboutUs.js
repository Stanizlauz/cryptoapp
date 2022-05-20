import React from 'react'
import Team from './Team'

export default function AboutUs() {
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
