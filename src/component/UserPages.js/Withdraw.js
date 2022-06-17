import React, { useEffect, useState } from "react";
import TradingView from "../TradingView";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useForm } from "react-hook-form";
import axios from "axios";
import { urlCoins, urlWallet } from "../../endpoints";
import Swal from "sweetalert2";

export default function Withdraw() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
    // watch,
    // trigger,
    // control,
    setValue,
    // getValues,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    // formState: { errors: errors2 },
    // setValue: setValue2,
    // getValues: getValues2,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const [listedCoins, setListedCoins] = useState();
  const [wallet, setWallet] = useState([]);
  useEffect(() => {
    loadWallet();
    loadCoins();
  }, [wallet])
  const loadWallet = async () => {
    await axios.get(urlWallet)
      .then(response => setWallet(response.data))
  }
  const loadCoins = async () => {
    await axios.get(urlCoins)
      .then(response => setListedCoins(response.data))
  }
  const handleOnChange = (e) => {
    // const { name, value } = e.target;

  };

  function selectedCoin(e) {
    console.log(e.target.value)
    const addre = wallet.find(x => x.id === Number(e.target.value));

    console.log(addre)
    setValue("withdrawWalletAddress", addre?.walletAddress)
  }
  const saveWithdrawal = (data) => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4B49AC',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then(async (result) => {
        if (result.isConfirmed) {

        }
      })
    }
    catch (error) {
      console.log(error)
    }
  }
  const saveWallet = async (data) => {
    try {
      let exist = wallet.find(x => x.coin === data.coin);
      if (!exist) {
        console.log({ data })
        await axios.post(urlWallet, data)
        loadWallet();
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <TradingView />
            <div className="col-lg-8">
              {/* <div>
                <h1 style={{ color: "white" }}>Withdraw</h1>
              </div> */}
              <div>
              <h3 className="text-light">Withdraw</h3>
            </div>
              <div className="card mb-4">
                <div className="card-body">
                  {wallet && wallet?.length > 0 &&
                    <form>
                      <div className="form-outline mb-4 ">
                        <label className="form-label text-dark font-weight-bold" htmlFor="amount">Amount <span className='text-danger'>*</span>
                          {errors.amount &&
                            <span className="text-danger font-weight-bold"> required</span>
                          }</label>
                        <input
                          type="number"
                          className="form-control form-control-lg"
                          id="amount"
                          name="amount"
                          onChange={(e) => handleOnChange(e)}
                          {...register("amount", { required: true })}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label text-dark font-weight-bold" htmlFor="withdrawCoin">Coin <span className='text-danger'>*</span>
                          {errors.withdrawCoin &&
                            <span className="text-danger font-weight-bold"> required</span>}
                        </label>
                        <select className="form-control form-control-lg text-dark"
                          id="withdrawCoin"
                          name="withdrawCoin"
                          {...register("withdrawCoin", {
                            required: true,
                            onChange: (e) => { selectedCoin(e) },
                          })}
                        >
                          <option className="text-dark">Select Coin</option>
                          {wallet?.map((wal) => (
                            <option key={wal.id} value={wal.id} className="text-dark">{wal.coin}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-outline mb-4 ">
                        <label className="form-label text-dark font-weight-bold" htmlFor="withdrawWalletAddress">Wallet <span className='text-danger'>*</span>
                          {errors.withdrawWalletAddress &&
                            <span className="text-danger font-weight-bold"> required</span>
                          }</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="withdrawWalletAddress"
                          name="withdrawWalletAddress"
                          readOnly
                          onChange={(e) => handleOnChange(e)}
                          {...register("withdrawWalletAddress", { required: true })}
                        />
                      </div>

                      <button onClick={handleSubmit(saveWithdrawal)} type="submit" className="btn btn-success btn-block">
                        Submit
                      </button>
                    </form>
                  }

                  {wallet?.length === 0 &&
                    <h4 className="text-danger">No wallet found, click
                      <span
                        className="text-primary"
                        data-toggle="modal"
                        data-target="#createWallet"> here </span>
                      to add one</h4>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* create wallet */}
      <div
        className="modal fade"
        id="createWallet"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="createWallet"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createWallet">
                Add Wallet
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
              <form>
                <div className="form-outline mb-4">
                  <label className="form-label text-dark font-weight-bold" htmlFor="coin">Coin <span className='text-danger'>*</span>
                    {errors.coin &&
                      <span className="text-danger font-weight-bold"> required</span>}
                  </label>
                  <select className="form-control form-control-lg text-dark"
                    id="coin"
                    name="coin"
                    onChange={(e) => handleOnChange(e)}
                    {...register2("coin", { required: true })}
                  >
                    <option>Select Coin</option>
                    {listedCoins?.map((coin) => (
                      <option key={coin.id} value={coin.coin} className="text-dark">{coin.coin}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-outline mb-4 ">
                  <label className="form-label text-dark font-weight-bold" htmlFor="walletAddress">Wallet <span className='text-danger'>*</span>
                    {errors.walletAddress &&
                      <span className="text-danger font-weight-bold"> required</span>
                    }</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="walletAddress"
                    name="walletAddress"
                    onChange={(e) => handleOnChange(e)}
                    {...register2("walletAddress", { required: true })}
                  />
                </div>
              </form>


            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button data-dismiss="modal" onClick={handleSubmit2(saveWallet)} type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
