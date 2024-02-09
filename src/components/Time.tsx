import dayjs from "dayjs";
import React, { ChangeEvent, useCallback, useContext } from "react";

import { BG_COLOR, BORDER_COLOR, DATE_FORMAT, RING_COLOR } from "../constants";
import DatepickerContext from "../contexts/DatepickerContext";
import { classNames as cn } from "../helpers";

const Time: React.FC = () => {
    // Contexts

    const { primaryColor, changeHour, changeMinute, changePeriodDay } =
        useContext(DatepickerContext);
    const ringFocusColor = RING_COLOR.focus[primaryColor as keyof typeof RING_COLOR.focus];

    const HOURS = Array.from({ length: 12 });
    const MINUTES = Array.from({ length: 12 });

    const selectClassname = cn(
        "!bg-none !bg-transparent !text-sm !text-center !outline-none !focus:outline-none",
        "!px-2 !py-1 rounded-[8px] !w-fit",
        "!border border-gray-300 focus:border-none",
        `${ringFocusColor}`
    );

    const handleChangeHour = (e: ChangeEvent<HTMLSelectElement>) => changeHour(e.target.value);

    const handleChangeMinute = (e: ChangeEvent<HTMLSelectElement>) => changeMinute(e.target.value);

    const handleChangePeriodDay = (e: ChangeEvent<HTMLSelectElement>) =>
        changePeriodDay(e.target.value as "AM" | "PM");

    return (
        <div className="w-full md:w-auto flex items-center justify-center space-x-3">
            <div className="pb-6">
                <select name="hour" className={selectClassname} onChange={handleChangeHour}>
                    {HOURS.map((_, index) => {
                        const hour = index + 1;
                        return (
                            <option key={hour} value={hour + 1}>
                                {hour}
                            </option>
                        );
                    })}
                </select>
                <span className="text-xl mx-3">:</span>
                <select
                    name="minute"
                    className={cn(selectClassname, "mr-4")}
                    onChange={handleChangeMinute}
                >
                    {MINUTES.map((_, index) => {
                        const minute = index * 5;
                        return (
                            <option key={minute} value={minute + 1}>
                                {new Intl.NumberFormat("en-US", {
                                    minimumIntegerDigits: 2
                                }).format(minute)}
                            </option>
                        );
                    })}
                </select>
                <select name="ampm" className={selectClassname} onChange={handleChangePeriodDay}>
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                </select>
            </div>
        </div>
    );
};

export default Time;
