import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Events from "../components/Events";
import Filter from "../components/Filter";
const StartPage = () => {
  const [date, setDate] = useState(new Date());
  const changeDate = (x) => {
    if (typeof x === "number") {
      console.log("number1");
    }
  };

  return (
    <div>
      <NavBar />
      <Filter date={date} changeDate={changeDate} />
      <Events />
    </div>
  );
};

export default StartPage;
