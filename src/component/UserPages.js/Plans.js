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
            <div className="container-fluid">
              <TradingView />
              <div>
                <h3 className="" style={{ color: '#00757F', fontWeight: 'bold' }}>Plans</h3>
              </div>
              <Packages />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
