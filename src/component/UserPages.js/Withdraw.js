import React from "react";
import TradingView from "../TradingView";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Withdraw() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid"></div>
            <h1 className="text-dark">Withdraw</h1>
            <TradingView />

            <div className="col-lg-8">
              <div>
                <h1 style={{ color: "white" }}>Withdraw</h1>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <form>
                    <div className="form-outline mb-4 text-dark">
                      Enter Amount
                      <input
                        type="number"
                        placeholder="Eg.2500"
                        id="form1Example1"
                        className="form-control"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <select
                        placeholder="coin"
                        typeof="text"
                        className="text-dark form-control"
                      >
                        <option value="bitcoin" className="text-dark">
                          Bitcoin
                        </option>
                        <option value="ethereum" className="text-dark">
                          Ethereum
                        </option>
                        <option value="shiba" className="text-dark">
                          Shiba Inu
                        </option>
                        <option value="doge" className="text-dark">
                          Dogecoin
                        </option>
                      </select>
                      {/* <label className="form-label">Coin</label> */}
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        placeholder="Wallet Address"
                        id="form1Example1"
                        className="form-control"
                      />
                      {/* <label className="form-label">Wallet address</label> */}
                    </div>

                    <button type="submit" className="btn btn-success btn-block">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* <div className="card shadow mb-4">
  <div className="card-header py-3">
    <h6 className="m-0 font-weight-bold text-primary">Basic Card Example</h6>
  </div>
  <div className="card-body">
    Wallet Address
  </div>
  <form>

  <div className="form-outline mb-4">
    <input type="email" id="form1Example1" className="form-control" />
    <label className="form-label" htmlFor="form1Example1">Email address</label>
  </div>

  <div className="form-outline mb-4">
    <input type="password" id="form1Example2" className="form-control" />
    <label className="form-label" htmlFor="form1Example2">Password</label>
  </div>

  <button type="submit" className="btn btn-success btn-block">Submit</button>
</form>

</div>
<select class="select">
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
</select>
<label class="form-label select-label">Example label</label> */}
          </div>
        </div>
      </div>
    </>
  );
}
