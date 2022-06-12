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
                    <a href="/"><i className="ti-email" />capitattrade@info.com </a>
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


      <TradingView />


    </>
  );
}
