import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import React, { useContext } from "react";

import DatepickerContext from "../../contexts/DatepickerContext";
import { loadLanguageModule } from "../../helpers";

dayjs.extend(weekday);

const Week: React.FC = () => {
    const { i18n, startWeekOn } = useContext(DatepickerContext);
    loadLanguageModule(i18n);
    let startDateModifier = dayjs().locale(i18n).weekday(0).get("day");
    if (startWeekOn) {
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
                break;
        }
    }

    return (
        <div className="grid grid-cols-7 border-b border-gray-300 dark:border-gray-700 py-2">
            {[0, 1, 2, 3, 4, 5, 6].map((item, index) => (
                <div key={index} className="tracking-wide text-gray-500 text-center">
                    {dayjs(`2022-11-${6 + (item + startDateModifier)}`)
                        .locale(i18n)
                        .format("ddd")}
                </div>
            ))}
        </div>
    );
};

export default Week;
