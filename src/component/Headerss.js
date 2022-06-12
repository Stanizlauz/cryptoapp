import React from "react";
import { Link } from "react-router-dom";
import { getToken } from "../Auth/HandleJWT";
import TradingView from "./TradingView";

export default function Headerss() {
  const loggedIn = getToken();
  return (
    <>
      <header id="header" className="header_section bd-bottom">
        <div className="top_header">
          <div className="container">
            <div className="top_content_wrap row">
              <div className="col-sm-8">
                <ul className="left_info">
                  <li>
                    <a href="#">
                      <i className="ti-email" />
                      Info@YourDomain.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-mobile" />
                      +(333) 052 39876
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 d-md-block">
                <ul className="right_info">
                  {loggedIn?.length === 0 ?
                    <>
                      <li>
                        <Link to="/login">
                          <i className="ti-user" />
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to="/register">
                          <i className="ti-pencil-alt" />
                          Register
                        </Link>
                      </li>
                    </>
                    :
                    <>
                      <li>
                        <Link to="/">
                          <i className="ti-new-window" />
                          Logout
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard">
                          <i className="ti-bar-chart" />
                          Dashboard
                        </Link>
                      </li>
                    </>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_header">
          <div className="container">
            <div className="bottom_content_wrap row">
              <div className="col-sm-4">

                <img src="img/logo.png" alt="Brand" />

              </div>
              <div className="col-sm-8 mt-4 text-right">
                <ul id="mainmenu" className="nav navbar-nav nav-menu">
                  <li className="active">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/plans">Plans</Link>
                  </li>
                  <li>
                    <Link to="/faqs">FAQS</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header Section */}

      {/* <div className="ticker_wrapper bd-bottom">
  <ul id="webTicker">
    <li><img src="img/c-1.png" alt="icon" /> Bitcoin<span>(BTC)</span> $545.285</li>
    <li><img src="img/c-2.png" alt="icon" /> Ethereum<span>(LTC)</span> $123.912</li>
    <li><img src="img/c-3.png" alt="icon" /> Exchange Union<span>(AMD)</span> $611.278</li>
    <li><img src="img/c-4.png" alt="icon" /> Ripple<span>(DASH)</span> $095.385</li>
    <li><img src="img/c-5.png" alt="icon" /> DigitalCash<span>(XMR)</span> $745.285</li>
    <li><img src="img/c-6.png" alt="icon" /> Monero<span>(ETH)</span> $835.193</li>
    <li><img src="img/c-7.png" alt="icon" /> Litecoin<span>(ADA)</span> $381.067</li>
  </ul>
</div>Ticker */}

      <TradingView />


    </>
  );
}
