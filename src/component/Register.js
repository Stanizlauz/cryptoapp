import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { urlRegister } from '../endpoints';
import { Country, State, City }  from 'country-state-city';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Register() {
  const country = Country.getAllCountries();
  const state = State.getAllStates();
  const city = City.getAllCities();
  console.log(Country.getAllCountries())
  console.log(State.getAllStates())
  console.log(City.getAllCities())

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
  // Navigate('/');
  const handleOnChange = (e) => {
    const { name, value } = e.target;

  };
  const registerUser = async (data) => {
    try {

      await axios.post(urlRegister, data)

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
                  {/* <div className="col-xl-6 d-none d-xl-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample photo" className="img-fluid" style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} />
                  </div> */}
                  {/* <div className="col-xl-6"> */}
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase text-dark">Sign Up</h3>
                    <form className="row">
                      <div className="form-outline mb-4 col-md-4">
                        <label className="form-label text-dark font-weight-bold" htmlFor="firstName">First Name <span className='text-danger'>*</span>
                          {errors.firstName &&
                            <span className="text-danger font-weight-bold"> required</span>
                          }</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="firstName"
                          name="firstName"
                          onChange={(e) => handleOnChange(e)}
                          {...register("firstName", { required: true })}
                        />
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label className="form-label text-dark font-weight-bold" htmlFor="lastName">Last name <span className='text-danger'>*</span>
                          {errors.lastName &&
                            <span className="text-danger font-weight-bold"> required</span>
                          }</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="lastName"
                          name="lastName"
                          onChange={(e) => handleOnChange(e)}
                          {...register("lastName", { required: true })}
                        />
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label className="form-label text-dark font-weight-bold" htmlFor="picture">Picture <span className='text-danger'>*</span>
                          {errors.picture &&
                            <span className="text-danger font-weight-bold"> required</span>
                          }</label>
                        <input
                          type="file"
                          className="form-control form-control-lg"
                          id="picture"
                          name="picture"
                          onChange={(e) => handleOnChange(e)}
                          {...register("picture", { required: false })}
                        />
                      </div>

                      <div className="form-outline mb-4 col-md-4">
                        <label className="form-label text-dark font-weight-bold" htmlFor="gender">Gender <span className='text-danger'>*</span>
                          {errors.gender &&
                            <span className="text-danger font-weight-bold"> required</span>}
                        </label>
                        <select className="form-control form-control-lg text-dark"
                          id="gender"
                          name="gender"
                          onChange={(e) => handleOnChange(e)}
                          {...register("gender", { required: true })}
                        >
                          <option></option>
                          <option className='text-dark' id='male' value="Male"> Male </option>
                          <option className='text-dark' id='female' value="Female">Female </option>
                        </select>
                      </div>

                      <div className="form-outline mb-4 col-md-4">
                        <label className="form-label text-dark font-weight-bold" htmlFor="dateOfBirth">Date Of Birth <span className='text-danger'>*</span>
                          {errors.dateOfBirth &&
                            <span className="text-danger font-weight-bold"> required</span>
                          }</label>
                        <input
                          type="date"
                          className="form-control form-control-lg"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          onChange={(e) => handleOnChange(e)}
                          {...register("dateOfBirth", { required: true })}
                        />
                      </div>

                      <div className="form-outline mb-4 col-md-4">
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
                      <div className="form-outline mb-4 col-md-4">
                        <label className="form-label text-dark font-weight-bold" htmlFor="phoneNo">Phone No. <span className='text-danger'>*</span>
                          {errors.phoneNo &&
                            <span className="text-danger font-weight-bold"> required</span>
                          }</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="phoneNo"
                          name="phoneNo"
                          onChange={(e) => handleOnChange(e)}
                          {...register("phoneNo", { required: true })}
                        />
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label className="form-label text-dark font-weight-bold" htmlFor="country">Country <span className='text-danger'>*</span>
                          {errors.country &&
                            <span className="text-danger font-weight-bold"> required</span>}
                        </label>
                        <select className="form-control form-control-lg text-dark"
                          id="country"
                          name="country"
                          onChange={(e) => handleOnChange(e)}
                          {...register("country", { required: true })}
                        >
                          <option></option>
                          {country?.map((wal) => (
                            <option key={wal.isoCode} value={wal.name} className="text-dark">{wal.name}
                            </option>
                          ))}
                          {/* <option id='male' value="receipt"> Male </option>
                          <option id='female' value="adjustment">Female </option> */}
                        </select>
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label className="form-label text-dark font-weight-bold" htmlFor="state">State <span className='text-danger'>*</span>
                          {errors.state &&
                            <span className="text-danger font-weight-bold"> required</span>}
                        </label>
                        <select className="form-control form-control-lg"
                          id="state"
                          name="state"
                          onChange={(e) => handleOnChange(e)}
                          {...register("state", { required: true })}
                        >
                          <option></option>
                          <option id='male' value="receipt"> Male </option>
                          <option id='female' value="adjustment">Female </option>
                        </select>
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label className="form-label text-dark font-weight-bold" htmlFor="city">City <span className='text-danger'>*</span>
                          {errors.city &&
                            <span className="text-danger font-weight-bold"> required</span>}
                        </label>
                        <select className="form-control form-control-lg"
                          id="city"
                          name="city"
                          onChange={(e) => handleOnChange(e)}
                          {...register("city", { required: true })}
                        >
                          <option></option>
                          <option id='male' value="receipt"> Male </option>
                          <option id='female' value="adjustment">Female </option>
                        </select>
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label className="form-label text-dark font-weight-bold" htmlFor="address">Address <span className='text-danger'>*</span>
                          {errors.address &&
                            <span className="text-danger font-weight-bold"> required</span>
                          }</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="address"
                          name="address"
                          onChange={(e) => handleOnChange(e)}
                          {...register("address", { required: true })}
                        />
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label className="form-label text-dark font-weight-bold" htmlFor="password">Password <span className='text-danger'>*</span>
                          {errors.password &&
                            <span className="text-danger font-weight-bold"> required</span>
                          }</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="password"
                          name="password"
                          onChange={(e) => handleOnChange(e)}
                          {...register("password", { required: true })}
                        />
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label className="form-label text-dark font-weight-bold" htmlFor="confirmPassword">Confirm Password <span className='text-danger'>*</span>
                          {errors.confirmPassword &&
                            <span className="text-danger font-weight-bold"> required</span>
                          }</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="confirmPassword"
                          name="confirmPassword"
                          onChange={(e) => handleOnChange(e)}
                          {...register("confirmPassword", { required: true })}
                        />
                      </div>
                    </form>
                    <div className="d-flex float-right pt-3">
                      <Link type="button" to='/' className="btn btn-dark btn-lg mr-2">Back</Link>
                      <button type="button" onClick={handleSubmit(registerUser)} className="btn btn-success btn-lg">Submit form</button>
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
  )
}
