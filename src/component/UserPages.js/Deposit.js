import axios from "axios";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useForm } from "react-hook-form";
import { urlTransaction } from "../../endpoints";
import TradingView from "../TradingView";
import DepositCards from "./DepositCards";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Deposit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
  };

  const depositCoin = async (data) => {
    try {
      await axios.post(urlTransaction, data);
    } catch (error) {
      console.log(error);
    }
  };

  const [copied, setCopied] = useState(false);

  const coins = [
    {
      image: <img src="img/bitcoinimg.png" className="img-responsive" alt="" />,
      coin: "Bitcoin",
      address: "btcjhdjdkdiirirkf",
    },
    {
      image: (
        <img src="img/Ethereum-img.png" className="img-responsive" alt="" />
      ),
      coin: "Etherum",
      address: "ethytthgjfkfkvnnhdrdkd",
    },
    {
      image: (
        <img src="img/pngwing.com.png" className="img-responsive" alt="" />
      ),
      coin: "BNB",
      address: "bnbfgddjdkkirhrn4848rnn",
    },
    {
      image: (
        <img src="img/tether-usdt-logo.png" className="img-responsive" alt="" />
      ),
      coin: "USDT",
      address: "usadfjfjfggklkgl998jjgd",
    },
    {
      image: (
        <img
          src="img/litecoin-ltc-logo.png"
          className="img-responsive"
          alt=""
        />
      ),
      coin: "Litecoin",
      address: "xrprkgjjdldkfnvfjffkk595",
    },
    {
      image: (
        <img src="img/xrp-xrp-logo.png" className="img-responsive" alt="" />
      ),
      coin: "XRP",
      address: "ltw333kgjggidpgdggdj",
    },
  ];

  const getPlans = true;
  let data;
  if (getPlans) {
    data = sessionStorage.getItem("myData");
    data = JSON.parse(data);
  }

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid"></div>
            <h1 className="text-dark">Deposit</h1>
            <TradingView />
            <section className="our-webcoderskull padding-lg bg-light">
              <div className="my_alert">
                <div className="alert alert-info mx-2">
                  You have chosen {data?.plan} plan. Please select your desired
                  coin. Note: plan ranges from {data?.message}
                  <i
                    className="font-weight-bolder text-danger float-right mr-2 pointer"
                    id="dismiss_alert_btn"
                  >
                    ×
                  </i>
                </div>
                <div className="container">
                  <ul className="row">
                    {coins &&
                      coins?.map((coin) => (
                        <DepositCards
                          image={coin.image}
                          coin={coin.coin}
                          address={coin.address}
                        />
                      ))}
                  </ul>
                </div>

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
                    <form>
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
                            <div className="form-outline mb-4 text-dark">
                              <label
                                className="form-label text-dark font-weight-bold"
                                htmlFor="amountDeposited"
                              >
                                Enter amount{" "}
                                <span className="text-danger">*</span>
                                {errors.amountDeposited && (
                                  <span className="text-danger font-weight-bold">
                                    {" "}
                                    Minimum $500
                                  </span>
                                )}
                              </label>
                              <input
                                type="number"
                                placeholder="Eg.2500 (Min $500)"
                                id="amountDeposited"
                                className="form-control"
                                onChange={(e) => handleOnChange(e)}
                                {...register("amountDeposited", {
                                  required: true,
                                })}
                              />
                            </div>
                            <hr />
                            <div className="">
                              {coins &&
                                coins?.map((coin) => (
                              <textarea
                                readOnly
                                rows={1}
                                cols={50}
                                style={{ maxWidth: "100%" }}
                                className=" text-dark"
                                address={coin.address}

                                // value="bc1qc8zcqyyxpm0340rslg9xqzlhlt7yw6s0lp9cye"
                              />
                              ))}

                            </div>
                            <div className="mb-1 ml-3">
                              <small
                                className="text-info pointer"
                                id="text_infild"
                              >
                                Copy address to clipboard{" "}
                                <CopyToClipboard
                                  value="bc1qc8zcqyyxpm0340rslg9xqzlhlt7yw6s0lp9cye"
                                  onCopy={() => setCopied(true)}
                                >
                                  <i className="fas fa-copy text-dark ml-2" />
                                </CopyToClipboard>
                                {copied ? (
                                  <span className="text-success ml-2">
                                    Copied.
                                  </span>
                                ) : null}
                              </small>
                            </div>
                            <hr />
                            <div className="mt-3 mb-3 text-dark">
                              In order to confirm payment. A proof of payment
                              have to be uploaded.
                            </div>
                            <div className="form-group">
                              <label className="text-dark" htmlFor="picture">
                                Upload proof of payment
                              </label>
                              <input
                                className="text-dark"
                                id="picture"
                                name="picture"
                                type="file"
                              />
                            </div>
                            {/* <h5
                  value={value}
              
                  className="text-dark"
                >
                  btc5463jwkwiwih
                  <CopyToClipboard
                    text={value}
                    onCopy={() => setCopied( true)}>
                    <i className="fas fa-copy text-dark ml-2" />
                  </CopyToClipboard>
                  {copied ? <span className="text-success ml-2">Copied.</span> : null}
                </h5> */}
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              onClick={handleSubmit(depositCoin)}
                              className="btn btn-primary"
                            >
                              Pay
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
