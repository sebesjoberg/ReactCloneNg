import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function NationPage() {
  let { nation } = useParams();
  console.log(nation);
  return (
    <div>
      <NavBar />
      hi {nation}
    </div>
  );
}

export default NationPage;
