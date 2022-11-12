import star from "../assets/Star.svg";
import location from "../assets/Location.svg";
import bookMark from "../assets/Bookmark.svg";

export const JobBoardList = ({ jobList }: any) => {
    return (
        <div className="py-8 grid place-content-center">
            {jobList.map((job: any) => (
                <div
                    key={job.id}
                    className=" container bg-white shadow-md shadow-black-800/70 rounded-lg  mb-2 grid grid-cols-[auto_300px] gap-8"
                >
                    <div className="pl-4 py-6 grid grid-cols-[100px_auto] gap-26">
                        {/* <div className="rounded-full bg-slate-200"> */}
                        <img
                            className="rounded-full w-85 h-85 mr-26"
                            src={job.pictures[0]}
                            alt="job avatar"
                        />
                        {/* </div> */}
                        <div className="">
                            <p className="font-bold">{job.title}</p>
                            <p>Department name • {job.name}</p>
                            <img src={location} alt="location" />
                            <p>{job.address}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_auto] gap-8">
                        <img src={star} alt="stars" />
                        <div className="flex-1">
                            <img src={bookMark} alt="bookMark" />
                            <p>Posted 2 day ago</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
