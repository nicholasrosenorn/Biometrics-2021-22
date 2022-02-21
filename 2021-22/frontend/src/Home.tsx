import React, { useEffect, useState } from 'react';
import './Home.scss'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import HomeExpView from "./components/HomeExpView";

//this function creates the home page
function App() {

  // just a comment
  const [experiments, modifyExperiments] = useState([])

  //useEffect(() => {
  //  fetch("/api/qurl").then(data => data.json()).then(data => modifyExperiments(data))
  //}, [])

  //const updateList = (experiments) => {
  //  modifyQuestions(experiments)
  //}

  //use this below code to get all ExperimentS
  //<NewQuestion updateList={updateList} />

  return (
    <>
      <header className="flex-row">
          <h3>
              <IoIosArrowBack size={"1.5rem"} /> Back to Home
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

          <button className="btn btn__lg">
            Create New Experiment
          </button>
        </div>
        <ul
          role="list"
          className="experiment-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
            <HomeExpView />
            <HomeExpView />
        </ul>
      </div>
    </>
  )
}


export default App;
