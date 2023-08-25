import dayjs from "dayjs";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Shortcuts from "../components/Shortcuts";
import { COLORS, DATE_FORMAT, DEFAULT_COLOR, LANGUAGE } from "../constants";
import DatepickerContext from "../contexts/DatepickerContext";
import { formatDate, nextMonth, previousMonth } from "../helpers";
import useOnClickOutside from "../hooks";
import { Period, DatepickerType, ColorKeys } from "../types";

import { Arrow, VerticalDash } from "./utils";

const Datepicker: React.FC<DatepickerType> = ({
    asSingle: defaultAsSingle = false,
    classNames = undefined,
    configs = undefined,
    containerClassName = null,
    dateLooking = "forward",
    disableAutoHide = false,
    disabled = false,
    disabledDates = null,
    displayFormat = DATE_FORMAT,
    i18n = LANGUAGE,
    inputClassName = null,
    inputId,
    inputName,
    isStaticPosition = false,
    maxDate = null,
    minDate = null,
    onChange,
    placeholder = null,
    popoverDirection = undefined,
    primaryColor = "blue",
    readOnly = false,
    renderFooter,
    renderHeader,
    separator = "~",
    showFooter = false,
    showShortcuts = false,
    startFrom = null,
    startWeekOn = "sun",
    toggleClassName = null,
    toggleIcon = undefined,
    useRange: defaultUseRange = true,
    value = null
}) => {
    // Ref
    const containerRef = useRef<HTMLDivElement | null>(null);
    const calendarContainerRef = useRef<HTMLDivElement | null>(null);
    const arrowRef = useRef<HTMLDivElement | null>(null);
    const [asSingle, setAsSingle] = useState(defaultAsSingle);
    const [useRange, setUseRange] = useState(defaultUseRange);

    const toggleSingleView = useCallback((enableSingleMode: boolean) => {
        setAsSingle(enableSingleMode);
        setUseRange(!enableSingleMode);
    }, []);
    // State
    const [firstDate, setFirstDate] = useState<dayjs.Dayjs>(
        startFrom && dayjs(startFrom).isValid() ? dayjs(startFrom) : dayjs()
    );
    const [secondDate, setSecondDate] = useState<dayjs.Dayjs>(nextMonth(firstDate));
    const [period, setPeriod] = useState<Period>({
        start: null,
        end: null
    });
    const [dayHover, setDayHover] = useState<string | null>(null);
    const [inputText, setInputText] = useState<string>("");
    const [inputRef, setInputRef] = useState(React.createRef<HTMLInputElement>());

    // Custom Hooks use
    useOnClickOutside(containerRef, () => {
        const container = containerRef.current;
        if (container) {
            hideDatepicker();
        }
    });

    // Functions
    const hideDatepicker = useCallback(() => {
        if (isStaticPosition) {
            return;
        }
        const div = calendarContainerRef.current;
        const arrow = arrowRef.current;
        if (div && div.classList.contains("block")) {
            div.classList.remove("block");
            div.classList.remove("translate-y-0");
            div.classList.remove("opacity-1");
            div.classList.add("translate-y-4");
            div.classList.add("opacity-0");
            setTimeout(() => {
                div.classList.remove("bottom-full");
                div.classList.add("hidden");
                div.classList.add("mb-2.5");
                div.classList.add("mt-2.5");
            }, 300);
        }
        if (arrow) {
            setTimeout(() => {
                arrow.classList.remove("-bottom-2");
                arrow.classList.remove("border-r");
                arrow.classList.remove("border-b");
                arrow.classList.add("border-l");
                arrow.classList.add("border-t");
            }, 300);
        }
    }, [isStaticPosition]);

    const showDatePicker = useCallback(() => {
        const arrow = arrowRef.current;
        const div = calendarContainerRef.current;

        if (div && div.classList.contains("hidden")) {
            div.classList.remove("hidden");
            div.classList.add("block");

            // window.innerWidth === 767
            const popoverOnUp = popoverDirection == "up";
            const popoverOnDown = popoverDirection === "down";
            if (
                popoverOnUp ||
                (window.innerWidth > 767 &&
                    window.screen.height - 100 < div.getBoundingClientRect().bottom &&
                    !popoverOnDown)
            ) {
                div.classList.add("bottom-full");
                div.classList.add("mb-2.5");
                div.classList.remove("mt-2.5");
            }

            if (arrow) {
                arrow.classList.add("-bottom-2");
                arrow.classList.add("border-r");
                arrow.classList.add("border-b");
                arrow.classList.remove("border-l");
                arrow.classList.remove("border-t");
            }

            setTimeout(() => {
                div.classList.remove("translate-y-4");
                div.classList.remove("opacity-0");
                div.classList.add("translate-y-0");
                div.classList.add("opacity-1");
            }, 1);
        }
    }, [popoverDirection]);

    /* Start First */
    const firstGotoDate = useCallback(
        (date: dayjs.Dayjs) => {
            const newDate = dayjs(formatDate(date));
            const reformatDate = dayjs(formatDate(secondDate));
            if (newDate.isSame(reformatDate) || newDate.isAfter(reformatDate)) {
                setSecondDate(nextMonth(date));
            }
            setFirstDate(date);
        },
        [secondDate]
    );

    const previousMonthFirst = useCallback(() => {
        setFirstDate(previousMonth(firstDate));
    }, [firstDate]);

    const nextMonthFirst = useCallback(() => {
        firstGotoDate(nextMonth(firstDate));
    }, [firstDate, firstGotoDate]);

    const changeFirstMonth = useCallback(
        (month: number) => {
            firstGotoDate(dayjs(`${firstDate.year()}-${month < 10 ? "0" : ""}${month}-01`));
        },
        [firstDate, firstGotoDate]
    );

    const changeFirstYear = useCallback(
        (year: number) => {
            firstGotoDate(dayjs(`${year}-${firstDate.month() + 1}-01`));
        },
        [firstDate, firstGotoDate]
    );
    /* End First */

    /* Start Second */
    const secondGotoDate = useCallback(
        (date: dayjs.Dayjs) => {
            const newDate = dayjs(formatDate(date, displayFormat));
            const reformatDate = dayjs(formatDate(firstDate, displayFormat));
            if (newDate.isSame(reformatDate) || newDate.isBefore(reformatDate)) {
                setFirstDate(previousMonth(date));
            }
            setSecondDate(date);
        },
        [firstDate, displayFormat]
    );

    const previousMonthSecond = useCallback(() => {
        secondGotoDate(previousMonth(secondDate));
    }, [secondDate, secondGotoDate]);

    const nextMonthSecond = useCallback(() => {
        setSecondDate(nextMonth(secondDate));
    }, [secondDate]);

    const changeSecondMonth = useCallback(
        (month: number) => {
            secondGotoDate(dayjs(`${secondDate.year()}-${month < 10 ? "0" : ""}${month}-01`));
        },
        [secondDate, secondGotoDate]
    );

    const changeSecondYear = useCallback(
        (year: number) => {
            secondGotoDate(dayjs(`${year}-${secondDate.month() + 1}-01`));
        },
        [secondDate, secondGotoDate]
    );
    /* End Second */

    // UseEffects & UseLayoutEffect
    useEffect(() => {
        const container = containerRef.current;
        const calendarContainer = calendarContainerRef.current;
        const arrow = arrowRef.current;

        if (container && calendarContainer && arrow) {
            const detail = container.getBoundingClientRect();
            const screenCenter = window.innerWidth / 2;
            const containerCenter = (detail.right - detail.x) / 2 + detail.x;

            if (containerCenter > screenCenter) {
                arrow.classList.add("right-0");
                arrow.classList.add("mr-3.5");
                calendarContainer.classList.add("right-0");
            }
        }
    }, []);

    useEffect(() => {
        if (value && value.startDate && value.endDate) {
            const startDate = dayjs(value.startDate);
            const endDate = dayjs(value.endDate);
            const validDate = startDate.isValid() && endDate.isValid();
            const condition =
                validDate && (startDate.isSame(endDate) || startDate.isBefore(endDate));
            if (condition) {
                setPeriod({
                    start: formatDate(startDate),
                    end: formatDate(endDate)
                });
                setInputText(
                    `${formatDate(startDate, displayFormat)}${
                        asSingle ? "" : ` ${separator} ${formatDate(endDate, displayFormat)}`
                    }`
                );
            }
        }

        if (value && value.startDate === null && value.endDate === null) {
            setPeriod({
                start: null,
                end: null
            });
            setInputText("");
        }
    }, [asSingle, value, displayFormat, separator]);

    useEffect(() => {
        if (startFrom && dayjs(startFrom).isValid()) {
            const startDate = value?.startDate;
            const endDate = value?.endDate;
            if (startDate && dayjs(startDate).isValid()) {
                setFirstDate(dayjs(startDate));
                if (!asSingle) {
                    if (
                        endDate &&
                        dayjs(endDate).isValid() &&
                        dayjs(endDate).startOf("month").isAfter(dayjs(startDate))
                    ) {
                        setSecondDate(dayjs(endDate));
                    } else {
                        setSecondDate(nextMonth(dayjs(startDate)));
                    }
                }
            } else {
                setFirstDate(dayjs(startFrom));
                setSecondDate(nextMonth(dayjs(startFrom)));
            }
        }
    }, [asSingle, startFrom, value]);

    // Variables
    const safePrimaryColor = useMemo(() => {
        if (COLORS.includes(primaryColor)) {
            return primaryColor as ColorKeys;
        }
        return DEFAULT_COLOR;
    }, [primaryColor]);
    const contextValues = useMemo(() => {
        return {
            arrowContainer: arrowRef,
            asSingle,
            calendarContainer: calendarContainerRef,
            changeDatepickerValue: onChange,
            changeDayHover: (newDay: string | null) => setDayHover(newDay),
            changeInputText: (newText: string) => setInputText(newText),
            changePeriod: (newPeriod: Period) => setPeriod(newPeriod),
            classNames,
            configs,
            containerClassName,
            dateLooking,
            dayHover,
            disableAutoHide,
            disabled,
            disabledDates,
            displayFormat,
            hideDatepicker,
            i18n,
            input: inputRef,
            inputClassName,
            inputId,
            inputName,
            inputText,
            isStaticPosition,
            maxDate,
            minDate,
            onChange,
            period,
            placeholder,
            popoverDirection,
            primaryColor: safePrimaryColor,
            readOnly,
            separator,
            showDatePicker,
            showFooter,
            startWeekOn,
            toggleClassName,
            toggleIcon,
            toggleSingleView,
            updateFirstDate: (newDate: dayjs.Dayjs) => firstGotoDate(newDate),
            value
        };
    }, [
        asSingle,
        classNames,
        configs,
        containerClassName,
        dateLooking,
        dayHover,
        disableAutoHide,
        disabled,
        disabledDates,
        displayFormat,
        firstGotoDate,
        hideDatepicker,
        i18n,
        inputClassName,
        inputId,
        inputName,
        inputRef,
        inputText,
        isStaticPosition,
        maxDate,
        minDate,
        onChange,
        period,
        placeholder,
        popoverDirection,
        readOnly,
        safePrimaryColor,
        separator,
        showDatePicker,
        showFooter,
        startWeekOn,
        toggleClassName,
        toggleIcon,
        toggleSingleView,
        value
    ]);

    const containerClassNameOverload = useMemo(() => {
        const defaultContainerClassName = "relative w-full text-gray-700";
        return typeof containerClassName === "function"
            ? containerClassName(defaultContainerClassName)
            : typeof containerClassName === "string" && containerClassName !== ""
            ? containerClassName
            : defaultContainerClassName;
    }, [containerClassName]);

    const calendarBorders = isStaticPosition ? "" : "shadow-sm border border-gray-300 px-1";

    return (
        <DatepickerContext.Provider value={contextValues}>
            <div className={containerClassNameOverload} ref={containerRef}>
                <Input setContextRef={setInputRef} />

                <div
                    className={`transition-all ease-out duration-300 z-10 mt-[1px] text-sm lg:text-xs 2xl:text-sm translate-y-4 opacity-0 hidden ${
                        !isStaticPosition ? "absolute" : "flex justify-center"
                    }`}
                    ref={calendarContainerRef}
                >
                    {!!0 && <Arrow ref={arrowRef} />}

                    <div
                        className={`mt-2.5 py-0.5 bg-white dark:bg-slate-800 dark:text-white dark:border-slate-600 rounded-lg ${calendarBorders}`}
                    >
                        {renderHeader && renderHeader(contextValues)}

                        <div className="flex flex-col lg:flex-row py-2">
                            {showShortcuts && <Shortcuts />}
                            <div
                                className={`flex items-stretch flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-1.5 ${
                                    showShortcuts ? "md:pl-2" : "md:pl-1"
                                } pr-2 lg:pr-1`}
                            >
                                <Calendar
                                    date={firstDate}
                                    onClickPrevious={previousMonthFirst}
                                    onClickNext={nextMonthFirst}
                                    changeMonth={changeFirstMonth}
                                    changeYear={changeFirstYear}
                                    minDate={minDate}
                                    maxDate={maxDate}
                                />

                                {useRange && (
                                    <>
                                        <div className="flex items-center">
                                            <VerticalDash />
                                        </div>

                                        <Calendar
                                            date={secondDate}
                                            onClickPrevious={previousMonthSecond}
                                            onClickNext={nextMonthSecond}
                                            changeMonth={changeSecondMonth}
                                            changeYear={changeSecondYear}
                                            minDate={minDate}
                                            maxDate={maxDate}
                                        />
                                    </>
                                )}
                            </div>
                        </div>

                        {renderFooter && renderFooter(contextValues)}
                        {showFooter && <Footer />}
                    </div>
                </div>
            </div>
        </DatepickerContext.Provider>
    );
};

export default Datepicker;
