import React, { useEffect, useState } from 'react';
import './Home.scss'

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
      <div className="home stack-large">
        <h1>Dashboard</h1>

        <h2 id="list-heading">
          All Experiments
        </h2>
        <ul
          role="list"
          className="experiment-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
        </ul>
      </div>
    </>
  )
}


export default App;
