import React, { useState } from "react";
import { format, formatRelative, parseISO } from "date-fns";
import { enGB, sv } from "date-fns/locale";
import { withTranslation } from "react-i18next";
function Event(props) {
  const { t, i18n } = props;
  const [state, setState] = useState(props.event);
  const timeParser = () => {
    let eventstart = new Date(parseISO(state.starttime));
    let eventend = new Date(parseISO(state.endtime));
    const today = new Date();
    const options = "d LLL p";
    var lang = enGB;

    if (i18n.language === "sv") {
      lang = sv;
    }
    var nextWeek = Date.parse(
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7)
    );
    if (nextWeek < Date.parse(state.starttime)) {
      const start = formatRelative(eventstart, today, {
        locale: lang,
      });
      const end = formatRelative(eventend, today, {
        locale: lang,
      });

      return start + "-" + end.slice(-5);
    }
    return (
      format(eventstart, "EEE " + options, { locale: lang }) +
      "-" +
      format(eventend, options, { locale: lang })
    );
  };

  return (
    <div className="col d-flex" style={props.style}>
      <div
        onClick={() => props.click(state.id)}
        className="card shadow-sm d-flex text-center border border-dark flex-fill"
      >
        <img
          className="p-3 card-img-top image-fluid"
          src={state.logo}
          alt="..."
          style={{
            height: "60%",
            width: "auto",
            objectFit: "contain",
          }}
        />

        <div className="card-body">
          <p className="card-text">{state.title}</p>
          <p className="card-text">{timeParser()}</p>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Event);
