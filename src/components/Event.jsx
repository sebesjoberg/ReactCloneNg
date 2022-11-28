import React, { useState } from "react";
import { format, formatRelative, parseISO } from "date-fns";
import { enGB, sv } from "date-fns/locale";
const Event = (props) => {
  const [state, setState] = useState(props.event);
  const timeParser = () => {
    let eventstart = new Date(parseISO(state.starttime));
    let eventend = new Date(parseISO(state.endtime));
    const today = new Date();
    console.log(today);
    const start = formatRelative(eventstart, today, {
      locale: enGB,
    });
    const end = formatRelative(eventend, today, {
      locale: enGB,
    });

    return start + "-" + end.slice(-5);
  };

  return (
    <div className="col d-flex">
      <div
        onClick={() => props.click(state.id)}
        className="card shadow-sm d-flex align-items-center justify-content-center text-center flex-fill border border-dark"
      >
        <img className="img-fluid p-3" src={state.logo} alt="..." />

        <div className="card-body">
          <p className="card-text">{state.title}</p>
          <p className="card-text">{timeParser()}</p>
        </div>
      </div>
    </div>
  );
};

export default Event;
