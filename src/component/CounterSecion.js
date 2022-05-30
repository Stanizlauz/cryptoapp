import React from "react";

export default function CounterSecion() {
  return (
    <>
      <div id="counter" className="counter_section">
        <div className="container">
          <ul className="row counters">
            <li className="col-md-3 col-sm-6 sm-padding">
              <div className="counter_content">
                <i className="ti-reload" />
                <h3 className="counter">85389</h3>
                <h4>Projects</h4>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 sm-padding">
              <div className="counter_content">
                <i className="ti-time" />
                <h3 className="counter">10293</h3>
                <h4>Happy Clients</h4>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 sm-padding">
              <div className="counter_content">
                <i className="ti-stats-up" />
                <h3 className="counter">365</h3>
                <h4>Working Days</h4>
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
      </div>
      {/* Counter Section */}
    </>
  );
}
