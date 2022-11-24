import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Events from "../components/Events";
class EventPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <Events />
      </div>
    );
  }
}

export default EventPage;
