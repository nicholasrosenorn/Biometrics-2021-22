import React from "react";
import { Route, Routes } from "react-router-dom";
import ExperimentSys from "./ExperimentSys";
import CreateExp from "./CreateExp";
import Home from "./Home"
//<ExperimentSys />
//<CreateExp />

export default () => {
    return (
        <Routes>
            {/* @frontend-team add your routes here */}
            <Route path=":experimentId" element={<ExperimentSys />}>
                {/* <Route path="new" element={} /> */}
            </Route>
            <Route path="/" element={<Home />}>
                {/* <Route path="new" element={} /> */}
            </Route>
            <Route path="create" element={<CreateExp />}>
                {/* <Route path="new" element={} /> */}
            </Route>
        </Routes>
    );
};
