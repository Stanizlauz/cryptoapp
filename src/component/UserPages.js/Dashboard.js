import React, { useEffect, useState } from "react";
import TradingView from "../TradingView";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";
import { urlTransaction, urlProfile } from "../../endpoints";
import { expiredToken, getToken } from "../../Auth/HandleJWT";
import Charts from "../Charts";

export default function Dashboard() {
  const [transaction, setTransaction] = useState();

  useEffect(() => {
    expiredToken();
    loadData();
  }, []);
  const userAuth = getToken();
  useEffect(() => {
    loadUserData();
  });

  const loadData = async () => {
    await axios
      .get(urlTransaction)
      .then((response) => setTransaction(response.data));
  };
  const [profile, setProfile] = useState([]);
  const loadUserData = async () => {
    await axios
      .get(`${urlProfile}/${userAuth?.id}`)
      .then((response) => setProfile(response.data));
  };

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
                <TradingView />
                <div>
                  <h3
                    className=""
                    style={{ color: "#00757F", fontWeight: "bold" }}
                  >
                    Dashboard
                  </h3>
                </div>
                {/* <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div> */}
                {/* <TradingView /> */}
                <div className="row">
                  <div className="col-sm-4 grid-margin">
                    <div className="card">
                      <div className="card-body">
                        <h5>
                          {profile?.firstName} {profile?.lastName}
                        </h5>
                        <div className="row">
                          <div className="col-8 col-sm-12 col-xl-8 my-auto">
                            <div className="d-flex d-sm-block d-md-flex align-items-center">
                              <h2 className="mb-0">{profile?.email}</h2>
                              <p className="text-success ml-2 mb-0 font-weight-medium"></p>
                            </div>
                            <h6 className="text-muted font-weight-normal">
                              {profile?.phoneNo}
                            </h6>
                          </div>
                          <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                            <i className="icon-lg mdi mdi-codepen text-primary ml-auto" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {transaction && transaction?.length > 0 && (
                    <div className="col-sm-4 grid-margin">
                      <div className="card">
                        <div className="card-body">
                          {transaction?.map((wal) => (
                            <h5>
                              {wal.transactionStatus}
                            </h5>
                          ))}
                          <div className="row">
                            <div className="col-8 col-sm-12 col-xl-8 my-auto">
                              <div className="d-flex d-sm-block d-md-flex align-items-center">
                                <h2 className="mb-0"></h2>
                                <p className="text-success ml-2 mb-0 font-weight-medium">
                                  +8.3%
                                </p>
                              </div>
                              <h6 className="text-muted font-weight-normal">
                                {" "}
                                9.61% Since last month
                              </h6>
                            </div>
                            <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                              <i className="icon-lg mdi mdi-wallet-travel text-danger ml-auto" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* <div className="col-sm-4 grid-margin">
                    <div className="card">
                      <div className="card-body">
                        <h5>
                          traded
                        </h5>
                        <div className="row">
                          <div className="col-8 col-sm-12 col-xl-8 my-auto">
                            <div className="d-flex d-sm-block d-md-flex align-items-center">
                              <h2 className="mb-0">
                              </h2>
                              <p className="text-success ml-2 mb-0 font-weight-medium">
                                +8.3%
                              </p>
                            </div>
                            <h6 className="text-muted font-weight-normal">
                              {" "}
                              9.61% Since last month
                            </h6>
                          </div>
                          <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                            <i className="icon-lg mdi mdi-wallet-travel text-danger ml-auto" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {transaction && transaction?.length > 0 && (
                    <div className="col-sm-4 grid-margin">
                      <div className="card">
                        <div className="card-body">
                          <h5>Amound Traded</h5>
                          <div className="row">
                            <div className="col-8 col-sm-12 col-xl-8 my-auto">
                              <div className="d-flex d-sm-block d-md-flex align-items-center">
                                {transaction?.map((wal) => (
                                  <h2 className="mb-0">
                                    {wal.amountDeposited}
                                  </h2>
                                ))}
                              </div>
                              {transaction?.map((wal) => (
                                <h6 className="text-muted font-weight-normal">
                                  current balance: {wal.currentBalance}
                                </h6>
                              ))}
                            </div>
                            <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                              <i className="icon-lg mdi mdi-monitor text-success ml-auto" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <br />
                {/* Content Row */}
                {transaction && transaction?.length > 0 && (
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
                                  <th>S/N</th>
                                  <th>Coin</th>
                                  <th>Amount Traded</th>
                                  {/* <th>Start Date</th> */}
                                  {/* <th>End Date</th> */}
                                  <th>Current Balance</th>
                                  <th>Expected Payout</th>
                                  <th>Trade Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                {transaction &&
                                  transaction.length > 0 &&
                                  transaction?.map((tran, index) => (
                                    <tr key={tran.id}>
                                      <td className="text-dark">{index + 1}</td>
                                      <td className="text-dark">{tran.coin}</td>
                                      <td className="text-dark">
                                        {tran.amountDeposited && (
                                          <>${tran.amountDeposited}</>
                                        )}
                                      </td>
                                      {/* <td className="text-dark">{tran.startDate}</td> */}
                                      {/* <td className="text-dark">{tran.endDate}</td> */}
                                      <td className="text-dark">
                                        {tran.currentBalance && (
                                          <>${tran.currentBalance}</>
                                        )}
                                      </td>
                                      <td className="text-dark">
                                        {tran.expectedPayout && (
                                          <>${tran.expectedPayout}</>
                                        )}
                                      </td>
                                      <td className="text-dark">
                                        {tran.transactionStatus ===
                                        "Pending" ? (
                                          <span className="badge bg-warning text-white p-2 font-weight-bold">
                                            {tran.transactionStatus}
                                          </span>
                                        ) : (
                                          <span className="badge bg-success text-white p-2 font-weight-bold">
                                            {tran.transactionStatus}
                                          </span>
                                        )}
                                      </td>
                                    </tr>
                                  ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <br/>
                <br/>
                <div className="all_chart">
                  <Charts />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
