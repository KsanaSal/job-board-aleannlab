import { JobBoardList } from "../components/JobBoardList";
import { Pagination } from "../components/Pagination";
import { Jobs } from "../data/data";

const JobBoard = () => {
    return (
        <>
            <JobBoardList jobList={Jobs} />
            <Pagination />
        </>
    );
};

export default JobBoard;
