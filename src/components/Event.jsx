import React, { Component } from "react";
import { format, formatRelative, parseISO } from "date-fns";
import { enGB, sv } from "date-fns/locale";
class Event extends Component {
  state = this.props.event;
  timeParser = () => {
    let eventstart = new Date(parseISO(this.state.starttime));
    let eventend = new Date(parseISO(this.state.endtime));
    const today = new Date();
    const start = formatRelative(eventstart, today, {
      locale: enGB,
    });
    const end = formatRelative(eventend, today, {
      locale: enGB,
    });

    return start + "-" + end.slice(-5);
  };
  render() {
    return (
      <div className="col d-flex">
        <div
          onClick={() => this.props.click(this.state.id)}
          className="card shadow-sm d-flex align-items-center justify-content-center text-center flex-fill border border-dark"
        >
          <img className="img-fluid p-3" src={this.state.logo} alt="..." />

          <div className="card-body">
            <p className="card-text">{this.state.title}</p>
            <p className="card-text">{this.timeParser()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
