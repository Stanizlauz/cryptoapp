import React from "react";
import { Link } from "react-router-dom";


export default function Packages() {
  return (
    <>
    
  <div className="container-fluid">
  <div className="container p-5">
 <div className="my_alert">
</div>

    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card card1 h-100">
          <div className="card-body">
            <h5 className="card-title">Basic</h5>
            <br />
            <span className="amt">$500</span>/$999
            <div className="d-grid my-3">
              <Link to="/deposit">
              <button className="btn btn-outline-dark btn-block">Select</button>
              </Link>
            </div>
            <ul>
              <li>24/7 Support</li>
              <li>3 Days/Trade</li>
              <li>7 Days</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card card2 h-100">
          <div className="card-body">
            <h5 className="card-title">Silver</h5>
            <br />
            <span className="amt">$1000</span>$5999
            <br />
            <div className="d-grid my-3">
            <Link to="/deposit">
              <button className="btn btn-outline-dark btn-block">Select</button>
              </Link>
            </div>
            <ul>
            <li>24/7 Support</li>
              <li>7 Days/Trade</li>
              <li>14 Days</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card card3 h-100">
          <div className="card-body">
            <h5 className="card-title">Gold</h5>
            <br />
            <span className="amt">$6000</span>$9999
            <br />
            <div className="d-grid my-3">
            <Link to="/deposit">
              <button className="btn btn-outline-dark btn-block">Select</button>
              </Link>
            </div>
            <ul>
            <li>24/7 Support</li>
              <li>7 Days/Trade</li>
              <li>14 Days</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card card4 h-100">
          <div className="card-body">
            <h5 className="card-title">Diamond</h5>
            <br />
            <span className="amt">$10,000</span>/$49,999
            <br />
            <div className="d-grid my-3">
            <Link to="/deposit">
              <button className="btn btn-outline-dark btn-block">Select</button>
              </Link>
            </div>
            <ul>
            <li>24/7 Support</li>
              <li>14 Days/Trade</li>
              <li>28 Days</li>
            </ul>
          </div>
        </div>
      </div>
    </div>    
  </div>
</div>

      {/* <div className="container">
        <div>
          <h3 className="headline">Pricing Tables</h3>
          <span className="line margin-bottom-45" />
          <div className="clearfix" />
          <br />
          <br />
        </div>
        <div className="row">
          <div className="plan color-1 four columns">
            <div className="plan-price">
              <h3>Basic</h3>
              <span className="plan-currency">$</span>
              <span className="value">500</span>
              <span className="period">/ MAX 999</span>
            </div>
            <div className="plan-features">
              <ul>
                <li>24/7 Support</li>
                <li>3 Days/Trade for 7 Days</li>
            
              </ul>
              <a className="button" href="#">
                Purchase
              </a>
            </div>
          </div>
          <div className="plan color-2 four columns">
            <div className="plan-price">
              <h3>Premium</h3>
              <span className="plan-currency">$</span>
              <span className="value">29,90</span>
              <span className="period">/ per month</span>
            </div>
            <div className="plan-features">
              <ul>
                <li>10GB Disk Space</li>
                <li>15 Email Accounts</li>
                <li>10GB Monthly Bandwidth</li>
                <li>Unlimited Subdomains</li>
                <li>Automatic Cloud Backup</li>
              </ul>
              <a className="button" href="#">
                Sign Up
              </a>
            </div>
          </div>
          <div className="plan color-3 four columns">
            <div className="plan-price">
              <h3>Ultimate</h3>
              <span className="plan-currency">$</span>
              <span className="value">39,90</span>
              <span className="period">/ per month</span>
            </div>
            <div className="plan-features">
              <ul>
                <li>15GB Disk Space</li>
                <li>15 Email Accounts</li>
                <li>15GB Monthly Bandwidth</li>
                <li>Unlimited Subdomains</li>
                <li>Automatic Cloud Backup</li>
              </ul>
              <a className="button" href="#">
                Sign Up
              </a>
            </div>
          </div>
          <div className="plan color-4 four columns">
            <div className="plan-price">
              <h3>Ultra</h3>
              <span className="plan-currency">$</span>
              <span className="value">49,90</span>
              <span className="period">/ per month</span>
            </div>
            <div className="plan-features">
              <ul>
                <li>35GB Disk Space</li>
                <li>25 Email Accounts</li>
                <li>35GB Monthly Bandwidth</li>
                <li>Unlimited Subdomains</li>
                <li>Automatic Cloud Backup</li>
              </ul>
              <a className="button" href="#">
                Sign Up
              </a>
            </div>
          </div>
          <div className="plan color-5 four columns">
            <div className="plan-price">
              <h3>Ultra</h3>
              <span className="plan-currency">$</span>
              <span className="value">49,90</span>
              <span className="period">/ per month</span>
            </div>
            <div className="plan-features">
              <ul>
                <li>35GB Disk Space</li>
                <li>25 Email Accounts</li>
                <li>35GB Monthly Bandwidth</li>
                <li>Unlimited Subdomains</li>
                <li>Automatic Cloud Backup</li>
              </ul>
              <a className="button" href="#">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
