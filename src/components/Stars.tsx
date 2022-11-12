// import star from "../assets/Star.svg";
import spriteIcon from "../assets/sprite-icons.svg";
// import emptyStar from "../assets/EmptyStar.svg";

export const Stars = () => {
    const random = () => {
        return Math.round(Math.random() * 5);
    };
    const starred = new Array(random()).fill("");
    const unStarred = new Array(5 - starred.length).fill("");
    return (
        <div className="flex items-center">
            {starred.length > 0 &&
                starred.map(() => {
                    return (
                        <svg className="h-3 w-3 md:h-5 md:w-5 text-star">
                            <use href={`${spriteIcon}#icon-star`}></use>
                        </svg>
                    );
                })}

            {unStarred.length > 0 &&
                unStarred.map(
                    () => {
                        return (
                            <svg className="h-3 w-3 md:h-5 md:w-5 text-star">
                                <use
                                    className="h-3 w-3 md:h-5 md:w-5"
                                    href={`${spriteIcon}#icon-empty-star`}
                                ></use>
                            </svg>
                        );
                    }
                    // <img className="h-3 md:h-5" src={emptyStar} alt="stars" />
                )}
        </div>
    );
};
