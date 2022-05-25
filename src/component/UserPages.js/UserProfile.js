import React from "react";

export default function UserProfile() {
  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="row d-flex float-right mr-4">
          <button type="button" class="btn btn-info btn-rounded">
            Edit
          </button>
          <hr />
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 150 }}
                  />
                  <h5 className="my-3">John Smith</h5>
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
                      <p className="text-muted mb-0">Johnatan Smith</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="text-dark mb-0">Email:</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">example@example.com</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="text-dark mb-0">Phone:</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="text-dark mb-0">Date Of Birth:</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">22-05-1767</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="text-dark mb-0">Gender:</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Female</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="text-dark mb-0">Address:</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        Bay Area, San Francisco, CA
                      </p>
                    </div>
                  </div>
                  <hr />
                 
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="text-dark mb-0">Bitcoin:</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">gfd234343gkgk5jfjtj</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
