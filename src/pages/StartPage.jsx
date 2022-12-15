import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Events from "../components/Events";
import Filter from "../components/Filter";
import { fetchDate, fetchDateNation } from "../assets/functions/fetchers";
function StartPage() {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());
  const [nations, setNations] = useState({
    "Stockholms nation": false,
    "Uplands nation": false,
    "Gästrike-Hälsinge nation": false,
    "Östgöta nation": false,
    "Västgöta nation": false,
    "Södermanlands-Nerikes nation": false,
    "Västmanlands-Dala nation": false,
    "Smålands nation": false,
    "Göteborgs nation": false,
    "Kalmar nation": false,
    "Värmlands nation": false,
    "Norrlands nation": false,
    "Gotlands nation": false,
  });
  const handleChange = (event) => {
    setNations({
      ...nations,
      [event.target.id]: event.target.checked,
    });
  };
  useEffect(() => {
    const trueKeys = Object.entries(nations)
      .filter(([key, value]) => value)
      .map(([key, value]) => key);
    if (trueKeys.length === 0) {
      fetchDate(date).then((data) => {
        setEvents(data);
      });
    } else {
      fetchDateNation();
    }
  }, [date, nations]);
  const changeDate = (x) => {
    if (typeof x === "number") {
      var myDate = new Date(date.valueOf());
      myDate.setDate(myDate.getDate() + x);
      setDate(myDate);
    }
  };

  return (
    <div>
      <NavBar nations={Object.keys(nations)} />
      <Filter
        date={date}
        changeDate={changeDate}
        nations={nations}
        handleChange={handleChange}
      />
      <Events events={events} />
    </div>
  );
}

export default StartPage;
