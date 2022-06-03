import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function DepositCards({ image, coin }) {

  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false) 

  return (
    <>
      <li className="col-12 col-md-6 col-lg-3">
        <div className="cnt-block equal-hight" style={{ height: 349 }}>
          <figure>{image}</figure>
          <div className="p-4">
            <div className="font-weight-bolder" style={{ color: "black" }}>
              {coin}
            </div>
            <div className="mt-2" style={{ color: "#666666" }}>
              Deposit using {coin}
            </div>
            <div className="mt-4">
              <a
                className="btn btn-primary pointer text-white"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Continue
              </a>
            </div>
          </div>
        </div>
      </li>
      <div>
        {/* Button trigger modal */}
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Deposit
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <h5
                  value={value}
                //   onChange={({ target: { value } }) =>
                //     setValue({ value, setCopied: false })
                //   }
                  className="text-dark"
                >
                  btc5463jwkwiwih
                  <CopyToClipboard
                    text={value}
                    onCopy={() => setCopied( true)}
                  >
                    <i className="fas fa-copy text-dark ml-2" />
                  </CopyToClipboard>
                  {copied ? <span className="text-success ml-2">Copied.</span> : null}

                </h5>
                <div className="form-outline mb-4">
                  <input
                    type="number"
                    placeholder="Amount"
                    id="form1Example1"
                    className="form-control"
                  />
                  {/* <label className="form-label">Wallet address</label> */}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
