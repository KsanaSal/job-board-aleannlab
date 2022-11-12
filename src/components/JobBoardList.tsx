import star from "../assets/Star.svg";
import location from "../assets/Location.svg";
import bookMark from "../assets/Bookmark.svg";

export const JobBoardList = ({ jobList }: any) => {
    return (
        <div className="py-8 grid place-content-center">
            {jobList.map((job: any) => (
                <div
                    key={job.id}
                    className=" container bg-white shadow-md shadow-black-800/70 rounded-lg  mb-2 grid grid-cols-[auto_300px] gap-8 py-6 px-4"
                >
                    <div className="grid grid-cols-[100px_auto] gap-26">
                        {/* <div className="rounded-full bg-slate-200"> */}
                        <img
                            className="rounded-full w-85 h-85 mr-26"
                            src={job.pictures[0]}
                            alt="job avatar"
                        />
                        {/* </div> */}
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
                    </div>
                    <div className="grid grid-cols-[100px_auto] gap-8">
                        <div className="flex items-center">
                            <img className="h-5" src={star} alt="stars" />
                            <img className="h-5" src={star} alt="stars" />
                            <img className="h-5" src={star} alt="stars" />
                            <img className="h-5" src={star} alt="stars" />
                            <img className="h-5" src={star} alt="stars" />
                        </div>
                        <div className="flex flex-col items-end justify-between text-secondary tracking-wide">
                            <img
                                className="w-8"
                                src={bookMark}
                                alt="bookMark"
                            />
                            <p className="">Posted 2 day ago</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
