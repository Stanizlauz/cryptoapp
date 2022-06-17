import React from "react";
import Authorize from "../../Auth/Authorize";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const myFunc = () => {
    let tog = document.getElementById("accordionSidebar");
    if (!tog?.classList.contains("toggled")) {
      tog?.classList.add("toggled");
    } else {
      tog?.classList.remove("toggled");
    }
  };

  return (
    <>
      {/* Sidebar */}
      <ul
        className="navbar-nav text-dark bg-gradient-light sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">

            {/* <i className="fas fa-laugh-wink text-dark" /> */}
          </div>
          <img src="img/logo.png" alt="Brand" style={{ width: "120px" }} />

          {/* <div className="sidebar-brand-text mx-3 text-dark">Admin</div> */}
        </a>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt text-dark" />
            <span className="text-dark">Home</span>
          </Link>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}

        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/dashboard">
            <i className="fas fa-fw fa-cog text-dark" />
            <span className="text-dark">Dashboard</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <Authorize
          notAuthorized={
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/userprofile">
                  <i className="fas fa-fw fa-chart-area text-dark" />
                  <span className="text-dark">Profile</span>
                </Link>
              </li>
              <hr className="sidebar-divider" />
            </>
          }
          roles="Admin"
        />

        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/plans">
            <i className="fas fa-fw fa-wrench text-dark" />
            <span className="text-dark">Plans</span>
          </Link>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/transactions">
            <i className="fas fa-fw fa-folder text-dark" />
            <span className="text-dark">Transactions</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        {/* Nav Item - Charts */}
        <li className="nav-item">
          <Link className="nav-link" to="/deposit">
            <i className="fas fa-fw fa-chart-area text-dark" />
            <span className="text-dark">Deposit</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        {/* Nav Item - Charts */}
        <Authorize
          authorize={
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  <i className="fas fa-fw fa-chart-area text-dark" />
                  <span className="text-dark">Users</span>
                </Link>
              </li>
              <hr className="sidebar-divider" />
              <li className="nav-item">
                <Link className="nav-link" to="/admin/wallet">
                  <i className="fas fa-fw fa-chart-area text-dark" />
                  <span className="text-dark">Admin Wallet</span>
                </Link>
              </li>
              <hr className="sidebar-divider" />
            </>
          }
          roles="Admin"
        />
        {/* Nav Item - Tables */}
        <Authorize
          notAuthorized={
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/withdraw">
                  <i className="fas fa-fw fa-table text-dark" />
                  <span className="text-dark">Withdraw</span>
                </Link>
              </li>
              {/* Divider */}
              <hr className="sidebar-divider d-none d-md-block" />
            </>
          }
          roles="Admin"
        />

        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0-offcanvas"
            onClick={myFunc}
            id="sidebarToggle"
            type="button"
            data-toggle="offcanvas"
          />
        </div>
      </ul>

      {/* End of Sidebar */}
    </>
  );
}
