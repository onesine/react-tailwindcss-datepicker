import dayjs from "dayjs";
import React, { useContext } from "react";

import DatepickerContext from "../../contexts/DatepickerContext";
import { loadLanguageModule, shortString, ucFirst } from "../../helpers";

const Week: React.FC = () => {
    const { i18n, startWeekOn } = useContext(DatepickerContext);
    loadLanguageModule(i18n);
    let startDateModifier = 0;
    switch (startWeekOn) {
        case "mon":
            startDateModifier = 1;
            break;
        case "tue":
            startDateModifier = 2;
            break;
        case "wed":
            startDateModifier = 3;
            break;
        case "thu":
            startDateModifier = 4;
            break;
        case "fri":
            startDateModifier = 5;
            break;
        case "sat":
            startDateModifier = 6;
            break;
        case "sun":
            startDateModifier = 0;
            break;
        default:
            startDateModifier = 0;
            break;
    }
    return (
        <div className="grid grid-cols-7 border-b border-gray-300 dark:border-gray-700 py-2">
            {[0, 1, 2, 3, 4, 5, 6].map((item, index) => (
                <div key={index} className="tracking-wide text-gray-500 text-center">
                    {ucFirst(
                        shortString(
                            dayjs(`2022-11-${6 + (item + startDateModifier)}`)
                                .locale(i18n)
                                .format("ddd")
                        )
                    )}
                </div>
            ))}
        </div>
    );
};

export default Week;
