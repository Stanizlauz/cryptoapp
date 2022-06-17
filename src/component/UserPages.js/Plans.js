import React from "react";
import Packages from "../Packages";
import TradingView from "../TradingView";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Plans() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid"></div>
            <TradingView />
            <div>
              <h1 className="text-light">Plans</h1>
            </div>
            <Packages />
          </div>
        </div>
      </div>
    </>
  );
}
