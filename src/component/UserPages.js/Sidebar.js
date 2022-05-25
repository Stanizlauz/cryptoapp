import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">Admin <sup>Yeah</sup></div>
                </a>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Home</span></a>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Heading */}

                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/dashboard" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <hr className="sidebar-divider" />
                {/* Nav Item - Utilities Collapse Menu */}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/plans" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench" />
                        <span>Plans</span>
                    </Link>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/transactions" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder" />
                        <span>Transactions</span>
                    </Link>
                </li>
                <hr className="sidebar-divider" />
                {/* Nav Item - Charts */}
                <li className="nav-item">
                    <Link className="nav-link" to="/deposit">
                        <i className="fas fa-fw fa-chart-area" />
                        <span>Deposit</span></Link>
                </li>
                <hr className="sidebar-divider" />
                {/* Nav Item - Charts */}
                <li className="nav-item">
                    <Link className="nav-link" to="/userprofile">
                        <i className="fas fa-fw fa-chart-area" />
                        <span>User</span></Link>
                </li>
                <hr className="sidebar-divider" />

                {/* Nav Item - Tables */}
                <li className="nav-item">
                    <Link className="nav-link" to="/withdraw">
                        <i className="fas fa-fw fa-table" />
                        <span>Withdraw</span></Link>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />
                {/* Sidebar Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" />
                </div>
            </ul>
            {/* End of Sidebar */}
            
        </>
    )
}
