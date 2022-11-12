import location from "../assets/Location.svg";
import bookMark from "../assets/Bookmark.svg";
import { Stars } from "./Stars";

export const JobBoardList = ({ jobList }: any) => {
    return (
        <div className="py-8 grid place-content-center">
            {jobList.map((job: any) => (
                <div
                    key={job.id}
                    className=" container md:bg-white bg-middle-gray shadow-md shadow-black-800/70 rounded-lg  mb-2 grid grid-cols-[100px_auto] py-6 px-4 "
                >
                    <div className="pt-10 md:pt-0">
                        <img
                            className="rounded-full w-66 md:w-85 h-66 md:h-85 mr-5 md:mr-7"
                            src={job.pictures[0]}
                            alt="job avatar"
                        />
                    </div>
                    <div className="grid md:grid-cols-[auto_300px] gap-4 md:gap-8">
                        <div className="text-secondary tracking-wide flex flex-col gap-2">
                            <p className="font-bold text-xl tracking-tight text-dark">
                                {job.title}
                            </p>
                            <p className="">Department name • {job.name}</p>
                            <div className="flex gap-2">
                                <img
                                    className="w-3"
                                    src={location}
                                    alt="location"
                                />
                                <p>{job.address}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-[100px_auto] gap-8 order-first md:order-1">
                            <Stars />
                            <div className="flex flex-col items-end justify-between text-secondary tracking-wide">
                                <img
                                    className="hidden md:flex w-8"
                                    src={bookMark}
                                    alt="bookMark"
                                />
                                <p className="">Posted 2 day ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
