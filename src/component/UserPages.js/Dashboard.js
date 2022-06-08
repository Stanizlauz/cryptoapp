import React, { useEffect, useState } from "react";
import TradingView from "../TradingView";
import Sidebar from "./Sidebar";
import Header from "./Header";
import BinanceView from "../BinanceView";
import axios from "axios";
import { urlTransaction } from "../../endpoints";
export default function Dashboard() {
  const [transaction, setTransaction] = useState();

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    const res = await axios.get(urlTransaction)
      .then(response => setTransaction(response.data))
      console.log({res})
  }

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
                {transaction &&
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
                                  <th>Start Date</th>
                                  <th>End Date</th>
                                  <th>Current Balance</th>
                                  <th>Expected Payout</th>
                                  <th>Trade Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                {transaction && transaction.length > 0
                                  && transaction?.map((tran, index) =>(
                                    <tr key={tran.id}>
                                      <td className="text-dark">{index + 1}</td>
                                      <td className="text-dark">{tran.coin}</td>
                                      <td className="text-dark">${tran.amountDeposited}</td>
                                      <td className="text-dark">{tran.startDate}</td>
                                      <td className="text-dark">{tran.endDate}</td>
                                      <td className="text-dark">${tran.currentBalance}</td>
                                      <td className="text-dark">${tran.expectedPayout}</td>
                                      <td className="text-dark">{tran.transactionStatus}</td>
                                    </tr>
                                  ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
