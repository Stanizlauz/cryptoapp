import React from "react";
import TradingView from "../TradingView";
import Sidebar from "./Sidebar";
import Header from "./Header";
import BinanceView from "../BinanceView";
export default function Dashboard() {
  return (
    <>
      <div>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Header />
              <div className="container-fluid">
                {/* Begin Page Content */}
                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>
                <TradingView />
                <BinanceView />
                {/* Content Row */}
                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-category">Transaction Status</h5>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table">
                            <thead className="text-dark">
                              <tr className="text-dark">
                                <th>Coin</th>
                                <th>Amount Traded</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Expected Payout</th>
                                <th>Trade Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-dark">BTC</td>
                                <td className="text-dark">$1000</td>
                                <td className="text-dark">January 1st</td>
                                <td className="text-dark">December 25th</td>
                                <td className="text-dark">$5000</td>
                                <td className="text-dark">Active</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
