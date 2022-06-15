import React from "react";
import { Link } from "react-router-dom";
import Authorize from "../../Auth/Authorize";
import { getToken, logOut } from "../../Auth/HandleJWT";

export default function Header() {
  const myFunc = () => {
    let tog = document.getElementById("accordionSidebar")
    if (!tog?.classList.contains('toggled')) {
      tog?.classList.add("toggled")
    } else {
      tog?.classList.remove("toggled")
    }
  };
  const userAuth = getToken();
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-gradient-light topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          onClick={myFunc}
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars" style={{ color: 'black' }} />
        </button>

        <div class="col-sm-11 text-right">
          <ul id="mainmenu" class="nav navbar-nav nav-menu">
            <li class="active nav-item dropdown no-arrow">
              <h4
                className="nav-link dropdown-toggle"
                // href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <span className="mr-2 d-none d-lg-inline text-dark-600 small" style={{ color: 'black' }}>
                  {userAuth?.name}
                </span>
                <img
                  className="img-profile rounded-circle"
                  src={userAuth?.picture}
                  alt=""
                />
              </h4>
              <ul>
                <Authorize
                  notAuthorized={
                    <>
                      <li>
                        <Link className="nav-link" to="/userprofile">
                          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                          Profile
                        </Link>
                      </li>
                    </>
                  }
                  roles="Admin"
                />
                <li>
                  <a href="/" onClick={() => logOut()}>
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
