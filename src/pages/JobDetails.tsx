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
        <div className="container mx-auto rounded-lg bg-white py-6 px-4 md:py-14 my-5 grid">
            <div className="md:min-w-fit">
                <header className=" grid md:grid-cols-2 md:border-b-2 md:pb-2">
                    <div className="border-b-2 mb-6 md:border-b-0 md:mb-0">
                        <h1 className="font-bold text-tx28 tracking-wide text-dark mb-3 md:mb-0">
                            Job Details
                        </h1>
                    </div>
                    <div className="flex gap-9 md:gap-6">
                        <div className="flex gap-3 md:gap-2 items-center">
                            <BookmarkIcon className="hidden md:block w-8" />
                            <EmptyStarIcon className="block md:hidden w-5" />
                            <p className="text-star md:text-dark opacity-82 md:opacity-100">
                                Save to my list
                            </p>
                        </div>
                        <div className="flex gap-10 md:gap-15 items-center">
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
