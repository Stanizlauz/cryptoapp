import React, {useEffect} from 'react'
// import Link from 'react-router-dom';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { errorMessage, successMessage } from "../Utils/hotToast";

import { urlResetPassword } from '../endpoints'


export default function ForgotPassword() {
   
    const loadData = async (email) => { 
      console.log({email})
       const res = await axios.post(urlResetPassword, email)
       if (res?.data?.successmessage) {
        successMessage(res?.data?.successmessage)
       }
       console.log({res})
    }
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
                      {/* <h3 className="mb-5 text-uppercase text-dark">Sign In</h3> */}
                      <form >
                        <h4>Enter your email address associated with your account and we'll send you a link to reset your password</h4>
                        <div className="form-outline mb-4">
                          <label className="form-label text-dark font-weight-bold" htmlFor="email">Email <span className='text-danger'>*</span>
                              <span className="text-danger font-weight-bold"> required</span>
                            </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="email"
                            name="email"
                         
                          />
                        </div>
                        <div className="form-group">
                          {/* <div className="form-outline mb-4">
                            <label className="form-label text-dark font-weight-bold" htmlFor="password">Password <span className='text-danger'>*</span>
                              {errors.password &&
                                <span className="text-danger font-weight-bold"> required</span>
                              }</label>
                            <div className='input-group'>
                              <input
                                type={password ? "text" : "password"}
                                className="form-control form-control-lg"
                                id="password"
                                name="password"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default"
                              />
                              <div
                                style={{ cursor: 'pointer' }}
                                class="input-group-prepend">
                                <span
                                  className="input-group-text bg-primary text-light"
                                  id="inputGroup-sizing-default"
                                >
                                  <i
                                    className={
                                      password ? "ti ti-eye" : "ti ti-eye"
                                    }
                                  ></i>
                                </span>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </form>
                      <div className="d-flex justify-content-end pt-3">
                        {/* <Link to="/" type="button" className="btn btn-danger btn-lg mr-2">Back</Link> */}
                        <button type="button"className="btn btn-success btn-lg ms-2" onClick={loadData}>Continue</button>
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
  )
}
