import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound () {
    return (
        <>
            <div className="container-fluid">
                <div className="text-center">
                    <div className="error mx-auto">404</div>
                    <p className="lead text-gray-800 mb-5">Page Not Found</p>
                    <p className="text-gray-500 mb-0">Oops! We can't find the page you are looking for.</p>
                    <Link className="nav-link collapsed" to="/dashboard" >← Back to Dashboard</Link>
                </div>
            </div>

        </>
    )
}
