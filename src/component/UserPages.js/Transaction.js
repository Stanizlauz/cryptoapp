import React, { useEffect, useState } from "react";
import TradingView from "../TradingView";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { urlTransaction } from "../../endpoints";
import axios from "axios";
import Authorize from "../../Auth/Authorize";

export default function Transaction() {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    await axios.get(urlTransaction)
      .then(response => setTransaction(response.data))
  }
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
              <h1 style={{ color: "white" }}> Transaction History</h1>
            </div>
            {/* <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-dark">
                Transaction History
              </h6>
            </div> */}
            <div className="card shadow mb-4 mx-2">

              <div className="card-body bg-white">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr className='text-center'>
                        <th className="text-dark">S/N</th>
                        <th className="text-dark">Coin</th>
                        <Authorize
                          authorize={
                            <>
                              <th className="text-dark">User Email</th>
                              <th className="text-dark">User Name</th>
                            </>
                          }
                          roles="Admin"
                        />
                        <th className="text-dark">Amount Traded</th>
                        <th className="text-dark">Expected Payout</th>
                        <th className="text-dark">Start date</th>
                        <th className="text-dark">End Date</th>
                        <th className="text-dark">Current Balance</th>
                        <th className="text-dark">Trade Status</th>
                        <Authorize
                          authorize={
                            <>
                              <th className="text-dark">Actions</th>
                            </>
                          }
                          roles="Admin"
                        />
                      </tr>
                    </thead>
                    <tbody>
                      {transaction && transaction.length > 0
                        && transaction?.map((tran, index) => (
                          <tr key={tran.id}>
                            <td className="text-dark">{index + 1}</td>
                            <td className="text-dark">{tran.coin}</td>
                            <Authorize
                              authorize={
                                <>
                                  <td className="text-dark">{tran.email}</td>
                                  <td className="text-dark">{tran.userName}</td>
                                </>
                              }
                              roles="Admin"
                            />
                            <td className="text-dark">${tran.amountDeposited}</td>
                            <td className="text-dark">${tran.expectedPayout}</td>
                            <td className="text-dark">{tran.startDate}</td>
                            <td className="text-dark">{tran.endDate}</td>
                            <td className="text-dark">${tran.currentBalance}</td>
                            <td className="text-dark">
                              {tran.transactionStatus === "Pending" ?
                                <span className="badge bg-warning text-white p-2 font-weight-bold">
                                  {tran.transactionStatus}
                                </span>
                                :
                                <span className="badge bg-success text-white p-2 font-weight-bold">
                                  {tran.transactionStatus}
                                </span>
                              }

                            </td>
                            <Authorize
                              authorize={
                                <>
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
                                        <i className="fas fa-times text-danger" />
                                      </button>
                                    </div>
                                  </td>
                                </>
                              }
                              roles="Admin"
                            />
                          </tr>
                        ))}
                      {transaction.length === 0 &&
                        <p className="text-danger">No record found!!</p>}
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
