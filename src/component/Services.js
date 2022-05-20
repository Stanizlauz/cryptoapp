import React from 'react'

export default function Services() {
  return (
    <>
   <section className="service_section bg-grey padding">
  <div className="container">
    <div className="section_heading align-center mb-40">
      <h2>Our   <span> Services</span></h2>
      <p>Why Choose Us</p>
    </div>{/* /Section Heading */}
    <div className="row service_lists">
      <div className="col-md-4 col-sm-6">
        <div className="service_content">
          <img src="img/icon-1.png" alt="services" />
          <h3>Transaction</h3>
          <p>Our Trading program is insured with up to $89million. This covers for 80% of your trading risk. Access your earnings and request withdrawals without a hitch.</p>
        </div>
      </div>
   
      <div className="col-md-4 col-sm-6">
        <div className="service_content">
          <img src="img/icon-4.png" alt="services" />
          <h3>Safe and Secure</h3>
          <p>Lorem Ipsum is simply dummy text of the printing cryptocoin and typesetting industry.</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="service_content">
          <img src="img/icon-5.png" alt="services" />
          <h3>Investment Planning</h3>
          <p>Lorem Ipsum is simply dummy text of the printing cryptocoin and typesetting industry.</p>
          <a href="#">Read More</a>
        </div>
      </div>
     
    </div>
  </div>
</section>{/* /.Service Section */}

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
