import dayjs from "dayjs";
import React, { useCallback, useContext } from "react";

import { BG_COLOR, TEXT_COLOR } from "../../constants";
import DatepickerContext from "../../contexts/DatepickerContext";
import { formatDate, nextMonth, previousMonth, classNames as cn } from "../../helpers";

const isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(isBetween);

interface Props {
    calendarData: {
        date: dayjs.Dayjs;
        days: {
            previous: number[];
            current: number[];
            next: number[];
        };
    };
    onClickPreviousDays: (day: number) => void;
    onClickDay: (day: number) => void;
    onClickNextDays: (day: number) => void;
}

const Days: React.FC<Props> = ({
    calendarData,
    onClickPreviousDays,
    onClickDay,
    onClickNextDays
}) => {
    // Contexts
    const {
        primaryColor,
        period,
        changePeriod,
        dayHover,
        changeDayHover,
        minDate,
        maxDate,
        disabledDates
    } = useContext(DatepickerContext);

    // Functions
    const currentDateClass = useCallback(
        (item: number) => {
            const itemDate = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${
                item >= 10 ? item : "0" + item
            }`;
            if (formatDate(dayjs()) === formatDate(dayjs(itemDate)))
                return TEXT_COLOR["500"][primaryColor as keyof (typeof TEXT_COLOR)["500"]];
            return "";
        },
        [calendarData.date, primaryColor]
    );

    const activeDateData = useCallback(
        (day: number) => {
            const fullDay = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${day}`;
            let className = "";

            if (dayjs(fullDay).isSame(period.start) && dayjs(fullDay).isSame(period.end)) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                className = ` ${BG_COLOR["500"][primaryColor]} text-white font-medium rounded-full`;
            } else if (dayjs(fullDay).isSame(period.start)) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                className = ` ${BG_COLOR["500"][primaryColor]} text-white font-medium ${
                    dayjs(fullDay).isSame(dayHover) && !period.end
                        ? "rounded-full"
                        : "rounded-l-full"
                }`;
            } else if (dayjs(fullDay).isSame(period.end)) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                className = ` ${BG_COLOR["500"][primaryColor]} text-white font-medium ${
                    dayjs(fullDay).isSame(dayHover) && !period.start
                        ? "rounded-full"
                        : "rounded-r-full"
                }`;
            }

            return {
                active: dayjs(fullDay).isSame(period.start) || dayjs(fullDay).isSame(period.end),
                className: className
            };
        },
        [calendarData.date, dayHover, period.end, period.start, primaryColor]
    );

    const hoverClassByDay = useCallback(
        (day: number) => {
            let className = currentDateClass(day);
            const fullDay = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${
                day >= 10 ? day : "0" + day
            }`;

            if (period.start && period.end) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                if (dayjs(fullDay).isBetween(period.start, period.end, "day", "[)")) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    return ` ${BG_COLOR["100"][primaryColor]} ${currentDateClass(
                        day
                    )} dark:bg-white/10`;
                }
            }

            if (!dayHover) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                return className;
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (period.start && dayjs(fullDay).isBetween(period.start, dayHover, "day", "[)")) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                className = ` ${BG_COLOR["100"][primaryColor]} ${currentDateClass(
                    day
                )} dark:bg-white/10`;
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (period.end && dayjs(fullDay).isBetween(dayHover, period.end, "day", "[)")) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                className = ` ${BG_COLOR["100"][primaryColor]} ${currentDateClass(
                    day
                )} dark:bg-white/10`;
            }

            if (dayHover === fullDay) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const bgColor = BG_COLOR["500"][primaryColor];
                className = ` transition-all duration-500 text-white font-medium ${bgColor} ${
                    period.start ? "rounded-r-full" : "rounded-l-full"
                }`;
            }

            return className;
        },
        [calendarData.date, currentDateClass, dayHover, period.end, period.start, primaryColor]
    );

    const isDateTooEarly = useCallback(
        (day: number, type: string) => {
            if (!minDate) {
                return false;
            }
            const object = {
                previous: previousMonth(calendarData.date),
                current: calendarData.date,
                next: nextMonth(calendarData.date)
            };
            const newDate = object[type as keyof typeof object];
            const formattedDate = `${newDate.year()}-${newDate.month() + 1}-${
                day >= 10 ? day : "0" + day
            }`;
            return dayjs(formattedDate).isSame(dayjs(minDate))
                ? false
                : dayjs(formattedDate).isBefore(dayjs(minDate));
        },
        [calendarData.date, minDate]
    );

    const isDateTooLate = useCallback(
        (day: number, type: string) => {
            if (!maxDate) {
                return false;
            }
            const object = {
                previous: previousMonth(calendarData.date),
                current: calendarData.date,
                next: nextMonth(calendarData.date)
            };
            const newDate = object[type as keyof typeof object];
            const formattedDate = `${newDate.year()}-${newDate.month() + 1}-${
                day >= 10 ? day : "0" + day
            }`;
            return dayjs(formattedDate).isSame(maxDate)
                ? false
                : dayjs(formattedDate).isAfter(dayjs(maxDate));
        },
        [calendarData.date, maxDate]
    );

    const isDateDisabled = useCallback(
        (day: number, type: string) => {
            if (isDateTooEarly(day, type) || isDateTooLate(day, type)) {
                return true;
            }
            const object = {
                previous: previousMonth(calendarData.date),
                current: calendarData.date,
                next: nextMonth(calendarData.date)
            };
            const newDate = object[type as keyof typeof object];
            const formattedDate = `${newDate.year()}-${newDate.month() + 1}-${
                day >= 10 ? day : "0" + day
            }`;

            if (!disabledDates || (Array.isArray(disabledDates) && !disabledDates.length)) {
                return false;
            }

            let matchingCount = 0;
            disabledDates?.forEach(dateRange => {
                if (
                    dayjs(formattedDate).isAfter(dateRange.startDate) &&
                    dayjs(formattedDate).isBefore(dateRange.endDate)
                ) {
                    matchingCount++;
                }
                if (
                    dayjs(formattedDate).isSame(dateRange.startDate) ||
                    dayjs(formattedDate).isSame(dateRange.endDate)
                ) {
                    matchingCount++;
                }
            });
            return matchingCount > 0;
        },
        [calendarData.date, isDateTooEarly, isDateTooLate, disabledDates]
    );

    const buttonClass = useCallback(
        (day: number, type: string) => {
            const baseClass = "flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10";
            return cn(
                baseClass,
                !activeDateData(day).active ? hoverClassByDay(day) : activeDateData(day).className,
                isDateDisabled(day, type) && "line-through"
            );
        },
        [activeDateData, hoverClassByDay, isDateDisabled]
    );

    const hoverDay = useCallback(
        (day: number, type: string) => {
            const object = {
                previous: previousMonth(calendarData.date),
                current: calendarData.date,
                next: nextMonth(calendarData.date)
            };
            const newDate = object[type as keyof typeof object];
            const newHover = `${newDate.year()}-${newDate.month() + 1}-${
                day >= 10 ? day : "0" + day
            }`;

            if (period.start && !period.end) {
                if (dayjs(newHover).isBefore(dayjs(period.start))) {
                    changePeriod({
                        start: null,
                        end: period.start
                    });
                }
                changeDayHover(newHover);
            }

            if (!period.start && period.end) {
                if (dayjs(newHover).isAfter(dayjs(period.end))) {
                    changePeriod({
                        start: period.end,
                        end: null
                    });
                }
                changeDayHover(newHover);
            }
        },
        [calendarData.date, changeDayHover, changePeriod, period.end, period.start]
    );

    return (
        <div className="grid grid-cols-7 gap-y-0.5 my-1">
            {calendarData.days.previous.map((item, index) => (
                <button
                    type="button"
                    key={index}
                    disabled={isDateDisabled(item, "previous")}
                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                    onClick={() => onClickPreviousDays(item)}
                    onMouseOver={() => {
                        hoverDay(item, "previous");
                    }}
                >
                    {item}
                </button>
            ))}

            {calendarData.days.current.map((item, index) => (
                <button
                    type="button"
                    key={index}
                    disabled={isDateDisabled(item, "current")}
                    className={`${buttonClass(item, "current")}`}
                    onClick={() => {
                        onClickDay(item);
                    }}
                    onMouseOver={() => {
                        hoverDay(item, "current");
                    }}
                >
                    {item}
                </button>
            ))}

            {calendarData.days.next.map((item, index) => (
                <button
                    type="button"
                    key={index}
                    disabled={isDateDisabled(index, "previous")}
                    className="flex items-center justify-center text-gray-400 h-12 w-12 lg:w-10 lg:h-10"
                    onClick={() => {
                        onClickNextDays(item);
                    }}
                    onMouseOver={() => {
                        hoverDay(item, "next");
                    }}
                >
                    {item}
                </button>
            ))}
        </div>
    );
};

export default Days;
