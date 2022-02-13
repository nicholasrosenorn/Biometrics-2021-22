import React from "react";
import { Route, Routes } from "react-router-dom";
import ExperimentSys from "./ExperimentSys";

export default () => {
    return (
        <Routes>
            {/* @frontend-team add your routes here */}
            <Route path=":experimentId" element={<ExperimentSys />}>
                {/* <Route path="new" element={} /> */}
            </Route>
        </Routes>
    );
};
