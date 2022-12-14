import React, { useEffect, useState } from "react";
import Event from "./Event";

import { useNavigate } from "react-router-dom";
function Events(props) {
  const navigate = useNavigate();
  const onClick = (id) => {
    navigate("/event/" + id);
  };

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          {props.events.map((event) => (
            <Event
              key={event.id}
              event={event}
              click={onClick}
              style={{ height: "350px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
