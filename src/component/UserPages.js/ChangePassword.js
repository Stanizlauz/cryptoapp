import React from "react";
import { Link } from "react-router-dom";

export default function ChangePassword() {
  return (
    <>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase text-dark">CHANGE PASSWORD</h3>
                      <form>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label text-dark font-weight-bold"
                            htmlFor="email"
                          >
                            Old Password <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="oldpassword"
                            name="oldpassword"
                          />
                        </div>
                        <div className="form-group">
                          <div className="form-outline mb-4">
                            <label
                              className="form-label text-dark font-weight-bold"
                              htmlFor="password"
                            >
                              New Password{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                id="newpassword"
                                name="newpassword"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default"
                              />
                              <div
                                style={{ cursor: "pointer" }}
                                class="input-group-prepend"
                              >
                                <span
                                  className="input-group-text bg-primary text-light"
                                  id="inputGroup-sizing-default"
                                >
                                  <i className="ti ti-eye"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label text-dark font-weight-bold"
                              htmlFor="password"
                            >
                              Confirm New Password{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                id="newpassword"
                                name="newpassword"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default"
                              />
                              <div
                                style={{ cursor: "pointer" }}
                                class="input-group-prepend"
                              >
                                <span
                                  className="input-group-text bg-primary text-light"
                                  id="inputGroup-sizing-default"
                                >
                                  <i className="ti ti-eye"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="d-flex justify-content-end pt-3">
                        <Link
                          to="/"
                          type="button"
                          className="btn btn-danger btn-lg mr-2"
                        >
                          Back
                        </Link>
                        <button
                          type="button"
                          className="btn btn-success btn-lg ms-2"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="col-lg-8"></div>
    </>
  );
}
