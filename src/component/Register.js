import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { urlRegister } from "../endpoints";
import { Country, State} from "country-state-city";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Register() {
  const country = Country.getAllCountries([]);
  const [state, setState] = useState([]);

 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const history = useNavigate();
  Navigate('/');
  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  // };
  const registerUser = async (data) => {
    try {
      data.address = `${data.address}, ${data.state}. ${data.country}`;
      console.log({ data });
      await axios.post(urlRegister, data);
      history("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const selectedState = (e) => {
    console.log(e.target.value);
    setState(State.getStatesOfCountry(e.target.value));
  };
 

  const [input, setInput] = useState({
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState({
    password: '',
    confirmPassword: ''
  })
  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  }
  const togglepassword = () => {
    const userPassword = getValues("password");
    if (!userPassword) {
      return;
    }
    SetPassword(password ? false : true);
  };
  const toggleConfirmpassword = () => {
    const userPassword = getValues("confirmPassword");
    if (!userPassword) {
      return;
    }
    SetConfirmPassword(confirmPassword ? false : true);
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
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample photo" className="img-fluid" style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} />
                  </div> */}
                  {/* <div className="col-xl-6"> */}
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase text-dark">Sign Up</h3>
                    <form className="row">
                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="firstName"
                        >
                          First Name <span className="text-danger">*</span>
                          {errors.firstName && (
                            <span className="text-danger font-weight-bold">
                              {" "}
                              required
                            </span>
                          )}
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="firstName"
                          name="firstName"
                          // onChange={(e) => handleOnChange(e)}
                          {...register("firstName", { required: true })}
                        />
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="lastName"
                        >
                          Last name <span className="text-danger">*</span>
                          {errors.lastName && (
                            <span className="text-danger font-weight-bold">
                              {" "}
                              required
                            </span>
                          )}
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="lastName"
                          name="lastName"
                          // onChange={(e) => handleOnChange(e)}
                          {...register("lastName", { required: true })}
                        />
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="picture"
                        >
                          Picture <span className="text-danger">*</span>
                          {errors.picture && (
                            <span className="text-danger font-weight-bold">
                              {" "}
                              required
                            </span>
                          )}
                        </label>
                        <input
                          type="file"
                          className="form-control form-control-lg"
                          id="picture"
                          name="picture"
                          // onChange={(e) => handleOnChange(e)}
                          {...register("picture", { required: false })}
                        />
                      </div>

                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="gender"
                        >
                          Gender <span className="text-danger">*</span>
                          {errors.gender && (
                            <span className="text-danger font-weight-bold">
                              {" "}
                              required
                            </span>
                          )}
                        </label>
                        <select
                          className="form-control form-control-lg text-dark"
                          id="gender"
                          name="gender"
                          // onChange={(e) => handleOnChange(e)}
                          {...register("gender", { required: true })}
                        >
                          <option></option>
                          <option className="text-dark" id="male" value="Male">
                            {" "}
                            Male{" "}
                          </option>
                          <option
                            className="text-dark"
                            id="female"
                            value="Female"
                          >
                            Female{" "}
                          </option>
                        </select>
                      </div>

                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="dateOfBirth"
                        >
                          Date Of Birth <span className="text-danger">*</span>
                          {errors.dateOfBirth && (
                            <span className="text-danger font-weight-bold">
                              {" "}
                              required
                            </span>
                          )}
                        </label>
                        <input
                          type="date"
                          className="form-control form-control-lg"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          // onChange={(e) => handleOnChange(e)}
                          {...register("dateOfBirth", { required: true })}
                        />
                      </div>

                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="email"
                        >
                          Email <span className="text-danger">*</span>
                          {errors.email && (
                            <span className="text-danger font-weight-bold">
                              {" "}
                              required
                            </span>
                          )}
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="email"
                          name="email"
                          // onChange={(e) => handleOnChange(e)}
                          {...register("email", { required: true })}
                        />
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="phoneNo"
                        >
                          Phone No. <span className="text-danger">*</span>
                          {errors.phoneNo && (
                            <span className="text-danger font-weight-bold">
                              {" "}
                              required
                            </span>
                          )}
                        </label>
                        <input
                          type="number"
                          className="form-control form-control-lg"
                          id="phoneNo"
                          name="phoneNo"
                          // onChange={(e) => handleOnChange(e)}
                          {...register("phoneNo", { required: true })}
                        />
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="country"
                        >
                          Country <span className="text-danger">*</span>
                          {errors.country && (
                            <span className="text-danger font-weight-bold">
                              {" "}
                              required
                            </span>
                          )}
                        </label>
                        <select
                          className="form-control form-control-lg text-dark"
                          id="country"
                          name="country"
                          {...register("country", {
                            required: true,
                            onChange: (e) => {
                              selectedState(e);
                            },
                          })}
                        >
                          <option></option>
                          {country?.map((wal) => (
                            <option value={wal.isoCode} className="text-dark">
                              {wal.name}
                            </option>
                          ))}
                          {/* <option id='male' value="receipt"> Male </option>
                          <option id='female' value="adjustment">Female </option> */}
                        </select>
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="state"
                        >
                          State <span className="text-danger">*</span>
                          {errors.state && (
                            <span className="text-danger font-weight-bold">
                              {" "}
                              required
                            </span>
                          )}
                        </label>
                        <select
                          className="form-control form-control-lg"
                          id="state"
                          name="state"
                          {...register("state", {
                            required: true,
                          })}
                        >
                          <option></option>
                          {state &&
                            state?.map((wal) => (
                              <option
                                value={wal.name}
                                className="text-dark"
                                key={wal.isoCode}
                              >
                                {wal.name}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="address"
                        >
                          Address <span className="text-danger">*</span>
                          {errors.address && (
                            <span className="text-danger font-weight-bold">
                              {" "}
                              required
                            </span>
                          )}
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="address"
                          name="address"
                          // onChange={(e) => handleOnChange(e)}
                          {...register("address", { required: true })}
                        />
                      </div>
                      {/* <div className="form-group mr-2"> */}
                      <div className="form-outline mb-4 col-md-4">
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
                      {/* </div> */}
                      {/* <div className="form-group"> */}
                      <div className="form-outline mb-4 col-md-4">
                        <label className="form-label text-dark font-weight-bold" htmlFor="confirmPassword">Confirm Password <span className='text-danger'>*</span>
                          {errors.confirmPassword &&
                            <span className="text-danger font-weight-bold"> required</span>
                          }</label>
                        <div className='input-group'>
                          <input
                            type={confirmPassword ? "text" : "password"}
                            className="form-control form-control-lg"
                            id="confirmPassword"
                            name="confirmPassword"
                            onChange={(e) => handleOnChange(e)}
                            {...register("confirmPassword", { required: true })}
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                          />
                          <div
                            style={{ cursor: 'pointer' }}
                            onClick={toggleConfirmpassword}
                            class="input-group-prepend">
                            <span
                              className="input-group-text bg-primary text-light"
                              id="inputGroup-sizing-default"
                            >
                              <i
                                className={
                                  confirmPassword ? "ti ti-eye" : "ti ti-eye"
                                }
                              ></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* </div> */}
                      {/* <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="confirmPassword"
                        >
                          Confirm Password{" "}
                          <span className="text-danger">*</span>
                          {error.confirmPassword && (
                            <span className="text-danger font-weight-bold">
                              {error.confirmPassword}
                              required
                            </span>
                          )}
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={input.confirmPassword}
                          onBlur={validateInput}
                          {...register("confirmPassword", {
                            required: true, onChange: (e) => {
                              onInputChange(e);
                            },
                          })}
                        />
                      </div> */}
                    </form>
                    <div className="d-flex float-right pt-3">
                      <Link
                        type="button"
                        to="/"
                        className="btn btn-dark btn-lg mr-2"
                      >
                        Back
                      </Link>
                      <button
                        type="button"
                        id="submit"
                        onClick={handleSubmit(registerUser)}
                        className="btn btn-success btn-lg"
                      >
                        Submit form
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}
