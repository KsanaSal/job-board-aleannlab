import { useParams } from "react-router-dom";
import { Job } from "../models/job";
import { ReactComponent as ShareIcon } from "../assets/Share-icon.svg";
import { ReactComponent as BookmarkIcon } from "../assets/Bookmark.svg";
import { ReactComponent as EmptyStarIcon } from "../assets/EmptyStar.svg";

const JobDetails = ({ jobs }: { jobs: Job[] }) => {
    const { id } = useParams();
    const job: Job = jobs.filter((data) => data.id === id)[0];
    console.log(jobs.filter((data) => data.id === id));
    console.log(job);
    return (
        <div className="py-6 md:py-14 grid place-content-center">
            <div>
                <header>
                    <h1 className="font-bold text-tx28 tracking-wide text-dark">
                        Job Details
                    </h1>
                    <div>
                        <div>
                            <BookmarkIcon className="hidden md:block w-8" />
                            <EmptyStarIcon className="block md:hidden w-5" />
                            <p className="text-star md:text-dark opacity-82 md:opacity-100">
                                Save to my list
                            </p>
                        </div>
                        <div>
                            <ShareIcon className="text-star opacity-80  md:opacity-100 md:text-dark-middle-gray" />
                            <p className="text-star md:text-dark opacity-82 md:opacity-100">
                                Share
                            </p>
                        </div>
                    </div>
                </header>
            </div>
            <div>mapa</div>
        </div>
    );
};

export default JobDetails;
