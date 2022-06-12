import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";
import { urlCoins, urlProfile, urlWallet } from "../../endpoints";
import { coins } from "../../enum";
import { useForm } from "react-hook-form";
import { getToken } from "../../Auth/HandleJWT";

export default function UserProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
    // watch,
    // trigger,
    // control,
    // setValue,
    // getValues,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
    setValue: setValue2,
    // getValues: getValues2,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const [wallet, setWallet] = useState([]);
  const [profile, setProfile] = useState([]);
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
  const userAuth = getToken();
  useEffect(() => {
    loadWallet();
    loadUserData();
    loadCoins();
  }, [wallet])

  const loadWallet = async () => {
    await axios.get(urlWallet)
      .then(response => setWallet(response.data))

  }

  const loadUserData = async () => {
    await axios.get(`${urlProfile}/${userAuth?.id}`)
      .then(response => setProfile(response.data))
  }

  const loadCoins = async () => {
    await axios.get(urlCoins)
      .then(response => setListedCoins(response.data))
  }

  const handleOnChange = (e) => {
    // const { name, value } = e.target;

  };

  const loadOneWallet = async (id) => {
    let wal = wallet.find(x => x.coin === id);
    console.log({ id })
    console.log({ wal })
    await axios.get(`${urlWallet}/${wal?.id}`)
      .then(response => {
        setEditWalletData(response.data);
        setValue2("editwalletAddress", response?.data?.walletAddress);
        setValue2("editcoin", response?.data?.coin)
      })

  }
  const deleteWallet = async (id) => {
    let wal = wallet.find(x => x.coin === id);
    await axios.delete(`${urlWallet}/${wal?.id}`)
  }
  const saveWallet = async (data) => {
    try {
      let exist = wallet.find(x => x.coin === data.coin);
      if (!exist) {
        console.log({ data })
        await axios.post(urlWallet, data)
        loadWallet();
      }

      //  window.location.reload()

    } catch (error) {
      console.log(error)
    }
  }
  const editWallets = async (data) => {
    try {
      let obj = {
        walletAddress: data?.editwalletAddress
      }
      console.log({ obj })
      await axios.put(`${urlWallet}/${editWalletData?.id}`, obj)
      loadWallet();

    } catch (error) {
      console.log(error)
    }
  }
  const Verify = () => {

    useEffect(() => {
      const timer = setTimeout(() => console.log("Your account have been successfully verified!"), 5000);
      return () => clearTimeout(timer);
    }, []);
  
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
              <div className="row ml-4">
                  <small className="btn m-0 font-weight-bold text-danger" data-toggle="modal" data-target="#exampleModal">Click to verify your account</small>
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
                              htmlFor="identityNumber"
                            >
                              Enter identity number{" "}
                              <span className="text-danger">*</span>
                              {errors.identityNumber && (
                                <span className="text-danger font-weight-bold">
                                  {" "}
                                  Minimum $500
                                </span>
                              )}
                            </label>
                            <input
                              type="number"
                              placeholder="Driver's license, Identification number"
                              id="identityNumber"
                              className="form-control"
                              onChange={(e) => handleOnChange(e)}
                              {...register("identityNumber", {
                                required: true,
                              })}
                            />
                          </div>
                          <hr />
                         
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
                            className="btn btn-primary"
                            onClick={Verify}
                          >
                            Verify
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
                <div className="row d-flex float-left ml-4">
                  <h2 className="m-0 font-weight-bold text-dark">Welcome</h2>
                </div>
                {/* <div className="row d-flex float-right mr-4">
                <button type="button" class="btn btn-info btn-rounded">
                  Edit
                </button>
                <hr />
              </div> */}
                <div className="col container py-5">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card mb-4">
                        <div className="card-body text-center">
                          <img
                            // src={profile?.picture}
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                            alt="avatar"
                            className="rounded-circle img-fluid"
                            style={{ width: 150 }}
                          />
                          <h5 className="my-3">{profile?.firstName} {profile?.lastName}</h5><span className="text-dark font-weight-bold">
                            {profile?.identityNumber ? <i className="fab fa-gg-circle fa-lg text-success" />
                              :
                              <i className="fab fa-gg-circle fa-lg text-danger" />
                            }
                            {profile?.identityNumber ? <span className="text-dark font-weight-bold">verified</span>
                              : <span className="text-dark font-weight-bold">NotVerified</span>
                            }
                          </span>
                        </div>
                      </div>
                      <div className="card mb-4 mb-lg-0">
                          <div className="card-body p-0">
                            <div className="row d-flex float-left ml-2">
                              <p className="text-dark font-weight-bold mr-2 mt-2">Wallets</p>
                            </div>
                          </div>
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
                      {wallet &&
                        <div className="card mb-4 mb-lg-0">
                          <div className="card-body p-0">
                            <ul className="list-group list-group-flush rounded-3">
                              {wallet && wallet.find(x => x.coin === coins.BTC) &&
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                  <i className="fab fa-bitcoin fa-lg text-warning" />
                                  <p className=" text-dark mb-0">{addresses.bitcoin.walletAddress}</p>
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
                                  <p className=" text-dark mb-0">{addresses.ethereum.walletAddress}</p>
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
                                  <p className=" text-dark mb-0">{addresses.bnb.walletAddress}</p>
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
                                  <p className=" text-dark mb-0">{addresses.xrp.walletAddress}</p>
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
                                  <p className=" text-dark mb-0">{addresses.usdt.walletAddress}</p>
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
                                  <p className=" text-dark mb-0">{addresses.litecoin.walletAddress}</p>
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
                    <div className="col-lg-8">
                      <div className="card mb-4">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="text-dark mb-0">Full Name:</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{profile?.firstName} {profile?.lastName}</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="text-dark mb-0">Email:</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">
                                {profile?.email}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="text-dark mb-0">Phone:</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{profile?.phoneNo}</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="text-dark mb-0">Date Of Birth:</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{profile?.dateOfBirth}</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="text-dark mb-0">Gender:</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{profile?.gender}</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="text-dark mb-0">Address:</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">
                                {profile?.address}
                              </p>
                            </div>
                          </div>
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
  );
}
