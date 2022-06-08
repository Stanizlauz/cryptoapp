import React, { useState } from 'react'
import TradingView from '../TradingView'
import DepositCards from './DepositCards'
import Sidebar from "./Sidebar";
import Header from "./Header";
import { urlTransaction } from "../../endpoints";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { CopyToClipboard } from "react-copy-to-clipboard";
import Packages from "../Packages";
import { address, addresses } from '../../enum';

export default function Deposit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    trigger,
    control,
    setValue,
    getValues,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

  };

  const depositCoin = async (data) => {
    try {

      await axios.post(urlTransaction, data)

    } catch (error) {
      console.log(error)
    }
  }

  const [copied, setCopied] = useState(false);


  const coins = [
    { image: <img src="img/bitcoinimg.png" className="img-responsive" alt />, coin: "Bitcoin", address: "btcjhdjdkdiirirkf" },
    { image: <img src="img/Ethereum-img.png" className="img-responsive" alt />, coin: "Etherum", address: "ethytthgjfkfkvnnhdrdkd" },
    { image: <img src="img/pngwing.com.png" className="img-responsive" alt />, coin: "BNB", address: "bnbfgddjdkkirhrn4848rnn" },
    { image: <img src="img/tether-usdt-logo.png" className="img-responsive" alt />, coin: "USDT", address: "usadfjfjfggklkgl998jjgd" },
    { image: <img src="img/litecoin-ltc-logo.png" className="img-responsive" alt />, coin: "Litecoin", address: "xrprkgjjdldkfnvfjffkk595" },
    { image: <img src="img/xrp-xrp-logo.png" className="img-responsive" alt />, coin: "XRP", address: "ltw333kgjggidpgdggdj" }
  ]

  const address = [{
    bitcoin: "btcjhdjdkdiirirkf",
    ethereum: "ethytthgjfkfkvnnhdrdkd",
    bnb: "bnbfgddjdkkirhrn4848rnn",
    usdt: "usadfjfjfggklkgl998jjgd",
    xrp: "xrprkgjjdldkfnvfjffkk595",
    litecoin: "ltw333kgjggidpgdggdj"
}]
console.log(address);
  // const plan = [
  //   {planName: "Silver"},
  //   {planName: "Gold"}
  // ]

  return (
    <>
     <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Header />
              <div className="container-fluid"></div>
      <h1 className='text-dark'>Deposit</h1>
      <TradingView />
      <section className="our-webcoderskull padding-lg bg-light">
<div className="alert alert-info alert-dismissible fade show" role="alert">
  You have chosen plan Please select your desired coin. Note: plan ranges from $500 - $999.
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
  </button>
</div>


        <div className="container">
          <ul className="row">
            {coins && coins?.map(coin => <DepositCards image={coin.image} coin={coin.coin} address={coin.address} />
            )}
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
                  <label className="form-label text-dark font-weight-bold" htmlFor="amountDeposited">Enter amount <span className='text-danger'>*</span>
                          {errors.amountDeposited &&
                            <span className="text-danger font-weight-bold"> Minimum $500</span>
                          }</label>
                    <input
                      type="number"
                      placeholder="Eg.2500 (Min $500)"
                      id="amountDeposited"
                      className="form-control"
                      onChange={(e) => handleOnChange(e)}
                      {...register("amountDeposited", { required: true })}
                    />
                  </div>
                  <hr />
                  <div className="">
                    <textarea readOnly
                      rows={1}
                      cols={50}
                      style={{ maxWidth: "100%" }}
                      className=" text-dark"
                      value={address}
                    />
                  </div>
                  <div className="mb-1 ml-3">
                    <small className="text-info pointer" id="text_infild">
                      Copy address to clipboard{" "}
                      <CopyToClipboard
                        value='jhjh'
                        onCopy={() => setCopied(true)}
                      >
                        <i className="fas fa-copy text-dark ml-2" />
                      </CopyToClipboard>
                      {copied ? (
                        <span className="text-success ml-2">Copied.</span>
                      ) : null}
                    </small>
                  </div>
                  <hr />
                  <div className="mt-3 mb-3 text-dark">
                    In order to confirm payment. A proof of payment have to be
                    uploaded.
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
                  <button type="button" onClick={handleSubmit(depositCoin)} className="btn btn-primary">
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      </section>
      </div>
      </div>
      </div>
    </>
  )
}
