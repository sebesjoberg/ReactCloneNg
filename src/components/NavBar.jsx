import React, { Component } from "react";
import logo from "../assets/images/logo.png";
class NavBar extends Component {
  state = {
    nations: [
      "Stockholms nation",
      "Uplands nation",
      "Gästrike-Hälsinge nation",
      "Östgöta nation",
      "Västgöta nation",
      "Södermanlands-Nerikes nation",
      "Västmanlands-Dala nation",
      "Smålands nation",
      "Göteborgs nation",
      "Kalmar nation",
      "Värmlands nation",
      "Norrlands nation",
      "Gotlands nation",
    ],
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light ml-auto mx-5">
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
          <div
            className="collapse navbar-collapse fs-4"
            id="navbarSupportedContent"
          >
            <ul className="nav navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item px-3">
                <a className="nav-link active" aria-current="page" href="/#">
                  Evenemang
                </a>
              </li>
              <li className="nav-item dropdown px-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nationer
                </a>
                <ul className="dropdown-menu">
                  {this.state.nations.map((nation) => (
                    <li key={nation}>
                      <a
                        className="dropdown-item"
                        href={"/nation?nation=" + nation}
                      >
                        {nation}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item px-3">
                <a className="nav-link active" aria-current="page" href="/#">
                  Gästkort
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link active" aria-current="page" href="/#">
                  Kontakt
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
