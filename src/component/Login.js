import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { urlLogin } from '../endpoints';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { saveToken } from '../Auth/HandleJWT';
import { errorMessage, successMessage } from '../Utils/hotToast';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const [password, SetPassword] = useState(false);

  const history = useNavigate();
  const handleOnChange = (e) => {

  };
  const loginUser = async (data) => {
    try {
      console.log({ data })
      const res = await axios.post(urlLogin, data)
      if (res?.data?.successmessage) {
        successMessage(res?.data?.successmessage);
        saveToken(res?.data)
        history("/")
        window.location.reload()
        return;
      }
      errorMessage(res?.data?.errormessage)
    } catch (error) {
      console.log(error)
    }
  }
  const togglepassword = () => {
    const userPassword = getValues("password");
    if (!userPassword) {
      return;
    }
    SetPassword(password ? false : true);
  };
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
                        <div className="form-group">
                          <div className="form-outline mb-4">
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
                                onChange={(e) => handleOnChange(e)}
                                {...register("password", { required: true })}
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default"
                              />
                              <div
                                style={{ cursor: 'pointer' }}
                                onClick={togglepassword}
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
                          </div>
                        </div>
                      </form>
                      <Link to="/forgotpassword" className="text-primary">Forgot your password?</Link>
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
// const createStockInwards = async (data: any) => {
//   expiredToken();
//   try {
//       const formData = convertStockInwardToFormData(data);
//       await axios({
//           method: 'post',
//           url: `${urlStockInwards}`,
//           data: formData,
//           headers: { 'Content-Type': 'multipart/form-data' }
//       })
//       console.log({ formData })
//       history.push("/stockinwardslist")
//   } catch (error) {
//       console.log(error)
//   }
// }