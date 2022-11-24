import React, { Component } from "react";
class Event extends Component {
  state = this.props.event;
  timeParser = () => {
    return this.state.starttime + "-" + this.state.endtime;
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
