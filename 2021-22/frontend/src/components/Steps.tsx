import React, { useEffect, useState } from "react";
import './Steps.scss';


function Steps() {

  return (
    <div className="box">
      <strong>
        Preheat the oven to 450 degrees Farenheit.
      </strong>
      <div className="flexbox-pillar">
        <label className="recording">
          Record [Percentage] Reading of [Humidity]
        </label>
        <label className="recording">
          Record [Celcius] Reading of [Oven Temperature]
        </label>
        <button className="btn btn__add">
          Add Recording Prompt
        </button>
      </div>
    </div>

  );


}

export default Steps;
