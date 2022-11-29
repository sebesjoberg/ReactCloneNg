import React, { useEffect, useState } from "react";
import Event from "./Event";
const Events = () => {
  useEffect(() => {
    fetch("https://backendnationsinn.herokuapp.com/api/list/")
      .then((respone) => respone.json())
      .then((data) => setState(data));
  }, []);
  const [state, setState] = useState([]);
  const onClick = (id) => {
    console.log(id); //reroute here
  };

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          {state.map((event) => (
            <Event
              key={event.id}
              event={event}
              click={onClick}
              style={{ height: "300px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
