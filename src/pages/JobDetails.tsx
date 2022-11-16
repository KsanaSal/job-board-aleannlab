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
    const description = job.description.split("\n").filter((e) => e.trim());
    console.log(jobs.filter((data) => data.id === id));

    console.log(job.description.split("\n").filter((e) => e.trim()));
    return (
        <>
            {job && (
                <div className="container mx-auto rounded-lg bg-white py-6 px-6 md:py-14 my-5 flex flex-col md:flex-row gap-20 justify-center ">
                    <div className="">
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
                        <div className="grid grid-cols-2 mb-4">
                            <p className="font-bold text-xl tracking-tight text-dark col-start-1  col-end-3 md:col-end-1 order-1 mb-1 md:mb-2">
                                {job.title}
                            </p>
                            <div className=" tracking-tight order-3 md:order-2 text-right">
                                <p className="text-star opacity-82 text-lg">
                                    Brutto, per year
                                </p>
                                <span className="font-bold text-tx20 text-dark">
                                    {job.salary.replaceAll("k", " 000")}
                                </span>
                            </div>
                            <p className="text-sm text-star opacity-60 order-2 md:order-3 flex items-center">
                                Posted{" "}
                                {moment.utc(job.createdAt).local().fromNow()}
                            </p>
                        </div>
                        <section className="mb-6">
                            <p className="text-lg tracking-tight text-star opacity-82 mb-11">
                                {description[0]}
                            </p>
                            <div className="tracking-tight mb-6">
                                <h3 className="font-bold text-tx20 text-dark mb-2">
                                    {description[1]}
                                </h3>
                                <p className="text-star opacity-82 text-lg">
                                    {description[2]}
                                </p>
                            </div>
                            <div className="tracking-tight mb-6">
                                <h3 className="font-bold text-tx20 text-dark mb-8">
                                    {description[3]}
                                </h3>
                                <ul className="list-square list-inside md:list-outside text-star opacity-82 text-lg">
                                    {description[4] &&
                                        description[4]
                                            .replace("\t", "")
                                            .split(".")
                                            .filter((e) => e.trim())
                                            .map((el) => <li>{el}</li>)}
                                </ul>
                            </div>
                        </section>
                        <button
                            className="block mx-auto md:mx-0 py-18 px-30 bg-dark-middle-blue rounded-lg text-white uppercase font-semibold text-xs mb-135"
                            type="button"
                        >
                            Aplly now
                        </button>
                        <div className="mb-16">
                            <div className="border-b-2 mb-30">
                                <h2 className="font-bold text-tx28 tracking-wide text-dark mb-30">
                                    Attached images
                                </h2>
                            </div>
                            <img
                                className=" w-52 md:w-85 h-28 md:h-85 rounded-lg"
                                src={job.pictures[0]}
                                alt="job avatar"
                            />
                        </div>
                        <div className="mb-16">
                            <div className="border-b-2 mb-30">
                                <h2 className="font-bold text-tx28 tracking-wide text-dark mb-30">
                                    Additional info
                                </h2>
                            </div>
                            <img
                                className=" w-52 md:w-85 h-28 md:h-85 rounded-lg"
                                src={job.pictures[0]}
                                alt="job avatar"
                            />
                        </div>
                    </div>
                    <div className="w-96">mapa</div>
                </div>
            )}
        </>
    );
};

export default JobDetails;
