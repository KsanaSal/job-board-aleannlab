import axios from "axios";
import { useEffect, useState } from "react";
import { JobBoardList } from "../components/JobBoardList";
import { Pagination } from "../components/Pagination";
import { Jobs } from "../data/data";

const JobBoard = () => {
    const [jobs, setJobs] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(5);

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

    const idexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = idexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, idexOfLastJob);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <>
            <JobBoardList jobList={currentJobs} loading={loading} />
            <Pagination
                jobsPerPage={jobsPerPage}
                totalJobs={jobs.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </>
    );
};

export default JobBoard;
