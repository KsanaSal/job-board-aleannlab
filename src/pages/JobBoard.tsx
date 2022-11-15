import { useState } from "react";
import { JobBoardList } from "../components/JobBoardList";
import { Pagination } from "../components/Pagination";
import { Job } from "../models/job";

const JobBoard = ({ jobs, loading }: { jobs: Job[]; loading: boolean }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(5);

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
