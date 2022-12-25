import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function EventPage() {
  let { id } = useParams();
  console.log(id);
  return <div>hi {id}</div>;
}

export default EventPage;
