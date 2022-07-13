import React, { useEffect, useState } from "react";
import TradingView from "../TradingView";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";
import { urlAdminWallet, urlCoins } from "../../endpoints";
import { coins } from "../../enum";
import { useForm } from "react-hook-form";
import { expiredToken } from "../../Auth/HandleJWT";
import { errorMessage, successMessage } from "../../Utils/hotToast";

export default function AdminWallet() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
    setValue: setValue2,
    reset: reset2
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const [wallet, setWallet] = useState([]);
  const [listedCoins, setListedCoins] = useState();
  const [editWalletData, setEditWalletData] = useState({});
  let addresses = {
    bitcoin: wallet?.find(x => x.coin === coins.BTC),
    ethereum: wallet?.find(x => x.coin === coins.ETH),
    bnb: wallet?.find(x => x.coin === coins.BNB),
    usdt: wallet?.find(x => x.coin === coins.USDT),
    xrp: wallet?.find(x => x.coin === coins.XRP),
    litecoin: wallet?.find(x => x.coin === coins.LTC),
  };
  useEffect(() => {
    expiredToken();
    loadCoins();
    loadWallet();
  }, [wallet])
  const loadCoins = async () => {
    await axios.get(urlCoins)
      .then(response => setListedCoins(response.data))
  }
  const loadWallet = async () => {
    await axios.get(urlAdminWallet)
      .then(response => setWallet(response?.data));
  };
  const loadOneWallet = async (id) => {
    let wal = wallet.find(x => x.coin === id);
    console.log({ id })
    await axios.get(`${urlAdminWallet}/${wal?.id}`)
      .then(response => {
        setEditWalletData(response.data);
        console.log(response.data);
        setValue2("editwalletAddress", response?.data?.walletAddress);
        setValue2("editcoin", response?.data?.coin)
      })
  }
  const deleteWallet = async (id) => {
    expiredToken();
    let wal = wallet.find(x => x.coin === id);
    const res = await axios.delete(`${urlAdminWallet}/${wal?.id}`)
    if (res?.data?.successmessage) {
      successMessage(res?.data?.successmessage);
      loadWallet();
    }
  }

  const saveWallet = async (data) => {
    try {
      expiredToken();
      console.log({ data })
      let exist = wallet.find(x => x.coin === data.coin);
      if (!exist) {
        const res = await axios.post(urlAdminWallet, data)
        if (res?.data?.successmessage) {
          successMessage(res?.data?.successmessage);
          loadWallet();
          return;
        }
        errorMessage(res?.data?.errormessage)
        return;
      }

      errorMessage("Coin already exists!")
    } catch (error) {
      console.log(error)
    }
  }
  const handleOnChange = (e) => {
    // const { name, value } = e.target;

  };
  
  const editWallets = async (data) => {
    try {
      expiredToken();
      let obj = {
        walletAddress: data?.editwalletAddress
      }
      const res = await axios.put(`${urlAdminWallet}/${editWalletData?.id}`, obj)
      if (res?.data?.successmessage) {
        successMessage(res?.data?.successmessage);
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
            {/* <div className="container-fluid"> */}
            {/* <section className="col" style={{ backgroundColor: "#eee" }}> */}
            <div className="col-lg-12">
              <div>
                <h1 style={{ color: 'white', fontWeight: 'bold' }}>Admin Wallet</h1>
              </div>
              {wallet?.length !== 6 &&
                <div className="card mb-4 mb-lg-0">
                  <div className="card-body p-0">
                    <div className="row d-flex float-right mr-4">
                      <p className="text-dark font-weight-bold mr-2 mt-2">Add Wallet</p>
                      <i
                        className="fas fa-plus text-primary mt-2"
                        data-toggle="modal"
                        data-target="#createWallet" />
                      {/* <hr /> */}
                    </div>
                  </div>
                </div>
              }

              <ul className="list-group list-group-flush rounded-3">
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <p className=" text-dark font-weight-bold mb-0">Coins</p>
                  <p className=" text-dark font-weight-bold mb-0">Wallet Address</p>
                  <div className="d-flex justify-content-between">
                    <p className=" text-dark font-weight-bold mb-0">Actions</p>
                  </div>
                </li>
              </ul>

              {wallet &&
                 <div className="card mb-4 mb-lg-0">
                 <div className="card-body p-0">
                   <ul className="list-group list-group-flush rounded-3">
                     {wallet && wallet.find(x => x.coin === coins.BTC) &&
                       <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                         <i className="fab fa-bitcoin fa-lg text-warning" />
                         <p className=" text-dark mb-0 text-wrap" style={{ width: '255px' }}>{addresses.bitcoin.walletAddress}</p>
                         <div className="d-flex justify-content-between">
                           <i
                             onClick={() => loadOneWallet(coins.BTC)}
                             className="fas fa-pen text-success mr-1"
                             data-toggle="modal"
                             data-target="#editwallet"
                           />
                           <i
                             onClick={() => deleteWallet(coins.BTC)}
                             className="fas fa-times text-danger" />
                         </div>
                       </li>
                     }
                     {wallet && wallet.find(x => x.coin === coins.ETH) &&
                       <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                         <i
                           className="fab fa-ethereum fa-lg"
                           style={{ color: "#333333" }}
                         />
                         <p className=" text-dark mb-0 text-wrap" style={{ width: '255px' }}>{addresses.ethereum.walletAddress}</p>
                         <div className="d-flex justify-content-between">
                           <i
                             onClick={() => loadOneWallet(coins.ETH)}
                             className="fas fa-pen text-success mr-1"
                             data-toggle="modal"
                             data-target="#editwallet"
                           />
                           <i
                             onClick={() => deleteWallet(coins.ETH)}
                             className="fas fa-times text-danger" />
                         </div>
                       </li>
                     }
                     {wallet && wallet.find(x => x.coin === coins.BNB) &&
                       <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                         <img src="img/binance-coin-bnb.svg" style={{ width: '20px' }} alt="bnb" />
                         <p className=" text-dark mb-0 text-wrap" style={{ width: '255px' }}>{addresses.bnb.walletAddress}</p>
                         <div className="d-flex justify-content-between">
                           <i
                             onClick={() => loadOneWallet(coins.BNB)}
                             className="fas fa-pen text-success mr-1"
                             data-toggle="modal"
                             data-target="#editwallet"
                           />
                           <i
                             onClick={() => deleteWallet(coins.BNB)}
                             className="fas fa-times text-danger" />
                         </div>
                       </li>
                     }
                     {wallet && wallet.find(x => x.coin === coins.XRP) &&
                       <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                         <img src="img/xrp-xrp-logo.svg" style={{ width: '20px' }} alt="xrp" />
                         <p className=" text-dark mb-0 text-wrap" style={{ width: '255px' }}>{addresses.xrp.walletAddress}</p>
                         <div className="d-flex justify-content-between">
                           <i
                             onClick={() => loadOneWallet(coins.XRP)}
                             className="fas fa-pen text-success mr-1"
                             data-toggle="modal"
                             data-target="#editwallet"
                           />
                           <i
                             onClick={() => deleteWallet(coins.XRP)}
                             className="fas fa-times text-danger" />
                         </div>
                       </li>}
                     {wallet && wallet.find(x => x.coin === coins.USDT) &&
                       <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                         <img src="img/tether-usdt-logo.svg" style={{ width: '20px' }} alt="usdt" />
                         <p className=" text-dark mb-0 text-wrap" style={{ width: '255px' }}>{addresses.usdt.walletAddress}</p>
                         <div className="d-flex justify-content-between">
                           <i
                             onClick={() => loadOneWallet(coins.USDT)}
                             className="fas fa-pen text-success mr-1"
                             data-toggle="modal"
                             data-target="#editwallet"
                           />
                           <i
                             onClick={() => deleteWallet(coins.USDT)}
                             className="fas fa-times text-danger" />
                         </div>
                       </li>
                     }
                     {wallet && wallet.find(x => x.coin === coins.LTC) &&
                       <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                         <img src="img/litecoin-ltc.svg" style={{ width: '20px' }} alt="ltc" />
                         <p className=" text-dark mb-0 text-wrap" style={{ width: '255px' }}>{addresses.litecoin.walletAddress}</p>
                         <div className="d-flex justify-content-between">
                           <i
                             onClick={() => loadOneWallet(coins.LTC)}
                             className="fas fa-pen text-success"
                             data-toggle="modal"
                             data-target="#editwallet"
                           />
                           <i
                             onClick={() => deleteWallet(coins.LTC)}
                             className="fas fa-times text-danger" />
                         </div>
                       </li>
                     }
                   </ul>
                 </div>
               </div>
              }
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
                    {...register("coin", { required: true })}
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
                onClick={() => reset()}
              >
                Close
              </button>
              <button onClick={handleSubmit(saveWallet)} type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Edit wallet */}
      <div
        className="modal fade"
        id="editwallet"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="editwallet"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editwallet">
                Edit Wallet
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
                <div className="form-outline mb-4 ">
                  <label className="form-label text-dark font-weight-bold" htmlFor="editcoin">Coin <span className='text-danger'>*</span>
                    {errors2.editcoin &&
                      <span className="text-danger font-weight-bold"> required</span>
                    }</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="editcoin"
                    readOnly
                    name="editcoin"
                    onChange={(e) => handleOnChange(e)}
                    {...register2("editcoin", { required: true })}
                  />
                </div>
                <div className="form-outline mb-4 ">
                  <label className="form-label text-dark font-weight-bold" htmlFor="editwalletAddress">Wallet <span className='text-danger'>*</span>
                    {errors2.editwalletAddress &&
                      <span className="text-danger font-weight-bold"> required</span>
                    }</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="editwalletAddress"
                    name="editwalletAddress"
                    onChange={(e) => handleOnChange(e)}
                    {...register2("editwalletAddress", { required: true })}
                  />
                </div>
              </form>


            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => reset2()}
              >
                Close
              </button>
              <button onClick={handleSubmit2(editWallets)} type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
