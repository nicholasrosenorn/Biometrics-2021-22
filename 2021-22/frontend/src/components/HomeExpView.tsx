import React, { useEffect, useState } from "react";
import './HomeExpView.scss';
import {
  Link
} from "react-router-dom";

function HomeExpView() {

  return (
    <div className="flexbox-pillar">
      <div className="flexbox-container">
        <label className="text_cntr">
          Experiment Title Here
        </label>
        <Link to="/create" style={{ color: 'inherit', textDecoration: 'none' }}>
        <button className="btn btn_mini">
          Edit
        </button>
        </Link>
        <Link to="/exp" style={{ color: 'inherit', textDecoration: 'none' }}>
        <button className="btn btn_mini">
          Start
        </button>
        </Link>
        <button className="btn btn_warn">
          Delete
        </button>
      </div>
    </div>

  );


}

export default HomeExpView;
