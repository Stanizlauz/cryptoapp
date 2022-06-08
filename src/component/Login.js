import React from 'react'
import { useForm } from 'react-hook-form';
import { urlLogin } from '../endpoints';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { saveToken } from '../Auth/HandleJWT';

export default function Login() {
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
  const history = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;

  };
  const loginUser = async (data) => {
    try {
      console.log({data})
     const res= await axios.post(urlLogin, data)
     console.log(res?.data)
     saveToken(res?.data)
     history("/dashboard")
     window.location.reload()
    } catch (error) {
      console.log(error)
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
                  <div className="col-xl-6 d-none d-xl-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample photo" className="img-fluid" style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase text-dark">Sign In</h3>
                      <form >
                        <div className="form-outline mb-4">
                          <label className="form-label text-dark font-weight-bold" htmlFor="email">Email <span className='text-danger'>*</span>
                            {errors.email &&
                              <span className="text-danger font-weight-bold"> required</span>
                            }</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="email"
                            name="email"
                            onChange={(e) => handleOnChange(e)}
                            {...register("email", { required: true })}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label text-dark font-weight-bold" htmlFor="password">Password <span className='text-danger'>*</span>
                            {errors.password &&
                              <span className="text-danger font-weight-bold"> required</span>
                            }</label>
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="password"
                            name="password"
                            onChange={(e) => handleOnChange(e)}
                            {...register("password", { required: true })}
                          />
                        </div>
                      </form>
                      <div className="d-flex justify-content-end pt-3">
                      <Link to="/" type="button" className="btn btn-danger btn-lg mr-2">Back</Link>
                        <button type="button" onClick={handleSubmit(loginUser)} className="btn btn-success btn-lg ms-2">Login</button>
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
