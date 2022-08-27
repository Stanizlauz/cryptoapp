import React from 'react'




export default function ResetPassword() {
    // const [reset, setReset] = useState();
 

  return (
    <>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  {/* <div className="col-xl-6 d-none d-xl-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample" className="img-fluid" style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} />
                  </div> */}
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <form>
                        <div className="form-group">
                          <div className="form-outline mb-4">
                            <label
                              className="form-label text-dark font-weight-bold"
                              htmlFor="password"
                            >
                              Enter new password{" "}
                              <span className="text-danger">*</span>
                                <span className="text-danger font-weight-bold">
                                  {" "}
                                  required
                                </span>
                            </label>
                            <div className="input-group">
                              <input
                                type="password"
                                className="form-control form-control-lg"
                                id="password"
                                name="password"
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
                                 
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label text-dark font-weight-bold"
                              htmlFor="password"
                            >
                              Confirm new password{" "}
                              <span className="text-danger">*</span>
                                <span className="text-danger font-weight-bold">
                                  {" "}
                                  required
                                </span>
                            </label>
                            <div className="input-group">
                              <input
                                type="password"
                                className="form-control form-control-lg"
                                id="password"
                                name="password"
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
                                 
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="d-flex justify-content-end pt-3">
                        {/* <Link
                          to="/"
                          type="button"
                          className="btn btn-danger btn-lg mr-2"
                        >
                          Back
                        </Link> */}
                        <button
                          type="button"
                          className="btn btn-success btn-lg ms-2"
                        >
                          Reset Password
                        </button>
                        {/* <Link
                          to="/forgotpassword"
                          type="button"
                          className="btn btn-warning"
                        >
                          Forgot Password
                        </Link> */}
                      </div>
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
