import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";
import { urlProfile, urlWallet } from "../../endpoints"

export default function UserProfile() {
  const [wallet, setWallet] = useState([]);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    loadData();
    loadUserData();
  }, [])

  const loadData = async () => {
    await axios.get(urlWallet)
      .then(response => setWallet(response.data))
  }

  const loadUserData = async () => {
    await axios.get(urlProfile)
      .then(response => setProfile(response.data))
  }

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid">
              <section className="col" style={{ backgroundColor: "#eee" }}>
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
                          <ul className="list-group list-group-flush rounded-3">
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                              <i className="fab fa-bitcoin fa-lg text-warning" />
                              <p className=" text-dark mb-0">btc12124343gfhf</p>
                              <div className="d-flex justify-content-between">
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm px-3 text-dark"
                                  data-ripple-color="dark"
                                >
                                  <i className="fas fa-bars text-dark" />
                                </button>
                              </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                              <i
                                className="fab fa-ethereum fa-lg"
                                style={{ color: "#333333" }}
                              />
                              <p className=" text-dark mb-0">btc12124343gfhf</p>
                              <div className="d-flex justify-content-between">
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm px-3 text-dark"
                                  data-ripple-color="dark"
                                >
                                  <i className="fas fa-bars text-dark" />
                                </button>
                              </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                              <i
                                className="fab fa-gg-circle fa-lg"
                                style={{ color: "#55acee" }}
                              />
                              <p className=" text-dark mb-0">btc12124343gfhf</p>
                              <div className="d-flex justify-content-between">
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm px-3 text-dark"
                                  data-ripple-color="dark"
                                >
                                  <i className="fas fa-bars text-dark" />
                                </button>
                              </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                              <i
                                className="fab fa-gg-circle fa-lg"
                                style={{ color: "#ac2bac" }}
                              />
                              <p className=" text-dark mb-0">btc12124343gfhf</p>
                              <div className="d-flex justify-content-between">
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm px-3 text-dark"
                                  data-ripple-color="dark"
                                >
                                  <i className="fas fa-bars text-dark" />
                                </button>
                              </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                              <i
                                className="fab fa-gg-circle fa-lg"
                                style={{ color: "#3b5998" }}
                              />
                              <p className=" text-dark mb-0">btc12124343gfhf</p>
                              <div className="d-flex justify-content-between">
                                <button
                                  type="button"
                                  className="btn btn-link btn-sm px-3 text-dark"
                                  data-ripple-color="dark"
                                >
                                  <i className="fas fa-bars text-dark" />
                                </button>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
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
    </>
  );
}
