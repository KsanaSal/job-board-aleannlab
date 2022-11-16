import { useParams } from "react-router-dom";
import { Job } from "../models/job";
import { ReactComponent as ShareIcon } from "../assets/Share-icon.svg";
import { ReactComponent as BookmarkIcon } from "../assets/Bookmark.svg";
import { ReactComponent as EmptyStarIcon } from "../assets/EmptyStar.svg";
import moment from "moment";

const JobDetails = ({ jobs }: { jobs: Job[] }) => {
    console.log(jobs);
    const { id } = useParams();
    const job: Job = jobs.filter((data) => data.id === id)[0];
    console.log(jobs.filter((data) => data.id === id));
    console.log(job);
    return (
        <>
            {job && (
                <div className="container mx-auto rounded-lg bg-white py-6 px-4 md:py-14 my-5 flex flex-col md:flex-row gap-20 justify-center ">
                    <div className="md:min-w-fit">
                        <header className=" grid md:grid-cols-2 md:border-b-2 md:pb-2 md:mb-10">
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
                        <button
                            className="hidden md:block py-18 px-30 bg-dark-middle-blue rounded-lg text-white uppercase font-semibold text-xs"
                            type="button"
                        >
                            Aplly now
                        </button>
                        <div className="grid grid-cols-2">
                            <p className="font-bold text-xl tracking-tight text-dark col-start-1 col-end-3 order-1 mb-1">
                                {job.title}
                            </p>
                            <div className=" tracking-tight order-3 text-right">
                                <p className="text-star opacity-82 text-lg">
                                    Brutto, per year
                                </p>
                                <span className="font-bold text-tx20 text-dark">
                                    {job.salary.replaceAll("k", " 000")}
                                </span>
                            </div>
                            <p className="text-sm text-star opacity-60 order-2">
                                Posted{" "}
                                {moment.utc(job.createdAt).local().fromNow()}
                            </p>
                        </div>
                    </div>
                    <div>mapa</div>
                </div>
            )}
        </>
    );
};

export default JobDetails;
