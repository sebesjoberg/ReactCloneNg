import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { fetchEvent } from "../assets/functions/fetchers";
import SoloEvent from "../components/SoloEvent";
function EventPage() {
  let { id } = useParams();
  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetchEvent(id).then((data) => {
      setEvent(data[0]);
    });
  }, [id]);
  return (
    <div className="vh-100">
      <NavBar />
      <SoloEvent key={event.id} event={event} />
    </div>
  );
}

export default EventPage;
