import React, { useState } from "react";
import { withTranslation } from "react-i18next";
function SoloEvent(props) {
  const { t, i18n } = props;
  const [state] = useState(props.event);

  return (
    <div className="container h-75">
      <div className="row h-100">
        <div className="col d-flex align-items-center">
          <img
            className="img-fluid"
            src={state.logo}
            alt="..."
            style={{
              height: "60%",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="col-6 row">
          <div>{state.title}</div>
          <div>{state.nation}</div>
          <div>
            {state.starttime}-{state.endtime}
          </div>
          <div>{state.description}</div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(SoloEvent);
