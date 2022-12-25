import React, { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { withTranslation } from "react-i18next";
import { format, formatRelative, parseISO } from "date-fns";
import DatePicker from "react-datepicker";
import { enGB, sv } from "date-fns/locale";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
function Filter(props) {
  const { t, i18n } = props;

  const handleDropClick = (e) => {
    e.stopPropagation();
  };
  const handleNationClick = (nation) => {
    document.getElementById(nation).click();
  };
  const dateParser = (event) => {
    const today = new Date();
    const options = "EEE d LLL";
    var lang = enGB;

    if (i18n.language === "sv") {
      lang = sv;
    }
    var nextWeek = Date.parse(
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7)
    );

    if (nextWeek > Date.parse(event)) {
      return formatRelative(event, today, {
        locale: lang,
      }).slice(0, -9);
    }
    return format(event, options, { locale: lang });
  };
  return (
    <div className="container">
      <header className="d-flex justify-content-evenly py-3">
        <div className="d-flex justify-content-start flex-fill">
          <button
            className="btn btn-outline-secondary btn-light"
            onClick={() => props.changeDate(-1)}
          >
            <AiOutlineLeft />
          </button>
          <div style={{ width: "250px" }} className="mx-2">
            <DatePicker
              selected={props.date}
              onChange={(date) => props.changeDate(date)}
              customInput={
                <a
                  className="btn btn-outline-secondary btn-light btn-lg"
                  style={{ width: "250px" }}
                >
                  {dateParser(props.date)}
                </a>
              }
            />
          </div>

          <button
            className="btn btn-outline-secondary btn-light"
            onClick={() => props.changeDate(1)}
          >
            <AiOutlineRight />
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary btn-light btn-lg dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {t("nations")}
            </button>

            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton1"
              onClick={handleDropClick}
            >
              {Object.keys(props.nations).map((nation) => (
                <div
                  key={nation}
                  onClick={() => handleNationClick(nation)}
                  className="dropdown-item form-check form-check-inline d-flex justify-content-start cursor-pointer"
                >
                  <label
                    htmlFor="form-check-label"
                    style={{ width: "250px" }}
                    className="cursor-pointer"
                  >
                    {nation}
                  </label>

                  <input
                    className="form-check-input cursor-pointer"
                    type="checkbox"
                    value=""
                    checked={props.nations[nation]}
                    onChange={props.handleChange}
                    onClick={handleDropClick}
                    id={nation}
                  />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
export default withTranslation()(Filter);
