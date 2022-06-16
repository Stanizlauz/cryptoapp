import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'


export default function ViewTransaction() {
  return (
    <>
     <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid">
              <section className="col" style={{ backgroundColor: "#eee" }}>
                <div className="row d-flex float-right mr-4">
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
                        Approve
                      </button>
                    </div>
              
                <div className="col container py-5">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card mb-4">
                        <div className="card-body text-center">
                          <img
                            // src={}
                            // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                            alt="avatar"
                            className="rounded-circle img-fluid"
                            style={{ width: 150 }}
                          />
                          <h5 className="my-3">{} {}</h5><span className="text-dark font-weight-bold">
                         
                          
                          </span>
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
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="text-dark mb-0">Email:</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="text-dark mb-0">Phone:</p>
                            </div>
                            <div className="col-sm-9">
                            <p className="text-muted mb-0">
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="text-dark mb-0">Gender:</p>
                            </div>
                            <div className="col-sm-9">
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="text-dark mb-0">Address:</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">
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
  )
}
