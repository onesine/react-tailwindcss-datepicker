import dayjs from "dayjs";
import React, { useContext, useMemo } from "react";

import { DAYS } from "../../constants";
import DatepickerContext from "../../contexts/DatepickerContext";
import { loadLanguageModule, shortString, ucFirst } from "../../helpers";

const Week: React.FC = () => {
    const { i18n, startWeekOn } = useContext(DatepickerContext);
    loadLanguageModule(i18n);
    const startDateModifier = useMemo(() => {
        if (startWeekOn) {
            switch (startWeekOn) {
                case "mon":
                    return 1;
                case "tue":
                    return 2;
                case "wed":
                    return 3;
                case "thu":
                    return 4;
                case "fri":
                    return 5;
                case "sat":
                    return 6;
                case "sun":
                    return 0;
                default:
                    return 0;
            }
        }
        return 0;
    }, [startWeekOn]);

    return (
        <div className="grid grid-cols-7 border-b border-gray-300 dark:border-gray-700 py-2">
            {DAYS.map(item => (
                <div key={item} className="tracking-wide text-gray-500 text-center">
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
