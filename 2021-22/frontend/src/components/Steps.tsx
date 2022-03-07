import React, { useEffect, useState } from "react";
import './Steps.scss';
import Recording from "./Recording";

function Steps() {

  return (
    <div className="box">
      <strong>
        Preheat the oven to 450 degrees Farenheit.
      </strong>
      <div className="flexbox-pillar">
        <Recording/>
        <button className="btn btn__add">
          Add Recording Prompt
        </button>
        <button className="btn btn__add">
          Edit Step
        </button>
        <button className="btn btn__add">
          Delete Step
        </button>
      </div>
    </div>

  );


}

export default Steps;
