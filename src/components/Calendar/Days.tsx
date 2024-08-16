import { useCallback, useContext } from "react";

import { BG_COLOR, TEXT_COLOR } from "../../constants";
import DatepickerContext from "../../contexts/DatepickerContext";
import { classNames as cn } from "../../helpers";
import {
    dateIsAfter,
    dateIsBefore,
    dateIsBetween,
    dateIsSame,
    dateIsSameOrAfter,
    dateIsSameOrBefore,
    isCurrentDay
} from "../../libs/date";
import { Period } from "../../types";

interface Props {
    days: {
        previous: Date[];
        current: Date[];
        next: Date[];
    };
    onClickPreviousDays: (day: Date) => void;
    onClickDay: (day: Date) => void;
    onClickNextDays: (day: Date) => void;
}

const Days = (props: Props) => {
    // Props
    const { days, onClickPreviousDays, onClickDay, onClickNextDays } = props;

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
        (day: Date) => {
            if (isCurrentDay(day))
                return TEXT_COLOR["500"][primaryColor as keyof (typeof TEXT_COLOR)["500"]];
            return "";
        },
        [primaryColor]
    );

    const activeDateData = useCallback(
        (day: Date) => {
            let className = "";

            const dayIsSameStart = period.start && dateIsSame(day, period.start, "date");
            const dayIsSameEnd = period.end && dateIsSame(day, period.end, "date");
            const dayIsSameHoverDay = dayHover && dateIsSame(day, dayHover, "date");

            if (dayIsSameStart && dayIsSameEnd) {
                className = ` ${BG_COLOR["500"][primaryColor]} text-white font-medium rounded-full`;
            } else if (dayIsSameStart) {
                className = ` ${BG_COLOR["500"][primaryColor]} text-white font-medium ${
                    dayIsSameHoverDay && !period.end ? "rounded-full" : "rounded-l-full"
                }`;
            } else if (dayIsSameEnd) {
                className = ` ${BG_COLOR["500"][primaryColor]} text-white font-medium ${
                    dayIsSameHoverDay && !period.start ? "rounded-full" : "rounded-r-full"
                }`;
            }

            return {
                active: dayIsSameStart || dayIsSameEnd,
                className: className
            };
        },
        [dayHover, period.end, period.start, primaryColor]
    );

    const hoverClassByDay = useCallback(
        (day: Date) => {
            let className = currentDateClass(day);

            if (period.start && period.end) {
                if (
                    dateIsBetween(day, period.start, period.end, "day", { start: true, end: false })
                ) {
                    return ` ${BG_COLOR["100"][primaryColor]} ${currentDateClass(
                        day
                    )} dark:bg-white/10`;
                }
            }

            if (!dayHover) {
                return className;
            }

            if (
                period.start &&
                dateIsBetween(day, period.start, dayHover, "day", { start: true, end: false })
            ) {
                className = ` ${BG_COLOR["100"][primaryColor]} ${currentDateClass(
                    day
                )} dark:bg-white/10`;
            }

            if (
                period.end &&
                dateIsBetween(day, dayHover, period.end, "day", { start: true, end: false })
            ) {
                className = ` ${BG_COLOR["100"][primaryColor]} ${currentDateClass(
                    day
                )} dark:bg-white/10`;
            }

            if (dateIsSame(dayHover, day, "date")) {
                const bgColor = BG_COLOR["500"][primaryColor];
                className = ` transition-all duration-500 text-white font-medium ${bgColor} ${
                    period.start ? "rounded-r-full" : "rounded-l-full"
                }`;
            }

            return className;
        },
        [currentDateClass, dayHover, period.end, period.start, primaryColor]
    );

    const isDateTooEarly = useCallback(
        (day: Date) => {
            if (!minDate) return false;

            return dateIsBefore(day, minDate, "date");
        },
        [minDate]
    );

    const isDateTooLate = useCallback(
        (day: Date) => {
            if (!maxDate) return false;

            return dateIsAfter(day, maxDate, "date");
        },
        [maxDate]
    );

    const isDateDisabled = useCallback(
        (day: Date) => {
            if (isDateTooEarly(day) || isDateTooLate(day)) {
                return true;
            }

            if (!disabledDates || (Array.isArray(disabledDates) && !disabledDates.length)) {
                return false;
            }

            let matchingCount = 0;
            disabledDates?.forEach(dateRange => {
                if (
                    dateRange.startDate &&
                    dateRange.endDate &&
                    dateIsBetween(day, dateRange.startDate, dateRange.endDate, "date", {
                        start: true,
                        end: true
                    })
                ) {
                    matchingCount++;
                }
            });

            return matchingCount > 0;
        },
        [isDateTooEarly, isDateTooLate, disabledDates]
    );

    const buttonClass = useCallback(
        (day: Date, type: "current" | "next" | "previous") => {
            const baseClass = "flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10";
            if (type === "current") {
                return cn(
                    baseClass,
                    !activeDateData(day).active
                        ? hoverClassByDay(day)
                        : activeDateData(day).className,
                    isDateDisabled(day) && "line-through"
                );
            }
            return cn(baseClass, isDateDisabled(day) && "line-through", "text-gray-400");
        },
        [activeDateData, hoverClassByDay, isDateDisabled]
    );

    const checkIfHoverPeriodContainsDisabledPeriod = useCallback(
        (hoverPeriod: Period) => {
            if (!Array.isArray(disabledDates)) {
                return false;
            }

            for (let i = 0; i < disabledDates.length; i++) {
                if (
                    dateIsSameOrBefore(hoverPeriod.start, disabledDates[i].startDate, "date") &&
                    dateIsSameOrAfter(hoverPeriod.end, disabledDates[i].endDate, "date")
                ) {
                    return true;
                }
            }
            return false;
        },
        [disabledDates]
    );

    const hoverDay = useCallback(
        (day: Date) => {
            if (period.start && !period.end) {
                const hoverPeriod = { ...period, end: day };

                if (dateIsBefore(day, period.start, "date")) {
                    hoverPeriod.start = day;
                    hoverPeriod.end = period.start;

                    if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
                        changePeriod({
                            start: null,
                            end: period.start
                        });
                    }
                }

                if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
                    changeDayHover(day);
                }
            }

            if (!period.start && period.end) {
                const hoverPeriod = { ...period, start: day };

                if (dateIsAfter(day, period.end, "date")) {
                    hoverPeriod.start = period.end;
                    hoverPeriod.end = day;
                    if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
                        changePeriod({
                            start: period.end,
                            end: null
                        });
                    }
                }
                if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
                    changeDayHover(day);
                }
            }
        },
        [changeDayHover, changePeriod, checkIfHoverPeriodContainsDisabledPeriod, period]
    );

    const handleClickDay = useCallback(
        (day: Date, type: "previous" | "current" | "next") => {
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
                const daySelectedIsSameHoverDay = dayHover && dateIsSame(day, dayHover, "date");

                if (period.start && !period.end && daySelectedIsSameHoverDay) {
                    continueClick();
                } else if (!period.start && period.end && daySelectedIsSameHoverDay) {
                    continueClick();
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
            onClickDay,
            onClickNextDays,
            onClickPreviousDays,
            period.end,
            period.start
        ]
    );

    return (
        <div className="grid grid-cols-7 gap-y-0.5 my-1">
            {days.previous.map((item, index) => (
                <button
                    type="button"
                    key={index}
                    disabled={isDateDisabled(item)}
                    className={`${buttonClass(item, "previous")}`}
                    onClick={() => handleClickDay(item, "previous")}
                    onMouseOver={() => {
                        hoverDay(item);
                    }}
                >
                    {item.getDate()}
                </button>
            ))}

            {days.current.map((item, index) => (
                <button
                    type="button"
                    key={index}
                    disabled={isDateDisabled(item)}
                    className={`${buttonClass(item, "current")}`}
                    onClick={() => handleClickDay(item, "current")}
                    onMouseOver={() => {
                        hoverDay(item);
                    }}
                >
                    {item.getDate()}
                </button>
            ))}

            {days.next.map((item, index) => (
                <button
                    type="button"
                    key={index}
                    disabled={isDateDisabled(item)}
                    className={`${buttonClass(item, "next")}`}
                    onClick={() => handleClickDay(item, "next")}
                    onMouseOver={() => {
                        hoverDay(item);
                    }}
                >
                    {item.getDate()}
                </button>
            ))}
        </div>
    );
};

export default Days;
