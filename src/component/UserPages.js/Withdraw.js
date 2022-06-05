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
  const [listedCoins, setListedCoins] = useState();
  const [wallet, setWallet] = useState([
    {
      id: 1,
      coin: "Bitcoin",
      walletAddress: "jbvkjfhkj5876893hb47486834"
    },
    {
      id: 2,
      coin: "Etherum",
      walletAddress: "jfhekt48y69348ythgkb"
    }
  ]);
  useEffect(() => {
    loadWallet();
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
    const { name, value } = e.target;

  };

  const selectedCoin = (e) => {
    setValue("walletAddress", e.target.value)
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
      await axios.post(urlWallet, data)
      loadWallet();

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
              <div>
                <h1 style={{ color: "white" }}>Withdraw</h1>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  {!wallet &&
                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label text-dark font-weight-bold" htmlFor="coin">Coin <span className='text-danger'>*</span>
                          {errors.coin &&
                            <span className="text-danger font-weight-bold"> required</span>}
                        </label>
                        <select className="form-control form-control-lg text-dark"
                          id="coin"
                          name="coin"
                          {...register("coin", {
                            required: true,
                            onChange: (e) => { selectedCoin(e) }
                          })}
                        >
                          <option></option>
                          {wallet?.map((wal) => (
                            <option key={wal.id} value={wal.walletAddress} className="text-dark">{wal.coin}
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
                          readOnly
                          onChange={(e) => handleOnChange(e)}
                          {...register("walletAddress", { required: true })}
                        />
                      </div>

                      <button onClick={handleSubmit(saveWithdrawal)} type="submit" className="btn btn-success btn-block">
                        Submit
                      </button>
                    </form>
                  }

                  {wallet &&
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
                    {...register("coin", { required: true })}
                  >
                    <option></option>
                    <option className='text-dark' id='male' value="receipt"> Male </option>
                    <option className='text-dark' id='female' value="adjustment">Female </option>
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
                    {...register("walletAddress", { required: true })}
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
              <button data-dismiss="modal" onClick={handleSubmit(saveWallet)} type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
