import React, { useEffect, useState } from "react";
import TradingView from "../TradingView";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";
import { urlProfile } from "../../endpoints";


export default function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            await axios.get(urlProfile)
                .then(response => setUsers(response?.data));
        };
        loadUsers();
    }, [])

    return (
        <>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid"></div>
                        <TradingView />
                        <div className="card shadow mb-4 mx-2">
                            <div className="card-header py-3">
                                <h4 className="m-0 font-weight-bold text-dark">
                                    Users
                                </h4>
                            </div>
                            <div className="card-body bg-white">
                                <div className="table-responsive">
                                    <table className="table align-middle">
                                        <thead>
                                            <tr>
                                                <th className="text-dark">S/N</th>
                                                <th className="text-dark">Name</th>
                                                <th className="text-dark">Email</th>
                                                <th className="text-dark">Phone No.</th>
                                                <th className="text-dark">Gender</th>
                                                <th className="text-dark">Address</th>
                                                {/* <th className="text-dark">Actions</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users && users.length > 0
                                                && users?.map((tran, index) => (
                                                    <tr key={tran.id}>
                                                        <td className="text-dark">{index + 1}</td>
                                                        <td className="text-dark">{tran.firstName} {tran.lastName}</td>
                                                        <td className="text-dark">{tran.email}</td>
                                                        <td className="text-dark">{tran.phoneNo}</td>
                                                        <td className="text-dark">{tran.gender}</td>
                                                        <td className="text-dark">{tran.address}</td>
                                                        {/* <td className="text-dark">
                                                            <div className="d-flex justify-content-between">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-link btn-sm px-3 text-dark"
                                                                    data-ripple-color="dark"
                                                                >
                                                                    <i className="fas fa-bars text-dark" />
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-link btn-sm px-3 "
                                                                    data-ripple-color="dark"
                                                                >
                                                                    <i className="fas fa-times text-dark" />
                                                                </button>
                                                            </div>
                                                        </td> */}
                                                    </tr>
                                                ))}
                                            {users.length === 0 &&
                                                <p className="text-danger">No record found!!</p>}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
