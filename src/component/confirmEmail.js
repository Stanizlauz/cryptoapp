import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { urlResetPassword } from '../endpoints'

export default function ConfirmEmail() {
    const { email } = useParams()
    useEffect(() => {
        loadData();
        //eslint-disable-next-line
    }, [])
    const loadData = async () => {
        await axios.post(`${urlResetPassword}/${email}`)
    }
    return (
        <section className="h-100 bg-dark">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card card-registration my-4 align-items-center">
                            {/* <div className="row g-0"> */}
                                <div className="col-xl-6">
                                    <div className="card-body p-md-5 text-black d-flex flex-column align-items-center">
                                        <h3 className="mb-5 text-dark">Email successfully verified </h3>
                                        <img src="https://www.nicepng.com/png/detail/73-730077_verify-users-via-e-mail-verified-user.png" alt="loader" />
                                        <Link to="/login"><h4 className="mb-5 text-primary">back to login</h4></Link>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
