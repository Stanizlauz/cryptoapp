import axios from "axios";
import moment from "moment";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { getToken } from "../../Auth/HandleJWT";
import { urlProfile } from "../../endpoints";
import { updateProfileFormData } from "../../Utils/FormData";
import { successMessage } from "../../Utils/hotToast";

export default function EditProfile() {
    const userAuth = getToken();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
    });
    const history = useNavigate();
    const handleOnChange = (e) => {
        // const { name, value } = e.target;
    };
    useEffect(() => {
        loadUserData();
        //eslint-disable-next-line
    }, [])
    const loadUserData = async () => {
        const response = await axios.get(`${urlProfile}/${userAuth?.id}`)
        setValue("dateOfBirth", moment(response?.data?.dateOfBirth).format("YYYY-MM-DD"));
        setValue("firstName", response?.data?.firstName);
        setValue("gender", response?.data?.gender);
        setValue("lastName", response?.data?.lastName);
        setValue("phoneNo", response?.data?.phoneNo);
        setValue("picture", response?.data?.picture);
    }
    const updateUser = async (data) => {
        try {
            if (data.picture) {
                data.picture = data?.picture[0]
                const formData = updateProfileFormData(data);
                console.log({ formData })
                const res = await axios.put(`${urlProfile}/${userAuth?.id}`, formData)
                if (res?.data?.successmessage) {
                    successMessage(res?.data?.successmessage);
                    history("/userprofile");
                }
            }
            console.log({ data });
            const formData = updateProfileFormData(data);
            console.log({ formData })
            const res = await axios.put(`${urlProfile}/${userAuth?.id}`, formData)
            if (res?.data?.successmessage) {
                successMessage(res?.data?.successmessage);
                history("/userprofile");
            }
        } catch (error) {
            console.log(error);
        }
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
                                        <h3 className="mb-5 text-uppercase text-dark">Edit Profile</h3>
                                        <form className="row">
                                            <div className="form-outline mb-4 col-md-4">
                                                <label
                                                    className="form-label text-dark font-weight-bold"
                                                    htmlFor="firstName"
                                                >
                                                    First Name
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
                                                    onChange={(e) => handleOnChange(e)}
                                                    {...register("firstName")}
                                                />
                                            </div>
                                            <div className="form-outline mb-4 col-md-4">
                                                <label
                                                    className="form-label text-dark font-weight-bold"
                                                    htmlFor="lastName"
                                                >
                                                    Last name
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
                                                    onChange={(e) => handleOnChange(e)}
                                                    {...register("lastName")}
                                                />
                                            </div>
                                            <div className="form-outline mb-4 col-md-4">
                                                <label
                                                    className="form-label text-dark font-weight-bold"
                                                    htmlFor="picture"
                                                >
                                                    Picture
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
                                                    accept=".jpg, .jpeg, .png"
                                                    id="picture"
                                                    name="picture"
                                                    onChange={(e) => handleOnChange(e)}
                                                    {...register("picture", { required: false })}
                                                />
                                            </div>

                                            <div className="form-outline mb-4 col-md-4">
                                                <label
                                                    className="form-label text-dark font-weight-bold"
                                                    htmlFor="gender"
                                                >
                                                    Gender
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
                                                    onChange={(e) => handleOnChange(e)}
                                                    {...register("gender")}
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
                                                    Date Of Birth
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
                                                    onChange={(e) => handleOnChange(e)}
                                                    {...register("dateOfBirth")}
                                                />
                                            </div>
                                            <div className="form-outline mb-4 col-md-4">
                                                <label
                                                    className="form-label text-dark font-weight-bold"
                                                    htmlFor="phoneNo"
                                                >
                                                    Phone No.
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
                                                    onChange={(e) => handleOnChange(e)}
                                                    {...register("phoneNo")}
                                                />
                                            </div>
                                        </form>
                                        <div className="d-flex float-right pt-3">
                                            <Link
                                                type="button"
                                                to="/userprofile"
                                                className="btn btn-dark btn-lg mr-2"
                                            >
                                                Back
                                            </Link>
                                            <button
                                                type="button"
                                                id="submit"
                                                onClick={handleSubmit(updateUser)}
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
