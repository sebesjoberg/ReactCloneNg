import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Events from "../components/Events";
import Filter from "../components/Filter";
function StartPage() {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    console.log(
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
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
      console.log("number1");
      var myDate = new Date(date.valueOf());
      myDate.setDate(myDate.getDate() + x);
      setDate(myDate);
    }
  };

  return (
    <div>
      <NavBar />
      <Filter date={date} changeDate={changeDate} />
      <Events events={events} />
    </div>
  );
}

export default StartPage;
