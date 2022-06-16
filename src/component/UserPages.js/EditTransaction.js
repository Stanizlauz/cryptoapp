import React from 'react'
import TradingView from '../TradingView'
import Header from './Header'
import Sidebar from './Sidebar'

export default function () {
  return (
    <>
 <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid"></div>
            <TradingView />
             <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase text-dark">Edit Transaction</h3>
                    <form className="row">
                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="coin"
                        >
                          Coin <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="coin"
                          name="coin"
                          readOnly
                        />
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="amountTraded"
                        >
                          Amount Traded <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="amountTraded"
                          name="amountTraded"
                          readOnly
                        />
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="expectedPayout"
                        >
                          Expected payout <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="expectedPayout"
                          name="expectedPayout"
                          readOnly
                        />
                      </div>

                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="startDate"
                        >
                         Start Date <span className="text-danger">*</span>
                        
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="startDate"
                          name="startDate"
                          readOnly
                        />
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="endDate"
                        >
                          End Date <span className="text-danger">*</span>
                       
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="endDate"
                          name="endDate"
                          readOnly
                        />
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="currentBalance"
                        >
                         Current Balance <span className="text-danger">*</span>
                         
                        </label>
                        <input
                          type="number"
                          className="form-control form-control-lg"
                          id="currentBalance"
                          name="currentBalance"
                        
                        />
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="tradeStatus"
                        >
                          Trade Status <span className="text-danger">*</span>
                         
                        </label>
                        <select
                          className="form-control form-control-lg text-dark"
                          id="tradeStatus"
                          name="tradeStatus"
                         
                        >
                          <option></option>
                         
                        </select>
                      </div>
                     
                    </form>
                    <div className="d-flex float-right pt-3">
                      <a
                        type="button"
                        to="/"
                        className="btn btn-dark btn-lg mr-2"
                      >
                        Back
                      </a>
                      <button
                        type="button"
                        id="submit"
                        className="btn btn-success btn-lg"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
    </>
  )
}
