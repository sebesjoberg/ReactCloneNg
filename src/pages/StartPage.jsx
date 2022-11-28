import React, { Component, useState } from "react";
import NavBar from "../components/NavBar";
import Events from "../components/Events";
const StartPage = () => {
  const [state, setState] = useState();

  return (
    <div>
      <NavBar />
      <Events />
    </div>
  );
};

export default StartPage;
