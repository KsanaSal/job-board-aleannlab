import spriteIcon from "../assets/sprite-icons.svg";

export const Pagination = () => {
    return (
        <div className="flex  items-center justify-center mb-16">
            <ul className="flex bg-white py-4 px-6 rounded-lg gap-2 items-center">
                <li className="w-10 border-r-2 mr-12">
                    <a href="#t">
                        <svg className="h-5 w-5 text-dark-gray">
                            <use href={`${spriteIcon}#icon-arrow-left`}></use>
                        </svg>
                    </a>
                </li>
                <li className="w-8 text-center font-bold text-xl text-dark-middle-gray">
                    <a href="#t">1</a>
                </li>
                <li className="w-8 text-center font-bold text-xl text-dark-middle-gray">
                    <a href="#t">2</a>
                </li>
                <li className="flex w-10 border-l-2 text-right justify-end ml-12">
                    <a href="#t">
                        <svg className="h-5 w-5 text-dark-gray">
                            <use href={`${spriteIcon}#icon-arrow-right`}></use>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
};
