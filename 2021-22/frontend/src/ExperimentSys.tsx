import React, { useState } from "react";
import "./ExperimentSys.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import instructions from "./instructions.json";
import Modal from "react-modal";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { ListenOptions } from "net";

Modal.setAppElement("#root");

function App() {
    const [instructionNumber, setInstructionNumber] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const commands = [
        {
            command: "next",
            callback: () => {
                console.log("next");
                if (showModal === false) {
                    if (instructionNumber < sorted_instructions.length - 1) {
                        setShowModal(true);
                    }
                } else {
                    setShowModal(false);
                    setInstructionNumber(instructionNumber + 1);
                }
            },
        },
        {
            command: "back",
            callback: () => {
                console.log("back");
                if (showModal === false) {
                    if (instructionNumber > 0) {
                        setInstructionNumber(instructionNumber - 1);
                    }
                } else {
                    setShowModal(false);
                }
            },
        },
    ];

    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
        useSpeechRecognition({ commands });

    SpeechRecognition.startListening({ continuous: true });

    const raw_data = instructions.instructions;
    let sorted_instructions = [...raw_data]
        .sort((a, b) => a.number - b.number)
        .map((val) => val.instruction);

    return (
        <>
            {browserSupportsSpeechRecognition ? (
                <div id="main-screen">
                    {/* <>{transcript}</> */}
                    <header>
                        <h3>
                            <IoIosArrowBack size={"1.5rem"} /> Back to experiements
                        </h3>
                        <img
                            src="https://www.merck.com/wp-content/themes/mhh-merck-mco-theme/images/site-logo.svg"
                            alt="Merck logo"
                        />
                    </header>
                    <main id="main-screen-content">
                        <h1>{sorted_instructions[instructionNumber]}</h1>
                    </main>
                    <footer id="main-screen-footer">
                        {instructionNumber > 0 ? (
                            <IoIosArrowBack
                                onClick={() => {
                                    setInstructionNumber(
                                        (instructionNumber) => instructionNumber - 1
                                    );
                                }}
                                size={"5em"}
                            />
                        ) : (
                            <IoIosArrowBack color="grey" size={"5em"} />
                        )}

                        {instructionNumber < sorted_instructions.length - 1 ? (
                            <IoIosArrowForward
                                onClick={() => {
                                    setShowModal(true);
                                }}
                                size={"5em"}
                            />
                        ) : (
                            <IoIosArrowForward color="grey" size={"5em"} />
                        )}
                    </footer>
                    <Modal isOpen={showModal} id="modal">
                        <h1>Confirm that you have completed the instruction</h1>
                        <div id="buttons">
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                }}
                            >
                                Go Back
                            </button>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setInstructionNumber(instructionNumber + 1);
                                }}
                                id="continue-button"
                            >
                                Continue
                            </button>
                        </div>
                    </Modal>
                </div>
            ) : (
                <span>Browser doesn't support speech recognition.</span>
            )}
        </>
    );
}

export default App;
