import React from "react";
import TradingView from "../TradingView";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Transaction() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid"></div>
            <TradingView />
            <div className="card shadow mb-4 mx-2">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-dark">
                  Transaction History
                </h6>
              </div>
              <div className="card-body bg-white">
                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead>
                      <tr>
                        <th className="text-dark">S/N</th>
                        <th className="text-dark">Transaction ID</th>
                        <th className="text-dark">Coin</th>
                        <th className="text-dark">User Email</th>
                        <th className="text-dark">Username</th>
                        <th className="text-dark">Amount Traded</th>
                        <th className="text-dark">Expected Payout</th>
                        <th className="text-dark">Start date</th>
                        <th className="text-dark">End Date</th>
                        <th className="text-dark">Trade Status</th>
                        <th className="text-dark">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-dark">1</td>
                        <td className="text-dark">TXCC34</td>
                        <td className="text-dark">BTC</td>
                        <td className="text-dark">test@example.com</td>
                        <td className="text-dark">Mini Plan</td>
                        <td className="text-dark">$2013</td>
                        <td className="text-dark">$320,800</td>
                        <td className="text-dark">10/2/2022</td>
                        <td className="text-dark">12/3/2022</td>
                        <td className="text-dark">
                          <span className="badge bg-warning text-white p-2 font-weight-bold">
                            Pending
                          </span>
                        </td>
                        <td className="text-dark">
                          <div className="d-flex justify-content-between">
                            <button
                              type="button"
                              className="btn btn-link btn-sm px-3 text-dark"
                              data-ripple-color="dark"
                            >
                              <i className="fas fa-bars text-dark" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-link btn-sm px-3 "
                              data-ripple-color="dark"
                            >
                              <i className="fas fa-times text-dark" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-dark">1</td>
                        <td className="text-dark">TXCC34</td>
                        <td className="text-dark">BTC</td>
                        <td className="text-dark">test@example.com</td>
                        <td className="text-dark">Mini Plan</td>
                        <td className="text-dark">$2013</td>
                        <td className="text-dark">$320,800</td>
                        <td className="text-dark">10/2/2022</td>
                        <td className="text-dark">12/3/2022</td>
                        <td className="text-dark">
                          <span className="badge bg-warning text-white p-2 font-weight-bold">
                            Pending
                          </span>
                        </td>
                        <td className="text-dark">
                          <div className="d-flex justify-content-between">
                            <button
                              type="button"
                              className="btn btn-link btn-sm px-3"
                              data-ripple-color="dark"
                            >
                              <i className="fas fa-bars text-dark" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-link btn-sm px-3"
                              data-ripple-color="dark"
                            >
                              <i className="fas fa-times text-dark" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-dark">1</td>
                        <td className="text-dark">TXCC34</td>
                        <td className="text-dark">BTC</td>
                        <td className="text-dark">test@example.com</td>
                        <td className="text-dark">Mini Plan</td>
                        <td className="text-dark">$2013</td>
                        <td className="text-dark">$320,800</td>
                        <td className="text-dark">10/2/2022</td>
                        <td className="text-dark">12/3/2022</td>
                        <td className="text-dark">
                          <span className="badge bg-warning text-white p-2 font-weight-bold">
                            Pending
                          </span>
                        </td>
                        <td className="text-dark">
                          <div className="d-flex justify-content-between">
                            <button
                              type="button"
                              className="btn btn-link btn-sm px-3"
                              data-ripple-color="dark"
                            >
                              <i className="fas fa-bars text-dark" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-link btn-sm px-3"
                              data-ripple-color="dark"
                            >
                              <i className="fas fa-times text-dark" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
