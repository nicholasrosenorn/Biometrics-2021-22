import React from "react";
import "./App.css";
import { IoIosArrowBack } from "react-icons/io";
import instructions from "./instructions.json";

function App() {
    const raw_data = instructions.instructions;
    let sorted_instructions = [...raw_data]
        .sort((a, b) => a.number - b.number)
        .map((val) => val.instruction);
    return (
        <>
            <header>
                <IoIosArrowBack />
            </header>
            <main></main>
        </>
    );
}

export default App;
