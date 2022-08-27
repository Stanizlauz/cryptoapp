import React from 'react';
import axios from 'axios';
import { errorMessage, successMessage } from "../Utils/hotToast";
import { urlForgotPassword } from '../endpoints';
import { useForm } from 'react-hook-form';

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const checkEmail = async (email) => {
    const res = await axios.post(urlForgotPassword, email)
    if (res?.data?.successmessage) {
      successMessage(res?.data?.successmessage)
    }
    else{
      errorMessage(res?.data?.errormessage)
    }
  }
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
                      <form >
                        <h4>Enter your email address and we'll send you a link to reset your password</h4>
                        <div className="form-outline mb-4">
                          <label className="form-label text-dark font-weight-bold" htmlFor="email">Email <span className='text-danger'>*</span>
                            {errors.email &&
                              <span className="text-danger font-weight-bold"> required</span>
                            }
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="email"
                            name="email"
                            {...register("email", { required: true })}
                          />
                        </div>
                        <div className="form-group">
                        </div>
                      </form>
                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-success btn-lg ms-2" onClick={handleSubmit(checkEmail)}>Continue</button>
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
