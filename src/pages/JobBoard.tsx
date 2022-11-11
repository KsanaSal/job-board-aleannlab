import { JobBoardList } from "../components/JobBoardList";
import { Jobs } from "../data/data";

const JobBoard = () => {
    return (
        <JobBoardList jobList={ Jobs} />
)
}

export default JobBoard;