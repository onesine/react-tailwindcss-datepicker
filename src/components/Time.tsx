import React, { ChangeEvent, useContext } from "react";

import DatepickerContext from "../contexts/DatepickerContext";
import { classNames as cn, formatDateTimeToISO } from "../helpers";
import { PeriodDay } from "../types";

const Time: React.FC = () => {
    // Contexts
    const {
        hour,
        minute,
        periodDay,
        period,
        changeDatepickerValue,
        changeHour,
        changeMinute,
        changePeriodDay
    } = useContext(DatepickerContext);

    const svgString = `
        <svg 
            class="flex-shrink-0 w-3 h-3" 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#6b7280" 
            stroke-width="2.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"
        >
            <path d="m7 15 5 5 5-5"></path>
            <path d="m7 9 5-5 5 5"></path>
        </svg>
      `;
    const dataUri = `data:image/svg+xml;base64,${Buffer.from(svgString).toString("base64")}`;

    const selectClassname = cn(
        "!bg-[length:0.75rem_0.75rem]",
        "bg-[right_0.5rem_center]",
        "!bg-no-repeat !appearance-none !bg-transparent !text-sm !text-center !outline-none !focus:outline-none",
        "!pl-2 !pr-6 !py-1 rounded-[8px] !w-fit",
        "!border border-gray-300 focus:border-primary-blue-100"
    );

    const HOURS = Array.from({ length: 12 });
    const MINUTES = Array.from({ length: 12 });

    const handleChangeHour = (e: ChangeEvent<HTMLSelectElement>) => {
        changeHour(e.target.value);

        if (period.start && period.end)
            changeDatepickerValue({
                startDate: formatDateTimeToISO(period.start, e.target.value, minute, periodDay),
                endDate: formatDateTimeToISO(period.end, e.target.value, minute, periodDay)
            });
    };

    const handleChangeMinute = (e: ChangeEvent<HTMLSelectElement>) => {
        changeMinute(e.target.value);

        if (period.start && period.end)
            changeDatepickerValue({
                startDate: formatDateTimeToISO(period.start, hour, e.target.value, periodDay),
                endDate: formatDateTimeToISO(period.end, hour, e.target.value, periodDay)
            });
    };

    const handleChangePeriodDay = (e: ChangeEvent<HTMLSelectElement>) => {
        changePeriodDay(e.target.value as PeriodDay);

        if (period.start && period.end)
            changeDatepickerValue({
                startDate: formatDateTimeToISO(
                    period.start,
                    hour,
                    minute,
                    e.target.value as PeriodDay
                ),
                endDate: formatDateTimeToISO(period.end, hour, minute, e.target.value as PeriodDay)
            });
    };

    return (
        <div className="flex w-full items-center justify-center space-x-3 focus:ring-primary-blue-100 md:w-auto">
            <div className="pb-2">
                <select
                    name="hour"
                    className={selectClassname}
                    onChange={handleChangeHour}
                    value={hour}
                    style={{
                        backgroundImage: "url(" + dataUri + ")"
                    }}
                >
                    {HOURS.map((_, index) => {
                        const hr = index + 1;
                        return (
                            <option key={hr} value={hr}>
                                {hr}
                            </option>
                        );
                    })}
                </select>
                <span className="mx-3 text-xl">:</span>
                <select
                    name="minute"
                    className={cn(selectClassname, "mr-4")}
                    onChange={handleChangeMinute}
                    value={minute}
                    style={{
                        backgroundImage: "url(" + dataUri + ")"
                    }}
                >
                    {MINUTES.map((_, index) => {
                        const min = index * 5;
                        return (
                            <option key={min} value={min}>
                                {new Intl.NumberFormat("en-US", {
                                    minimumIntegerDigits: 2
                                }).format(min)}
                            </option>
                        );
                    })}
                </select>
                <select
                    name="ampm"
                    className={selectClassname}
                    onChange={handleChangePeriodDay}
                    value={periodDay}
                    style={{
                        backgroundImage: "url(" + dataUri + ")"
                    }}
                >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                </select>
            </div>
        </div>
    );
};

export default Time;
