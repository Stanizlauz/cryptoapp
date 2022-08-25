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
      <header className="fixed-top">
        x
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
          // id="accordionSidebar"
          // style={{width: "100%", backgroundColor: "white"}}
        >
          {/* <a className="navbar-brand" href="#"> */}
          {/* Navbar */}
          <img src="img/logo1.png" alt="Brand" style={{ width: "100px", padding: "15px"}} className="py-0" />
          {/* </a> */}
         
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={myFunc}

            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse bg-light" id="navbarText">
            <ul className="navbar-nav mr-auto text-center">
              <li className="nav-item">
                <Link to="/" className="nav-link text-dark" style={{ fontWeight: 'bold' }}>
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li> */}
              <li>
                <Link to="/about" className="nav-link text-dark" style={{ fontWeight: 'bold' }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/plans" className="nav-link text-dark" style={{ fontWeight: 'bold' }}>
                  Plans
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="nav-link text-dark" style={{ fontWeight: 'bold' }}>
                  FAQS
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link text-dark" style={{ fontWeight: 'bold' }}>
                  Contact Us
                </Link>
              </li>
              {loggedIn?.length === 0 ? (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="btn btn-outline-dark btn-xs btn-icon-text mx-2 my-1 text-dark">
                      {/* <i className="ti-user" /> */}
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" type="button" className="btn btn-outline-dark btn-xs btn-icon-text my-1 text-dark">
                      {/* <i className="ti-pencil-alt" /> */}
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a href="/" onClick={() => logOut()} className="btn btn-outline-dark btn-xs btn-icon-text mx-2 my-1 text-dark">
                      {/* <i className="ti-new-window" /> */}
                      Logout
                    </a>
                  </li>
                  <li>
                    <Link to="/dashboard" className="btn btn-outline-dark btn-xs btn-icon-text my-1 text-dark">
                      {/* <i className="ti-bar-chart" /> */}
                      Dashboard
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <span className="navbar-text text-dark" style={{ fontWeight: 'bold' }}>
              'Bitcoin is a technological tour de force'
            </span>
          </div>
        </nav>
      <TradingView />
      

        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <img src="img/logo1.png" alt="Brand" style={{ width: "100px", padding: "15px"}} className="py-0" />

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse bg-dark" id="navbarText">
            <ul className="navbar-nav mr-auto text-center">
              <li className="nav-item active">
              <Link to="/" className="nav-link font-weight-bold text-white" style={{ fontWeight: 'bold' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold text-white" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold text-white" href="#examination">
                  Examination
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold text-white" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold text-white" href="#contacts">
                  Let's Talk
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              'Bitcoin is a technological tour de force'
            </span>
          </div>
        </nav> */}
      </header>
  
      {/* <TradingView /> */}

      {/* <TradingView /> */}
      {/* <div className="fixed-top">
    <TradingView />
    </div> */}
      {/* <TradingView /> */}
    </>
  );
}
