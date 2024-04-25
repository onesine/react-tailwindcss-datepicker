import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import React, { useCallback, useContext, useMemo } from "react";

import { BG_COLOR, TEXT_COLOR } from "../../constants";
import DatepickerContext from "../../contexts/DatepickerContext";
import {
    formatDate,
    nextMonth,
    previousMonth,
    classNames as cn,
    classNameOverloader
} from "../../helpers";
import { Period } from "../../types";

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
        disabledDates,
        baseDayClassName,
        disabledClassName,
        selectedClassName,
        selectedStartClassName,
        selectedFullClassName,
        selectedEndClassName,
        rangeClassName,
        todayClassName
    } = useContext(DatepickerContext);

    const baseDayClassNameOverload = useMemo(() => {
        const defaultBaseDayClassName =
            "flex items-center justify-center w-12 h-12 md:w-10 md:h-10";
        return classNameOverloader(defaultBaseDayClassName, baseDayClassName);
    }, [baseDayClassName]);

    const rangeClassNameOverload = useMemo(() => {
        const defaultRangeClassName = `${BG_COLOR["100"][primaryColor]} dark:bg-white/10`;
        return classNameOverloader(defaultRangeClassName, rangeClassName);
    }, [rangeClassName, primaryColor]);

    const selectedClassNameOverload = useMemo(() => {
        const defaultSelectedClassName = `text-white font-medium ${BG_COLOR["500"][primaryColor]}`;
        return classNameOverloader(defaultSelectedClassName, selectedClassName);
    }, [selectedClassName, primaryColor]);

    const selectedStartClassNameOverload = useMemo(() => {
        const defaultSelectedStartClassName = "rounded-l-full";
        return classNameOverloader(defaultSelectedStartClassName, selectedStartClassName);
    }, [selectedStartClassName]);

    const selectedFullClassNameOverload = useMemo(() => {
        const defaultSelectedFullClassName = "rounded-full";
        return classNameOverloader(defaultSelectedFullClassName, selectedFullClassName);
    }, [selectedFullClassName]);

    const selectedEndClassNameOverload = useMemo(() => {
        const defaultSelectedEndClassName = "rounded-r-full";
        return classNameOverloader(defaultSelectedEndClassName, selectedEndClassName);
    }, [selectedEndClassName]);

    const disabledClassNameOverload = useMemo(() => {
        const defaultDisabledClassName = "line-through";
        return classNameOverloader(defaultDisabledClassName, disabledClassName);
    }, [disabledClassName]);

    const todayClassNameOverload = useMemo(() => {
        const defaultTodayClassName =
            TEXT_COLOR["500"][primaryColor as keyof (typeof TEXT_COLOR)["500"]];
        return classNameOverloader(defaultTodayClassName, todayClassName);
    }, [todayClassName, primaryColor]);

    // Functions
    const currentDateClass = useCallback(
        (item: number) => {
            const itemDate = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${
                item >= 10 ? item : "0" + item
            }`;
            if (formatDate(dayjs()) === formatDate(dayjs(itemDate))) return todayClassNameOverload;
            return "";
        },
        [calendarData.date, todayClassNameOverload]
    );

    const activeDateData = useCallback(
        (day: number) => {
            const fullDay = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${day}`;
            let className = "";

            if (dayjs(fullDay).isSame(period.start) && dayjs(fullDay).isSame(period.end)) {
                className = ` ${selectedClassNameOverload} ${selectedFullClassNameOverload}`;
            } else if (dayjs(fullDay).isSame(period.start)) {
                className = ` ${selectedClassNameOverload} ${
                    dayjs(fullDay).isSame(dayHover) && !period.end
                        ? selectedFullClassNameOverload
                        : selectedStartClassNameOverload
                }`;
            } else if (dayjs(fullDay).isSame(period.end)) {
                className = ` ${selectedClassNameOverload} ${
                    dayjs(fullDay).isSame(dayHover) && !period.start
                        ? selectedFullClassNameOverload
                        : selectedEndClassNameOverload
                }`;
            }

            return {
                active: dayjs(fullDay).isSame(period.start) || dayjs(fullDay).isSame(period.end),
                className: className
            };
        },
        [
            calendarData.date,
            dayHover,
            period.end,
            period.start,
            selectedClassNameOverload,
            selectedEndClassNameOverload,
            selectedFullClassNameOverload,
            selectedStartClassNameOverload
        ]
    );

    const hoverClassByDay = useCallback(
        (day: number) => {
            let className = currentDateClass(day);
            const fullDay = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${
                day >= 10 ? day : "0" + day
            }`;

            if (period.start && period.end) {
                if (dayjs(fullDay).isBetween(period.start, period.end, "day", "[)")) {
                    return ` ${rangeClassNameOverload} ${currentDateClass(day)}`;
                }
            }

            if (!dayHover) {
                return className;
            }

            if (period.start && dayjs(fullDay).isBetween(period.start, dayHover, "day", "[)")) {
                className = ` ${rangeClassNameOverload} ${currentDateClass(day)}`;
            }

            if (period.end && dayjs(fullDay).isBetween(dayHover, period.end, "day", "[)")) {
                className = ` ${rangeClassNameOverload} ${currentDateClass(day)}`;
            }

            if (dayHover === fullDay) {
                console.log(period.start);
                className = ` ${selectedClassNameOverload} transition-all duration-500 ${
                    period.start ? selectedEndClassNameOverload : selectedStartClassNameOverload
                }`;
            }

            return className;
        },
        [
            calendarData.date,
            currentDateClass,
            dayHover,
            period.end,
            period.start,
            rangeClassNameOverload,
            selectedClassNameOverload,
            selectedStartClassNameOverload,
            selectedEndClassNameOverload
        ]
    );

    const isDateTooEarly = useCallback(
        (day: number, type: "current" | "previous" | "next") => {
            if (!minDate) {
                return false;
            }
            const object = {
                previous: previousMonth(calendarData.date),
                current: calendarData.date,
                next: nextMonth(calendarData.date)
            };
            const newDate = object[type as keyof typeof object];
            const formattedDate = newDate.set("date", day);
            return dayjs(formattedDate).isSame(dayjs(minDate), "day")
                ? false
                : dayjs(formattedDate).isBefore(dayjs(minDate));
        },
        [calendarData.date, minDate]
    );

    const isDateTooLate = useCallback(
        (day: number, type: "current" | "previous" | "next") => {
            if (!maxDate) {
                return false;
            }
            const object = {
                previous: previousMonth(calendarData.date),
                current: calendarData.date,
                next: nextMonth(calendarData.date)
            };
            const newDate = object[type as keyof typeof object];
            const formattedDate = newDate.set("date", day);
            return dayjs(formattedDate).isSame(dayjs(maxDate), "day")
                ? false
                : dayjs(formattedDate).isAfter(dayjs(maxDate));
        },
        [calendarData.date, maxDate]
    );

    const isDateDisabled = useCallback(
        (day: number, type: "current" | "previous" | "next") => {
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
        (day: number, type: "current" | "next" | "previous") => {
            if (type === "current") {
                return cn(
                    baseDayClassNameOverload,
                    !activeDateData(day).active
                        ? hoverClassByDay(day)
                        : activeDateData(day).className,
                    isDateDisabled(day, type) && disabledClassNameOverload
                );
            }
            return cn(
                baseDayClassNameOverload,
                isDateDisabled(day, type) && disabledClassNameOverload,
                "text-gray-400"
            );
        },
        [
            activeDateData,
            hoverClassByDay,
            isDateDisabled,
            disabledClassNameOverload,
            baseDayClassNameOverload
        ]
    );

    const checkIfHoverPeriodContainsDisabledPeriod = useCallback(
        (hoverPeriod: Period) => {
            if (!Array.isArray(disabledDates)) {
                return false;
            }
            for (let i = 0; i < disabledDates.length; i++) {
                if (
                    dayjs(hoverPeriod.start).isBefore(disabledDates[i].startDate) &&
                    dayjs(hoverPeriod.end).isAfter(disabledDates[i].endDate)
                ) {
                    return true;
                }
            }
            return false;
        },
        [disabledDates]
    );

    const getMetaData = useCallback(() => {
        return {
            previous: previousMonth(calendarData.date),
            current: calendarData.date,
            next: nextMonth(calendarData.date)
        };
    }, [calendarData.date]);

    const hoverDay = useCallback(
        (day: number, type: string) => {
            const object = getMetaData();
            const newDate = object[type as keyof typeof object];
            const newHover = `${newDate.year()}-${newDate.month() + 1}-${
                day >= 10 ? day : "0" + day
            }`;

            if (period.start && !period.end) {
                const hoverPeriod = { ...period, end: newHover };
                if (dayjs(newHover).isBefore(dayjs(period.start))) {
                    hoverPeriod.start = newHover;
                    hoverPeriod.end = period.start;
                    if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
                        changePeriod({
                            start: null,
                            end: period.start
                        });
                    }
                }
                if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
                    changeDayHover(newHover);
                }
            }

            if (!period.start && period.end) {
                const hoverPeriod = { ...period, start: newHover };
                if (dayjs(newHover).isAfter(dayjs(period.end))) {
                    hoverPeriod.start = period.end;
                    hoverPeriod.end = newHover;
                    if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
                        changePeriod({
                            start: period.end,
                            end: null
                        });
                    }
                }
                if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
                    changeDayHover(newHover);
                }
            }
        },
        [
            changeDayHover,
            changePeriod,
            checkIfHoverPeriodContainsDisabledPeriod,
            getMetaData,
            period
        ]
    );

    const handleClickDay = useCallback(
        (day: number, type: "previous" | "current" | "next") => {
            function continueClick() {
                if (type === "previous") {
                    onClickPreviousDays(day);
                }

                if (type === "current") {
                    onClickDay(day);
                }

                if (type === "next") {
                    onClickNextDays(day);
                }
            }

            if (disabledDates?.length) {
                const object = getMetaData();
                const newDate = object[type as keyof typeof object];
                const clickDay = `${newDate.year()}-${newDate.month() + 1}-${
                    day >= 10 ? day : "0" + day
                }`;

                if (period.start && !period.end) {
                    dayjs(clickDay).isSame(dayHover) && continueClick();
                } else if (!period.start && period.end) {
                    dayjs(clickDay).isSame(dayHover) && continueClick();
                } else {
                    continueClick();
                }
            } else {
                continueClick();
            }
        },
        [
            dayHover,
            disabledDates?.length,
            getMetaData,
            onClickDay,
            onClickNextDays,
            onClickPreviousDays,
            period.end,
            period.start
        ]
    );

    return (
        <div className="grid grid-cols-7 gap-y-0.5 my-1">
            {calendarData.days.previous.map((item, index) => (
                <button
                    type="button"
                    key={index}
                    disabled={isDateDisabled(item, "previous")}
                    className={`${buttonClass(item, "previous")}`}
                    onClick={() => handleClickDay(item, "previous")}
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
                    onClick={() => handleClickDay(item, "current")}
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
                    disabled={isDateDisabled(item, "next")}
                    className={`${buttonClass(item, "next")}`}
                    onClick={() => handleClickDay(item, "next")}
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
