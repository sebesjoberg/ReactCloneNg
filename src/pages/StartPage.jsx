import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Events from "../components/Events";
import Filter from "../components/Filter";
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
  useEffect(() => {
    fetch(
      "https://backendnationsinn.herokuapp.com/api/list/?starttime=" +
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getDate()
    )
      .then((respone) => respone.json())
      .then((data) => setEvents(data));
  }, [date]);
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
      <Filter date={date} changeDate={changeDate} />
      <Events events={events} />
    </div>
  );
}

export default StartPage;
