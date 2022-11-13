import spriteIcon from "../assets/sprite-icons.svg";

export const Pagination = ({
    jobsPerPage,
    totalJobs,
    paginate,
    currentPage,
}: any) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i += 1) {
        pageNumbers.push(i);
    }

    const prevPage = currentPage > 1 ? currentPage - 1 : currentPage;
    const disablePrevPage = currentPage > 1 ? false : true;
    const nextPage =
        currentPage < pageNumbers.length ? currentPage + 1 : currentPage;
    const disableNextPage = currentPage < pageNumbers.length ? false : true;

    return (
        <div className="flex  items-center justify-center mb-16">
            <ul className="flex bg-white py-4 px-6 rounded-lg gap-2 items-center">
                <li
                    className={`w-10 border-r-2 mr-12 ${
                        disablePrevPage ? "pointer-events-none opacity-25" : ""
                    }`}
                >
                    <a href="#t" onClick={() => paginate(prevPage)}>
                        <svg className="h-5 w-5 text-dark-gray">
                            <use href={`${spriteIcon}#icon-arrow-left`}></use>
                        </svg>
                    </a>
                </li>
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={`w-8 text-center font-bold text-xl text-dark-middle-gray ${
                            currentPage === number
                                ? "text-middle-blue border-b-2 border-middle-blue"
                                : ""
                        }`}
                    >
                        <a href="#t" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))}

                <li
                    className={`flex w-10 border-l-2 text-right justify-end ml-12 ${
                        disableNextPage ? "pointer-events-none opacity-25" : ""
                    }`}
                >
                    <a href="#t" onClick={() => paginate(nextPage)}>
                        <svg className="h-5 w-5 text-dark-gray">
                            <use href={`${spriteIcon}#icon-arrow-right`}></use>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
};
