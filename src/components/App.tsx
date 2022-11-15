import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import JobBoard from "../pages/JobBoard";
import JobDetails from "../pages/JobDetails";
import { Jobs } from "../data/data";
import { Job } from "../models/job";

function App() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://api.json-generator.com/templates/ZM1r0eic3XEy/data`,
                    {
                        headers: {
                            Authorization:
                                "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu",
                        },
                    }
                );

                setJobs(response.data);
                setLoading(false);
            } catch (error) {
                setJobs(Jobs);
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    return (
        <Routes>
            <Route>
                <Route
                    path="/"
                    element={<JobBoard loading={loading} jobs={jobs} />}
                />
                <Route
                    path="jobBoard/:id"
                    element={<JobDetails jobs={jobs} />}
                ></Route>
            </Route>
        </Routes>
    );
}

export default App;
