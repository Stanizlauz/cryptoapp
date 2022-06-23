import React from "react";
import { Link } from "react-router-dom";


export default function Pricing() {
  return (
    <>
      <section className="plans">
        <div>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <div className="tomb">
            <h2 className="invest_return ">INVESTMENT RETURN</h2>
            <p className="choose-plan">Choose a plan that works for you</p>
          </div>
          <br /><br /><br />
          <div className="section_our_solution">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="our_solution_category">
                  <div className="solution_cards_box">
                    <div className="solution_card">
                      <div className="hover_color_bubble" />
                   
                      <div className="solu_title">
                        <Link to="/plan" className="type-of-plan">
                          Basic
                        </Link>
                        <h3>
                          $500
                          <small className="max">/Max $999</small>
                        </h3>
                      </div>
                      <div className="solu_description">
                        <p>24/7 Support</p>
                        <br />
                        <p>3 Days/Trade For</p>
                        <div className="number_of_days">7 Days</div>
                        <button type="button" className="read_more_btn">
                          Choose Plan
                        </button>
                      </div>
                    </div>
                    <div className="solution_card">
                      <div className="hover_color_bubble" />
                   
                      <div className="solu_title">
                        <Link to="/plan" className="type-of-plan">
                          Silver
                        </Link>
                        <h3>
                          $1,000
                          <small className="max">/Max $5999</small>
                        </h3>
                      </div>
                      <div className="solu_description">
                        <p>24/7 Support</p>
                        <br />
                        <p>14 Days/Trade For</p>
                        <div className="number_of_days">7 Days</div>
                        <button type="button" className="read_more_btn">
                          Choose Plan
                        </button>
                      </div>
                    </div>
                    <div className="solution_card">
                      <div className="hover_color_bubble" />
                   
                      <div className="solu_title">
                        <Link to="/plan" className="type-of-plan">
                          Gold
                        </Link>
                        <h3>
                          $6,000
                          <small className="max">/Max $39,999</small>
                        </h3>
                      </div>
                      <div className="solu_description">
                        <p>24/7 Support</p>
                        <br />
                        <p>14 Days/Trade For</p>
                        <div className="number_of_days">7Days</div>
                        <button type="button" className="read_more_btn">
                          Choose Plan
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="solution_cards_box sol_card_top_3">
                    <div className="solution_card">
                      <div className="hover_color_bubble" />
                   
                      <div className="solu_title">
                        <Link to="/plan" className="type-of-plan">
                          Diamond
                        </Link>
                        <h3>
                          $10,000
                          <small className="max">/Max $49,999</small>
                        </h3>
                      </div>
                      <div className="solu_description">
                        <p>24/7 Support</p>
                        <br />
                        <p>14 Days/Trade For</p>
                        <div className="number_of_days">14 Days</div>
                        <button type="button" className="read_more_btn">
                          Choose Plan
                        </button>
                      </div>
                    </div>
                    <div className="solution_card">
                      <div className="hover_color_bubble" />
                   
                      <div className="solu_title">
                        <Link to="/plan" className="type-of-plan">
                          Platinum
                        </Link>
                        <h3>
                          $50,000
                          <small className="max">/Max $99,999</small>
                        </h3>
                      </div>
                      <div className="solu_description">
                        <p>24/7 Support</p>
                        <br />
                        <p>14 Days/Trade For</p>
                        <div className="number_of_days">14 Days</div>
                        <button type="button" className="read_more_btn">
                          Choose Plan
                        </button>
                      </div>
                    </div>
                    <div className="solution_card">
                      <div className="hover_color_bubble" />
                   
                      <div className="solu_title">
                        <Link to="/plan" className="type-of-plan">
                          Premium
                        </Link>
                        <h3>
                          $100,000
                          <small className="max">/Max $999,999</small>
                        </h3>
                      </div>
                      <div className="solu_description">
                        <p>24/7 Support</p>
                        <br />
                        <p>20 Days/Trade For</p>
                        <div className="number_of_days">28 Days</div>
                        <button type="button" className="read_more_btn">
                          Choose Plan
                        </button>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
