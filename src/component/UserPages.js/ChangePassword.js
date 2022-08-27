import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { expiredToken, logOut } from "../../Auth/HandleJWT";
import { urlChangePassword } from "../../endpoints";
import { errorMessage, successMessage } from "../../Utils/hotToast";

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const history = useNavigate()
  const [error, setError] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });
  const [input, setInput] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const goToPreviousPath = () => {
    history(-1)
  }
  const handleOnChange = (e) => {
    // const { name, value } = e.target;
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };
  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "";
          } else if (input.confirmNewPassword && value !== input.confirmNewPassword) {
            stateObj["confirmNewPassword"] =
              "New password and Confirm Password does not match ";
          } else {
            stateObj["confirmNewPassword"] = input.confirmNewPassword
              ? ""
              : error.confirmNewPassword;
          }
          break;

        case "confirmNewPassword":
          if (!value) {
            stateObj[name] = " ";
          } else if (input.newPassword && value !== input.newPassword) {
            stateObj[name] = "Password does not match ";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const changePass = async (data) => {
    try {
      expiredToken()
      console.log({ data })
      const res = await axios.post(urlChangePassword, data)
      if (res?.data?.successmessage) {
        successMessage(res?.data?.successmessage);
        logOut()
        history("/")
      }
      console.log({ res })
      errorMessage(res?.data?.errormessage)
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
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase text-dark">CHANGE PASSWORD</h3>
                      <form>
                        <div className="form-outline mb-4 ">
                          <label className="form-label text-dark font-weight-bold" htmlFor="oldPassword">Old Password <span className='text-danger'>*</span>
                            {errors.oldPassword &&
                              <span className="text-danger font-weight-bold"> required</span>
                            }</label>
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="oldPassword"
                            name="oldPassword"
                            onChange={(e) => handleOnChange(e)}
                            {...register("oldPassword", { required: true })}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label text-dark font-weight-bold"
                            htmlFor="newPassword"
                          >
                            New Password <span className="text-danger">*</span>
                            {/* {error.password && <span className="text-danger font-weight-bold">
                            {error.password}
                          </span>} */}
                            {errors.newPassword && (
                              <span className="text-danger font-weight-bold">
                                required
                              </span>
                            )}
                          </label>
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="newPassword"
                            name="newPassword"
                            value={input.newPassword}
                            onBlur={validateInput}
                            {...register("newPassword", {
                              required: true, onChange: (e) => {
                                onInputChange(e);
                              },
                            })}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label text-dark font-weight-bold"
                            htmlFor="confirmNewPassword"
                          >
                            Confirm New Password{" "}
                            <span className="text-danger">*</span>
                            {error.confirmNewPassword && <span className="text-danger font-weight-bold">
                              {error.confirmNewPassword}
                            </span>}
                            {errors.confirmNewPassword && (
                              <span className="text-danger font-weight-bold">
                                required
                              </span>
                            )}
                          </label>
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="confirmNewPassword"
                            name="confirmNewPassword"
                            value={input.confirmNewPassword}
                            onBlur={validateInput}
                            {...register("confirmNewPassword", {
                              required: true, onChange: (e) => {
                                onInputChange(e);
                              },
                            })}
                          />
                        </div>
                      </form>
                      <div className="d-flex justify-content-end pt-3">
                        <button
                          type="button"
                          className="btn btn-danger btn-lg mr-2"
                          onClick={goToPreviousPath}
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-lg ms-2"
                          onClick={handleSubmit(changePass)}
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
