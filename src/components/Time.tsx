import React, { ChangeEvent, useContext } from "react";

import { RING_COLOR } from "../constants";
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
        primaryColor,
        changeDatepickerValue,
        changeHour,
        changeMinute,
        changePeriodDay
    } = useContext(DatepickerContext);

    const ringFocusColor = RING_COLOR.focus[primaryColor as keyof typeof RING_COLOR.focus];

    const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.35355 4.06066C8.15829 3.8654 7.84171 3.8654 7.64645 4.06066L5.35355 6.35355C5.15829 6.54882 4.84171 6.54882 4.64645 6.35355C4.45118 6.15829 4.45118 5.84171 4.64645 5.64645L6.93934 3.35356C7.52513 2.76777 8.47487 2.76777 9.06066 3.35355L11.3536 5.64645C11.5488 5.84171 11.5488 6.15829 11.3536 6.35355C11.1583 6.54882 10.8417 6.54882 10.6464 6.35355L8.35355 4.06066Z" fill="#6b7280"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.35355 11.9393C8.15829 12.1346 7.84171 12.1346 7.64645 11.9393L5.35355 9.64645C5.15829 9.45119 4.84171 9.45119 4.64645 9.64645C4.45118 9.84171 4.45118 10.1583 4.64645 10.3536L6.93934 12.6464C7.52513 13.2322 8.47487 13.2322 9.06066 12.6464L11.3536 10.3536C11.5488 10.1583 11.5488 9.84171 11.3536 9.64645C11.1583 9.45119 10.8417 9.45119 10.6464 9.64645L8.35355 11.9393Z" fill="#6b7280"/>
        </svg>
      `;
    const dataUri = `data:image/svg+xml;base64,${Buffer.from(svgString).toString("base64")}`;

    const selectClassname = cn(
        "!bg-[length:1rem_1rem]",
        "bg-[right_0.25rem_center]",
        "!bg-no-repeat !bg-transparent !text-sm !text-center !outline-none !focus:outline-none",
        "!pl-2 !pr-6 !py-1 rounded-[8px] !w-fit",
        "!border border-gray-300 focus:border-none",
        `${ringFocusColor}`
    );

    const HOURS = Array.from({ length: 12 });
    const MINUTES = Array.from({ length: 12 });

    const handleChangeHour = (e: ChangeEvent<HTMLSelectElement>) => {
        changeHour(e.target.value);

        if (period.start && period.end) {
            changeDatepickerValue({
                startDate: formatDateTimeToISO(period.start, e.target.value, minute, periodDay),
                endDate: formatDateTimeToISO(period.end, e.target.value, minute, periodDay)
            });
        }
    };

    const handleChangeMinute = (e: ChangeEvent<HTMLSelectElement>) => {
        changeMinute(e.target.value);

        if (period.start && period.end) {
            changeDatepickerValue({
                startDate: formatDateTimeToISO(period.start, hour, e.target.value, periodDay),
                endDate: formatDateTimeToISO(period.end, hour, e.target.value, periodDay)
            });
        }
    };

    const handleChangePeriodDay = (e: ChangeEvent<HTMLSelectElement>) => {
        changePeriodDay(e.target.value as PeriodDay);

        if (period.start && period.end) {
            changeDatepickerValue({
                startDate: formatDateTimeToISO(period.start, hour, minute, e.target.value),
                endDate: formatDateTimeToISO(period.end, hour, minute, e.target.value)
            });
        }
    };

    return (
        <div className="w-full md:w-auto flex items-center justify-center space-x-3">
            <div className="pb-6">
                <select
                    name="hour"
                    className={selectClassname}
                    onChange={handleChangeHour}
                    style={{
                        backgroundImage: "url(" + dataUri + ")"
                    }}
                >
                    {HOURS.map((_, index) => {
                        const hour = index + 1;
                        return (
                            <option key={hour} value={hour}>
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
                    style={{
                        backgroundImage: "url(" + dataUri + ")"
                    }}
                >
                    {MINUTES.map((_, index) => {
                        const minute = index * 5;
                        return (
                            <option key={minute} value={minute}>
                                {new Intl.NumberFormat("en-US", {
                                    minimumIntegerDigits: 2
                                }).format(minute)}
                            </option>
                        );
                    })}
                </select>
                <select
                    name="ampm"
                    className={selectClassname}
                    onChange={handleChangePeriodDay}
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
