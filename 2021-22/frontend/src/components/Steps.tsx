import React, { useEffect, useState } from "react";
import './Steps.scss';


function Steps() {

  return (
    <div className="flexbox-pillar">
      <div className="flexbox-container">
        <label>
          Preheat the oven to 450 degrees Farenheit.
        </label>
        <button className="btn btn__primary btn__lg">
          Add Recording Prompt
        </button>
      </div>
      <label className="recording">
        Record [Farenheit] Reading of [Oven Temperature]
      </label>
      <label className="recording">
        Record [Celcius] Reading of [Oven Temperature]
      </label>
    </div>

  );


}

export default Steps;
