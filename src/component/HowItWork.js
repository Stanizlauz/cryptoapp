import React from "react";

export default function HowItWork() {
  return (
    <>
      <section className="service_section bg-grey padding">
        <div className="how_it_works">
          <div className="why_us_header">How It Works</div>
          <div className="work_container">
            <div className="firstin">
              <div className="roudx">
                <i className="fal ti-user inside_text" />
              </div>
              <div className="center">
                <div className="twelve2">Step one</div>
                <div className="twelve">Create account</div>
              </div>
            </div>
            <div className="firstin hexane2">
              <div className="roudx">
                <i className="fal fa-analytics inside_text" />
              </div>
              <div className="center">
                <div className="twelve2">Step two</div>
                <div className="twelve">choose a plan</div>
              </div>
            </div>
            <div className="firstin hexane">
              <div className="roudx">
                <i className="fas fa-wallet inside_text" />
              </div>
              <div className="center">
                <div className="twelve2">Step three</div>
                <div className="twelve">Get profit</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
