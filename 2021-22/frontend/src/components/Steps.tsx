import React, { useEffect, useState } from "react";
import './Steps.scss';
import Modal from "react-modal";
import Recording from "./Recording";

function Steps() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="box">
      <strong>
        Preheat the oven to 450 degrees Farenheit.
      </strong>
      <div className="flexbox-pillar">
        <Recording/>
        <Recording/>
        <button className="btn_btn btn__add" onClick={() => {
            setShowModal(true);
        }}>
          Edit Step
        </button>
        <button className="btn_btn btn_del">
          Delete Step
        </button>
      </div>
      <Modal isOpen={showModal} id="modal">
          <h1>Edit Step</h1>
            <h2>Step:</h2>
            <input type="text" className="stepText" value={"Preheat the oven to 450 degrees Farenheit."} />
            <h2>Prompts:</h2>
            <input type="text" className="stepText" value={"Record [Percentage] Reading of [Humidity]"} />
            <input type="text" className="stepText" value={"Record [Percentage] Reading of [Humidity]"} />
          <div id="buttons">
              <button className="btn_btn btn_step"
                onClick={() => {
                  //just cerate a new textbox,,, dont save tho
                    alert("adding new prompt...")
                }}
              >
                Add Recording Prompt
              </button>
              <button className="btn_btn btn_step"
                  onClick={() => {
                      alert("saving changes...")
                  }}
              >
                  Save
              </button>
              <button className="btn_btn btn_step"
                  onClick={() => {
                      setShowModal(false);
                  }}
              >
                  Exit
              </button>
          </div>
      </Modal>
    </div>

  );


}

export default Steps;
