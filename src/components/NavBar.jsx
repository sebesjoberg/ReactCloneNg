import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function NavBar(props) {
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [nations] = useState([
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
  ]);

  const { t, i18n } = props;
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary btn-light btn-lg dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {t("language")}
          </button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li
              className="dropdown-item cursor-pointer"
              onClick={() => handleLanguageChange("sv")}
            >
              {t("swedish")}
            </li>
            <li
              className="dropdown-item cursor-pointer"
              onClick={() => handleLanguageChange("en")}
            >
              {t("english")}
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-light ml-auto mx-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
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
                <Link className="nav-link active" aria-current="page" to="/">
                  {t("events")}
                </Link>
              </li>
              <li className="nav-item dropdown px-3">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("nations")}
                </Link>
                <ul className="dropdown-menu">
                  {nations.map((nation) => (
                    <li key={nation}>
                      <Link className="dropdown-item" to={"/nation/" + nation}>
                        {nation}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item px-3">
                <Link className="nav-link active" aria-current="page" to="/">
                  {t("guestcard")}
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link active" aria-current="page" to="/">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withTranslation()(NavBar);
