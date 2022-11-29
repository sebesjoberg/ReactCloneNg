import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { withTranslation } from "react-i18next";
import { format, formatRelative, parseISO } from "date-fns";
import { enGB, sv } from "date-fns/locale";
const Filter = (props) => {
  const { t, i18n } = props;

  const dateParser = () => {
    const event = props.date;
    const today = new Date();
    const options = "EEE d LLL";
    var lang = enGB;

    if (i18n.language === "sv") {
      lang = sv;
    }
    var nextWeek = Date.parse(
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7)
    );

    if (nextWeek < Date.parse(event)) {
      return formatRelative(event, today, {
        locale: lang,
      }).slice(0, -9);
    } else {
      return format(event, options, { locale: lang });
    }
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
          <a
            className="btn btn-outline-secondary btn-light btn-lg mx-2"
            style={{ width: "250px" }}
          >
            {dateParser()}
          </a>
          <button
            className="btn btn-outline-secondary btn-light"
            onClick={() => props.changeDate(1)}
          >
            <AiOutlineRight />
          </button>
        </div>
        <div className="d-flex justify-content-center"></div>
      </header>
    </div>
  );
};
export default withTranslation()(Filter);
