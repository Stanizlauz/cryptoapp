import React from "react";
import { Link } from "react-router-dom";
import { getToken, logOut } from "../Auth/HandleJWT";
import TradingView from "./TradingView";

export default function Headerss() {
  const loggedIn = getToken();

  const myFunc = () => {
    let tog = document.getElementById("accordionSidebar");
    if (!tog?.classList.contains("toggled")) {
      tog?.classList.add("toggled");
    } else {
      tog?.classList.remove("toggled");
    }
  };
  return (
    <>
      <header>
        x
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
          id="accordionSidebar"
        >
          {/* <a className="navbar-brand" href="#"> */}
            {/* Navbar */}
            <img src="img/logo.png" alt="Brand" style={{ width: "120px" }} />
          {/* </a> */}
          <button
            className="navbar-toggler"
            onClick={myFunc}
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            // aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
              <Link to="/" className="nav-link" style={{fontWeight: 'bolder'}}>
              Home
                </Link>
              </li>
              {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li> */}
              <li>
                <Link to="/about" className="nav-link" style={{fontWeight: 'bolder'}}> 
                  About
                </Link>
              </li>
              <li>
                <Link to="/plans" className="nav-link" style={{fontWeight: 'bolder'}}>
                  Plans
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="nav-link" style={{fontWeight: 'bolder'}}>
                  FAQS
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link" style={{fontWeight: 'bolder'}}>
                  Contact Us
                </Link>
              </li>
              {loggedIn?.length === 0 ? (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="btn btn-outline-light btn-xs btn-icon-text mx-2 my-1">
                      {/* <i className="ti-user" /> */}
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" type="button" className="btn btn-outline-light btn-xs btn-icon-text my-1">
                      {/* <i className="ti-pencil-alt" /> */}
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a href="/" onClick={() => logOut()} className="btn btn-outline-light btn-xs btn-icon-text mx-2 my-1">
                      {/* <i className="ti-new-window" /> */}
                      Logout
                    </a>
                  </li>
                  <li>
                    <Link to="/dashboard" className="btn btn-outline-light btn-xs btn-icon-text my-1">
                      {/* <i className="ti-bar-chart" /> */}
                      Dashboard
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
  
      <TradingView />

      {/* <header id="header" className="header_section bd-bottom">
        <div className="top_header">
          <div className="container">
            <div className="top_content_wrap row">
              <div className="col-sm-8">
                <ul className="left_info">
                  <li>
                    <a href="/"><i className="ti-email" />service.capitaltrades@hotmail.com </a>
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
              <div className="col-sm-4 mt-4">

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
      </header> */}
      {/* Header Section */}

      <TradingView />
    </>
  );
}
