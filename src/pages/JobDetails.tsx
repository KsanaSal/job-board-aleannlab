import { useParams } from "react-router-dom";

const JobDetails = ({ jobs }: any) => {
    const { id } = useParams();
    return <div>{id}</div>;
};

export default JobDetails;
