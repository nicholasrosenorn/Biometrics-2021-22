import React, { useState } from "react";
import './CreateExp.scss';
import Steps from "./components/Steps";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


function CreateExp() {
  const [step, setStep] = useState("")


  //function handleChange(e) {
  //  e.preventDefault();
  //  setStep(e.target.value)
  //  alert("ye")
  //}

  return (
    <div>
      <header className="flex-row">
          <h3>
              <IoIosArrowBack size={"1.5rem"} /> Back to Home
          </h3>

          <img
              src="https://www.merck.com/wp-content/themes/mhh-merck-mco-theme/images/site-logo.svg"
              alt="Merck logo"
          />
      </header>
      <div className="Create">
        <h2 className="label__lg">
          Create a new Experiment
        </h2>
        <h3 className="label">
          Enter Next Step
        </h3>
        <div className="flexbox-container-main">
          <input
            type="text"
            id="question-input"
            className="input input__lg"
            value={step}
            name="text"
            autoComplete="off"
            //onChange={handleChange}
          />
          <button type="submit" className="btn">
            Add
          </button>
        </div>
        <div className="StepDiv">
          <Steps/>
          <Steps/>
          <Steps/>
          <Steps/>
        </div>
      </div>
    </div>
  );
}

export default CreateExp;
