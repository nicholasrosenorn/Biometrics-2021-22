import React, { useEffect, useState } from 'react';
import './Home.scss'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import HomeExpView from "./components/HomeExpView";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

//this function creates the home page
function App() {

  // just a comment
  const [experiments, modifyExperiments] = useState([])
  const userName = "UserName"

  //useEffect(() => {
  //  fetch("/api/qurl").then(data => data.json()).then(data => modifyExperiments(data))
  //}, [])

  //const updateList = (experiments) => {
  //  modifyQuestions(experiments)
  //}

  //Welcome, {userName}

  //use this below code to get all ExperimentS
  //<NewQuestion updateList={updateList} />

  return (
    <>
      <header className="flex-row">
          <h3>

          </h3>

          <img
              src="https://www.merck.com/wp-content/themes/mhh-merck-mco-theme/images/site-logo.svg"
              alt="Merck logo"
          />
      </header>
      <div className="home stack-large">
        <h1>Dashboard</h1>

        <div className="flex">
          <h2 id="list-heading" className='space'>
            View All Experiments
          </h2>

          <div className="div-row">
            <strong>
              Create a New Experiment:
            </strong>

            <Link to="/create" style={{ color: 'inherit', textDecoration: 'none' }}>
              <button className="btn btn__lg">
                From Scratch
              </button>
            </Link>

            <Link to="/create" style={{ color: 'inherit', textDecoration: 'none' }}>
              <button className="btn btn__lg">
                From a Template
              </button>
            </Link>

          </div>
        </div>
        <div className="flexbox-column">
            <HomeExpView />
            <HomeExpView />
            <HomeExpView />
            <HomeExpView />
        </div>
      </div>
    </>
  )
}


export default App;
