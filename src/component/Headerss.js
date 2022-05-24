import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export default function Headerss() {
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
              <div className="col-sm-4 d-none d-md-block">
                <ul className="right_info">
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
                  <li>
                    <Link to="/register">
                      <i className="ti-new-window" />
                      Logout
                    </Link>
                  </li>
                  <li>
                    <Link to="/register">
                      <i className="ti-bar-chart" />
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_header">
          <div className="container">
            <div className="bottom_content_wrap row">
              <div className="col-sm-4">
                <a href="#">
                  <img src="img/logo.png" alt="Brand" />
                </a>
              </div>
              <div className="col-sm-8 text-right">
                <ul id="mainmenu" className="nav navbar-nav nav-menu">
                  <li className="active">
                    {" "}
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/login">Plans</Link>
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

      <div className="mb-1 trading_view_wid">
        {/* TradingView Widget BEGIN */}
        <div
          className="tradingview-widget-container"
          style={{ width: "100%", height: 46 }}
        >
          <iframe
            scrolling="no"
            allowTransparency="true"
            frameBorder={0}
            src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22Nasdaq%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22BTC%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22ETH%2FUSD%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22cryptontrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%7D"
            style={{ boxSizing: "border-box", height: 46, width: "100%" }}
          />
        </div>
        {/* TradingView Widget END */}
      </div>

     
    </>
  );
}
