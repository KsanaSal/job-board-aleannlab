import { useParams } from "react-router-dom";
import { Job } from "../models/job";

const JobDetails = ({ jobs }: { jobs: Job[] }) => {
    const { id } = useParams();
    return <div>{id}</div>;
};

export default JobDetails;
