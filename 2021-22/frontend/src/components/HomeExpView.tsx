import React, { useEffect, useState } from "react";
import './HomeExpView.scss';


function HomeExpView() {

  return (
    <div className="flexbox-pillar">
      <div className="flexbox-container">
        <label className="text_cntr">
          Experiment Title Here
        </label>
        <button className="btn btn_mini">
          Edit
        </button>
        <button className="btn btn_mini">
          Start
        </button>
      </div>
    </div>

  );


}

export default HomeExpView;
