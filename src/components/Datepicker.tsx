import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Shortcuts from "../components/Shortcuts";
import {
    COLORS,
    DATE_FORMAT,
    DEFAULT_COLOR,
    DEFAULT_DATE_LOOKING,
    DEFAULT_SEPARATOR,
    LANGUAGE,
    START_WEEK
} from "../constants";
import DatepickerContext from "../contexts/DatepickerContext";
import useOnClickOutside from "../hooks";
import {
    dateFormat,
    dateIsAfter,
    dateIsSameOrAfter,
    dateIsSameOrBefore,
    dateIsValid,
    dateUpdateMonth,
    dateUpdateYear,
    firstDayOfMonth,
    nextMonthBy,
    previousMonthBy
} from "../libs/date";
import { Period, DatepickerType, ColorKeys, DateType } from "../types";

import Arrow from "./icons/Arrow";
import VerticalDash from "./VerticalDash";

const Datepicker = (props: DatepickerType) => {
    // Props
    const {
        asSingle = false,

        classNames = undefined,
        configs = undefined,
        containerClassName = null,

        dateLooking = DEFAULT_DATE_LOOKING,
        disabledDates = null,
        disabled = false,
        displayFormat = DATE_FORMAT,

        i18n = LANGUAGE,
        inputClassName = null,
        inputId,
        inputName,

        minDate = undefined,
        maxDate = undefined,

        onChange,

        placeholder = null,
        popupClassName = null,
        popoverDirection = undefined,
        primaryColor = DEFAULT_COLOR,

        separator = DEFAULT_SEPARATOR,
        showFooter = false,
        showShortcuts = false,
        startFrom = null,
        startWeekOn = START_WEEK,

        readOnly = false,
        required = false,

        toggleClassName = null,
        toggleIcon = undefined,

        useRange = true,
        value = null
    } = props;

    // Refs
    const containerRef = useRef<HTMLDivElement | null>(null);
    const calendarContainerRef = useRef<HTMLDivElement | null>(null);
    const arrowRef = useRef<HTMLDivElement | null>(null);

    // States
    const [firstDate, setFirstDate] = useState<Date>(
        startFrom && dateIsValid(startFrom) ? startFrom : new Date()
    );
    const [secondDate, setSecondDate] = useState<Date>(nextMonthBy(firstDate));
    const [period, setPeriod] = useState<Period>({
        start: null,
        end: null
    });
    const [dayHover, setDayHover] = useState<DateType>(null);
    const [inputText, setInputText] = useState<string>("");
    const [input, setInput] = useState<HTMLInputElement | null>(null);

    // Custom Hooks use
    useOnClickOutside(containerRef.current, () => {
        const container = containerRef.current;
        if (container) {
            hideDatepicker();
        }
    });

    // Functions
    const hideDatepicker = useCallback(() => {
        const div = calendarContainerRef.current;
        const arrow = arrowRef.current;
        if (arrow && div && div.classList.contains("block")) {
            div.classList.remove("block");
            div.classList.remove("translate-y-0");
            div.classList.remove("opacity-100");
            div.classList.add("translate-y-4");
            div.classList.add("opacity-0");
            setTimeout(() => {
                div.classList.remove("bottom-full");
                div.classList.add("hidden");
                div.classList.add("mb-2.5");
                div.classList.add("mt-2.5");
                arrow.classList.remove("-bottom-2");
                arrow.classList.remove("border-r");
                arrow.classList.remove("border-b");
                arrow.classList.add("border-l");
                arrow.classList.add("border-t");
            }, 300);
        }
    }, []);

    /* Start First */
    const firstGotoDate = useCallback(
        (date: Date) => {
            if (dateIsSameOrAfter(date, secondDate, "date")) {
                setSecondDate(nextMonthBy(date));
            }
            setFirstDate(date);
        },
        [secondDate]
    );

    const previousMonthFirst = useCallback(() => {
        setFirstDate(previousMonthBy(firstDate));
    }, [firstDate]);

    const nextMonthFirst = useCallback(() => {
        firstGotoDate(nextMonthBy(firstDate));
    }, [firstDate, firstGotoDate]);

    const changeFirstMonth = useCallback(
        (month: number) => {
            firstGotoDate(dateUpdateMonth(firstDate, month - 1));
        },
        [firstDate, firstGotoDate]
    );

    const changeFirstYear = useCallback(
        (year: number) => {
            firstGotoDate(dateUpdateYear(firstDate, year));
        },
        [firstDate, firstGotoDate]
    );
    /* End First */

    /* Start Second */
    const secondGotoDate = useCallback(
        (date: Date) => {
            dateIsSameOrBefore(date, firstDate, "date");
            if (dateIsSameOrBefore(date, firstDate, "date")) {
                setFirstDate(previousMonthBy(date));
            }
            setSecondDate(date);
        },
        [firstDate]
    );

    const previousMonthSecond = useCallback(() => {
        secondGotoDate(previousMonthBy(secondDate));
    }, [secondDate, secondGotoDate]);

    const nextMonthSecond = useCallback(() => {
        setSecondDate(nextMonthBy(secondDate));
    }, [secondDate]);

    const changeSecondMonth = useCallback(
        (month: number) => {
            secondGotoDate(dateUpdateMonth(secondDate, month - 1));
        },
        [secondDate, secondGotoDate]
    );

    const changeSecondYear = useCallback(
        (year: number) => {
            secondGotoDate(dateUpdateYear(secondDate, year));
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
            if (dateIsSameOrBefore(value.startDate, value.endDate, "date")) {
                setPeriod({
                    start: value.startDate,
                    end: value.endDate
                });

                setInputText(
                    `${dateFormat(value.startDate, displayFormat, i18n)}${
                        asSingle
                            ? ""
                            : ` ${separator} ${dateFormat(value.endDate, displayFormat, i18n)}`
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
    }, [asSingle, value, displayFormat, separator, i18n]);

    useEffect(() => {
        if (startFrom && dateIsValid(startFrom)) {
            const startDate = value?.startDate;
            const endDate = value?.endDate;

            if (startDate && dateIsValid(startDate)) {
                setFirstDate(startDate);
                if (!asSingle) {
                    if (
                        endDate &&
                        dateIsValid(endDate) &&
                        dateIsAfter(firstDayOfMonth(endDate), startDate, "date")
                    ) {
                        setSecondDate(endDate);
                    } else {
                        setSecondDate(nextMonthBy(startDate));
                    }
                }
            } else {
                setFirstDate(startFrom);
                setSecondDate(nextMonthBy(startFrom));
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
        if (minDate && !dateIsValid(minDate)) {
            /* eslint-disable */
            console.error(`minDate (${minDate}) is invalid date`);
            /* eslint-enable */
        }

        if (maxDate && !dateIsValid(maxDate)) {
            /* eslint-disable */
            console.error(`minDate (${maxDate}) is invalid date`);
            /* eslint-enable */
        }

        if (!i18n || i18n.length === 0) {
            /* eslint-disable */
            console.error(`i18n (${i18n}) is invalid`);
            /* eslint-enable */
        }

        return {
            arrowContainer: arrowRef,
            asSingle,
            calendarContainer: calendarContainerRef,
            changeDatepickerValue: onChange,
            changeDayHover: (newDay: DateType) => setDayHover(newDay),
            changeInputText: (newText: string) => setInputText(newText),
            changePeriod: (newPeriod: Period) => setPeriod(newPeriod),
            classNames,
            configs,
            containerClassName,
            dateLooking,
            dayHover,
            disabled,
            disabledDates,
            displayFormat,
            hideDatepicker,
            i18n: i18n && i18n.length > 0 ? i18n : LANGUAGE,
            input,
            setInput: (value: HTMLInputElement | null) => setInput(value),
            inputClassName,
            inputId,
            inputName,
            inputText,
            maxDate,
            minDate,
            onChange,
            period,
            placeholder,
            popoverDirection,
            primaryColor: safePrimaryColor,
            readOnly,
            required,
            separator,
            showFooter,
            startWeekOn: startWeekOn || START_WEEK,
            toggleClassName,
            toggleIcon,
            updateFirstDate: (newDate: Date) => firstGotoDate(newDate),
            value
        };
    }, [
        minDate,
        maxDate,
        i18n,
        asSingle,
        onChange,
        classNames,
        configs,
        containerClassName,
        dateLooking,
        dayHover,
        disabled,
        disabledDates,
        displayFormat,
        hideDatepicker,
        input,
        inputClassName,
        inputId,
        inputName,
        inputText,
        period,
        placeholder,
        popoverDirection,
        safePrimaryColor,
        readOnly,
        required,
        separator,
        showFooter,
        startWeekOn,
        toggleClassName,
        toggleIcon,
        value,
        firstGotoDate
    ]);

    const containerClassNameOverload = useMemo(() => {
        const defaultContainerClassName = "relative w-full text-gray-700";
        return typeof containerClassName === "function"
            ? containerClassName(defaultContainerClassName)
            : typeof containerClassName === "string" && containerClassName !== ""
              ? containerClassName
              : defaultContainerClassName;
    }, [containerClassName]);

    const popupClassNameOverload = useMemo(() => {
        const defaultPopupClassName =
            "transition-all ease-out duration-300 absolute z-10 mt-[1px] text-sm lg:text-xs 2xl:text-sm translate-y-4 opacity-0 hidden";
        return typeof popupClassName === "function"
            ? popupClassName(defaultPopupClassName)
            : typeof popupClassName === "string" && popupClassName !== ""
              ? popupClassName
              : defaultPopupClassName;
    }, [popupClassName]);

    return (
        <DatepickerContext.Provider value={contextValues}>
            <div className={containerClassNameOverload} ref={containerRef}>
                <Input />

                <div className={popupClassNameOverload} ref={calendarContainerRef}>
                    <Arrow ref={arrowRef} />

                    <div className="mt-2.5 shadow-sm border border-gray-300 px-1 py-0.5 bg-white dark:bg-slate-800 dark:text-white dark:border-slate-600 rounded-lg">
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

                        {showFooter && <Footer />}
                    </div>
                </div>
            </div>
        </DatepickerContext.Provider>
    );
};

export default Datepicker;
