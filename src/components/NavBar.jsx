import React, { Component } from "react";
import logo from "../assets/images/logo.png";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light ml-auto">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img src={logo} alt="Nationsguiden" width={225} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Evenemang
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Evenemang2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Evenemang3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
