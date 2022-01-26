import React, { useState } from "react";
import "./App.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import instructions from "./instructions.json";

function App() {
    const [instructionNumber, setInstructionNumber] = useState(0);

    const raw_data = instructions.instructions;
    let sorted_instructions = [...raw_data]
        .sort((a, b) => a.number - b.number)
        .map((val) => val.instruction);

    return (
        <div id="main-screen">
            <header>
                <h3>
                    <IoIosArrowBack /> Back to experiements
                </h3>
            </header>
            <main id="main-screen-content">
                <h1>{sorted_instructions[instructionNumber]}</h1>
            </main>
            <footer id="main-screen-footer">
                {instructionNumber > 0 ? (
                    <IoIosArrowBack
                        onClick={() => {
                            setInstructionNumber(instructionNumber - 1);
                        }}
                        size={"5em"}
                    />
                ) : (
                    <IoIosArrowBack color="grey" size={"5em"} />
                )}

                {instructionNumber < sorted_instructions.length - 1 ? (
                    <IoIosArrowForward
                        onClick={() => {
                            setInstructionNumber(instructionNumber + 1);
                        }}
                        size={"5em"}
                    />
                ) : (
                    <IoIosArrowForward color="grey" size={"5em"} />
                )}
            </footer>
        </div>
    );
}

export default App;
