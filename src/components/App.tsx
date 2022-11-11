import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import JobBoard from "../pages/JobBoard";
import JobDetails from "../pages/JobDetails";

function App() {
    return (
        <Routes>
            <Route>
                <Route index element={<JobBoard />} />
                <Route path="jobBoard/:id" element={<JobDetails />}></Route>
            </Route>
        </Routes>
    );
}

export default App;
