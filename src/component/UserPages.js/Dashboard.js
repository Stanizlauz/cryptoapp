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
  const [currentBal, setCurrentBal] = useState([]);

  // useEffect(() => {
  //   loadCurrentBal();
  // })
  
  // const loadCurrentBal = async () => {
  //   await axios
  //   .get(urlTransaction)

  //   let total = currentBal;
  //   let tot = total.reduce(function (a, b) {
  //     return a + b.currentBalance
  //   },0)
  // }
  // console.log(tot)

  useEffect(() => {
    expiredToken();
    loadData();
  }, []);
  const userAuth = getToken();
  useEffect(() => {
    loadUserData();
  });

  const loadData = async () => {
    // await axios
    //   .get(urlTransaction)
    //   .then((response) => setTransaction(response.data));
    //   let total = response?.data;
    //   let tot = total.reduce(function (a,b) {
    //     return a + b.currentBalance

    //   })
    //   console.log(tot);
    const responses = await axios
    .get(urlTransaction)
    .then((response) => setTransaction(response.data));
      let total = responses.data;
      let tot = total.reduce(function (a,b) {
        return a + b.currentBalance

      })
      console.log(tot);
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
                    style={{ color: "white", fontWeight: "bold" }}
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
                        <h5 className="text-white font-weight-bold">
                          {profile?.firstName} {profile?.lastName}
                        </h5>
                        <div className="row">
                          <div className="col-8 col-sm-12 col-xl-8 my-auto">
                            <div className="d-flex d-sm-block d-md-flex align-items-center">
                              <h4 className="mb-0 text-info">
                                {profile?.email}
                              </h4>
                              <p className="text-success ml-2 mb-0 font-weight-medium"></p>
                            </div>
                            {/* <h6 className="text-light font-weight-normal">
                              {profile?.phoneNo}
                            </h6> */}
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
                          
                            <h5 className="text-success">
                              Major Coins Traded
                            </h5>
                          
                          <div className="row">
                            <div className="col-8 col-sm-12 col-xl-8 my-auto">
                              <div className="d-flex d-sm-block d-md-flex align-items-center">
                                  <h3 className="mb-0 text-warning">Bitcoin</h3>
                               

                                <h6 className="text-primary ml-2 mb-0 font-weight-medium">
                                  +8.3%
                                </h6>
                              </div>
                              <div className="d-flex d-sm-block d-md-flex align-items-center">
                              <h3 className="mb-0 text-warning">Ethereum</h3>
                              </div>
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
                          <h5 className="text-light font-weight-bold">
                            Amound Traded
                          </h5>
                          <div className="row">
                            <div className="col-8 col-sm-12 col-xl-8 my-auto">
                              {/* <div className="d-flex d-sm-block d-md-flex align-items-center">
                                {transaction?.map((wal) => (
                                  <h2 className="mb-0 text-info font-weight-bold">
                                    ${wal.amountDeposited}
                                  </h2>
                                ))}
                              </div> */}
                              {transaction?.map((wal) => (
                                <h6 className="text-success font-weight-normal">
                                  current balance: ${wal.currentBalance}
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

                <Charts />
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
                              <thead className="text-white">
                                <tr className="text-white">
                                  <th className="text-white">S/N</th>
                                  <th className="text-white">Coin</th>
                                  <th className="text-white">Amount Traded</th>
                                  {/* <th>Start Date</th> */}
                                  {/* <th>End Date</th> */}
                                  <th className="text-white">
                                    Current Balance
                                  </th>
                                  <th className="text-white">
                                    Expected Payout
                                  </th>
                                  <th className="text-white">Trade Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                {transaction &&
                                  transaction.length > 0 &&
                                  transaction?.map((tran, index) => (
                                    <tr key={tran.id}>
                                      <td className="text-white">
                                        {index + 1}
                                      </td>
                                      <td className="text-white">
                                        {tran.coin}
                                      </td>
                                      <td className="text-white">
                                        {tran.amountDeposited && (
                                          <>${tran.amountDeposited}</>
                                        )}
                                      </td>
                                      {/* <td className="text-dark">{tran.startDate}</td> */}
                                      {/* <td className="text-dark">{tran.endDate}</td> */}
                                      <td className="text-white">
                                        {tran.currentBalance && (
                                          <>${tran.currentBalance}</>
                                        )}
                                      </td>
                                      <td className="text-white">
                                        {tran.expectedPayout && (
                                          <>${tran.expectedPayout}</>
                                        )}
                                      </td>
                                      <td className="text-white">
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
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
