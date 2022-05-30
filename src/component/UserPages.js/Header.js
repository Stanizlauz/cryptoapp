import React from "react";
import TradingView from "../TradingView";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-gradient-light topbar mb-4 static-top shadow">
        <div class="col-sm-11 text-right">
          <ul id="mainmenu" class="nav navbar-nav nav-menu">
            <li class="active nav-item dropdown no-arrow">
              {" "}
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <span className="mr-2 d-none d-lg-inline text-dark-600 small">
                  Cammilarhi
                </span>
                <img
                  className="img-profile rounded-circle"
                  src="img/undraw_profile.svg"
                />
              </a>
              <ul>
                <li>
                  <a href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" data-toggle="modal" data-target="#logoutModal">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
