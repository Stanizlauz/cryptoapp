import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { urlTransaction } from '../../endpoints';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export default function ViewTransaction() {
  const [transactions, setTransactions] = useState();
  const { id } = useParams();
  const history = useNavigate();
  useEffect(() => {
    loadData();
  }, [])
  const loadData = async () => {
    const res = await axios.get(`${urlTransaction}/${id}`)
    setTransactions(res?.data)
    console.log({ res })
  }

  const approve = async () => {
    try {
      await axios.patch(`${urlTransaction}/approve/${id}`);
      history("/transactions");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid">
              <section className="col" style={{ backgroundColor: "#eee" }}>
                <div className="row d-flex justify-content-between">
                  <div className="row d-flex float-left ml-4">
                    <h4 className="m-0 font-weight-bold text-dark">View Transactions</h4>
                  </div>
                  <div className="row d-flex float-right mx-4 my-2">
                    <Link
                      type="button"
                      to="/transactions"
                      className="btn btn-dark btn-lg mr-2"
                    >
                      Back
                    </Link>
                    {transactions?.transactionStatus === "Pending" &&
                      <button
                        type="button"
                        id="submit"
                        className="btn btn-success btn-lg"
                        onClick={() => approve()}
                      >
                        Approve
                      </button>
                    }
                  </div>
                </div>
                <div className="col container py-5">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card mb-4">
                        <div className="card-body text-center">
                          <img
                            src={transactions?.picture}
                            alt="avatar"
                            className="rounded-circle img-fluid"
                            style={{ width: 150 }}
                          />
                          <h5 className="my-3">{ } { }</h5><span className="text-dark font-weight-bold">
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="card mb-4">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="text-dark mb-0">Coin:</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">
                                {transactions?.coin}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="text-dark mb-0">Email:</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">
                                {transactions?.userEmail}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="text-dark mb-0">Amount Traded:</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">
                                ${transactions?.amountDeposited}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="text-dark mb-0">Current Balance:</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">
                                ${transactions?.currentBalance}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="text-dark mb-0">Expected Payout:</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">
                                ${transactions?.expectedPayout}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="text-dark mb-0">Trade Status:</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">
                                {transactions?.transactionStatus === "Pending" ?
                                  <span className="badge bg-warning text-white p-2 font-weight-bold">
                                    {transactions?.transactionStatus}
                                  </span>
                                  :
                                  <span className="badge bg-success text-white p-2 font-weight-bold">
                                    {transactions?.transactionStatus}
                                  </span>
                                }
                              </p>
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}