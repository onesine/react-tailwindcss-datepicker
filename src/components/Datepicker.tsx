import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import dayjs from "dayjs";
import {formatDate, nextMonth, previousMonth} from "../helpers";
import Input from "../components/Input";
import Shortcuts from "../components/Shortcuts";
import useOnClickOutside from "../hooks";
import Footer from "../components/Footer";
import {COLORS, DEFAULT_COLOR} from "../constants";
import Calendar from "../components/Calendar";
import {Period} from "../types";
import {Arrow, VerticalDash} from "./utils";
import DatepickerContext from "../contexts/DatepickerContext";

interface Props {
    primaryColor?: string,
    value: {
        startDate: string | Date | null,
        endDate: string | Date | null
    } | null,
    onChange: (value: {startDate: string | Date | null, endDate: string | Date | null} | null) => void,
    useRange?: boolean,
    showFooter?: boolean,
    showShortcuts?: boolean,
    configs?: {
        shortcuts?: {
            today?: string,
            yesterday?: string,
            past?: (period: number) => string,
            currentMonth?: string,
            pastMonth?: string,
        } | null,
        footer?: {
            cancel?: string,
            apply?: string
        } | null
    } | null,
    asSingle?: boolean,
    placeholder?: string,
    separator?: string,
    startFrom?: Date | null,
    i18n?: string
}

const Datepicker: React.FC<Props> = ({primaryColor = "blue", value = null, onChange, useRange = true, showFooter = false, showShortcuts = false, configs = null, asSingle = false, placeholder = null, separator = "~", startFrom = null, i18n = "en"}) => {
    // Ref
    const containerRef = useRef<HTMLDivElement>(null);
    const calendarContainerRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);

    // State
    const [firstDate, setFirstDate] = useState<dayjs.Dayjs>((startFrom && dayjs(startFrom).isValid()) ? dayjs(startFrom) : dayjs());
    const [period, setPeriod] = useState<Period>({
        start: null,
        end: null
    });
    const [secondDate, setSecondDate] = useState<dayjs.Dayjs>(nextMonth(firstDate));
    const [dayHover, setDayHover] = useState<string | null>(null);
    const [inputText, setInputText] = useState<string>("");

    // Custom Hooks use
    useOnClickOutside(containerRef, () => {
        const container = containerRef.current;
        if (container) {
            hideDatepicker();
        }
    });

    // Functions
    const hideDatepicker = useCallback(() => {
        const div = calendarContainerRef.current;
        if (div && div.classList.contains("block")) {
            div.classList.remove("block");
            div.classList.remove("translate-y-0");
            div.classList.remove("opacity-1");
            div.classList.add("translate-y-4");
            div.classList.add("opacity-0");
            setTimeout(() => {
                div.classList.add("hidden");
            }, 300)
        }
    }, []);

    const firstGotoDate = useCallback((date:  dayjs.Dayjs) => {
        const newDate = dayjs(formatDate(date));
        const reformatDate = dayjs(formatDate(secondDate))
        if (newDate.isSame(reformatDate) || newDate.isAfter(reformatDate)) {
            setSecondDate(nextMonth(date));
        }
        setFirstDate(date);
    }, [secondDate]);

    const previousMonthFirst = useCallback(() => {
        setFirstDate(previousMonth(firstDate));
    }, [firstDate]);

    const nextMonthFirst = useCallback(() => {
        firstGotoDate(nextMonth(firstDate));
    }, [firstDate, firstGotoDate]);

    const secondGotoDate = useCallback((date:  dayjs.Dayjs) => {
        const newDate = dayjs(formatDate(date))
        const reformatDate = dayjs(formatDate(firstDate))
        if (newDate.isSame(reformatDate) || newDate.isBefore(reformatDate)) {
            setFirstDate(previousMonth(date));
        }
        setSecondDate(date);
    }, [firstDate]);

    const previousMonthSecond = useCallback(() => {
        secondGotoDate(previousMonth(secondDate))
    }, [secondDate, secondGotoDate]);

    const nextMonthSecond = useCallback(() => {
        setSecondDate(nextMonth(secondDate));
    }, [secondDate]);

    const changeFirstMonth = useCallback((month: number) => {
        firstGotoDate(dayjs(`${firstDate.year()}-${month < 10 ? '0' : ''}${month}-01`));
    }, [firstDate, firstGotoDate]);

    const changeSecondMonth = useCallback((month: number) => {
        secondGotoDate(dayjs(`${secondDate.year()}-${month < 10 ? '0' : ''}${month}-01`));
    }, [secondDate, secondGotoDate]);

    const changeFirstYear = useCallback((year: number) => {
        firstGotoDate(dayjs(`${year}-${firstDate.month() + 1}-01`));
    }, [firstDate, firstGotoDate]);

    const changeSecondYear = useCallback((year: number) => {
        secondGotoDate(dayjs(`${year}-${secondDate.month() + 1}-01`))
    }, [secondDate, secondGotoDate]);

    // UseEffects & UseLayoutEffect
    useEffect(() => {
        const container = containerRef.current;
        const calendarContainer = calendarContainerRef.current;
        const arrow = arrowRef.current;

        if (container && calendarContainer && arrow) {
            const detail = container.getBoundingClientRect();
            const screenCenter = window.innerWidth / 2;
            const containerCenter = ((detail.right - detail.x) / 2) + detail.x;
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
            const condition = validDate && (startDate.isSame(endDate) || startDate.isBefore(endDate));
            if (condition) {
                setPeriod({
                    start: formatDate(startDate),
                    end: formatDate(endDate)
                });
                setInputText(`${formatDate(startDate)}${asSingle ? '' : ` ~ ${formatDate(endDate)}`}`);
            }
        }

        if (value && (value.startDate === null) && (value.endDate === null)) {
            setPeriod({
                start: null,
                end: null
            });
        }
    }, [asSingle, value]);

    // Variable
    const colorPrimary = useMemo(() => {
        if (COLORS.includes(primaryColor)) {
            return primaryColor;
        }
        return DEFAULT_COLOR;
    }, [primaryColor]);
    const contextValues = useMemo(() => {
        return {
            asSingle,
            primaryColor: colorPrimary,
            configs,
            calendarContainer: calendarContainerRef,
            hideDatepicker,
            period,
            changePeriod: (newPeriod: Period) => setPeriod(newPeriod),
            dayHover,
            changeDayHover: (newDay: string | null) => setDayHover(newDay),
            inputText,
            changeInputText: (newText: string) => setInputText(newText),
            updateFirstDate: (newDate:  dayjs.Dayjs) => firstGotoDate(newDate),
            changeDatepickerValue: onChange,
            showFooter,
            placeholder,
            separator,
            i18n,
            value
        };
    }, [asSingle, colorPrimary, configs, dayHover, firstGotoDate, hideDatepicker, i18n, inputText, onChange, period, placeholder, separator, showFooter, value]);

    return (
        <DatepickerContext.Provider value={contextValues}>
            <div className="relative w-full text-gray-700" ref={containerRef}>
                <Input/>

                <div className="transition-all ease-out duration-300 absolute z-10 mt-[1px] text-sm lg:text-xs 2xl:text-sm translate-y-4 opacity-0 hidden" ref={calendarContainerRef}>
                    <Arrow ref={arrowRef}/>

                    <div className="mt-2.5 shadow-sm border border-gray-300 px-1 py-0.5 bg-white dark:bg-slate-800 dark:text-white dark:border-slate-600 rounded-lg">
                        <div className="flex flex-col lg:flex-row py-2">

                            {showShortcuts && (
                                <Shortcuts/>
                            )}

                            <div className={`flex items-stretch flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-1.5 ${showShortcuts ? 'md:pl-2' : 'md:pl-1'} pr-2 lg:pr-1`}>
                                <Calendar
                                    date={firstDate}
                                    onClickPrevious={previousMonthFirst}
                                    onClickNext={nextMonthFirst}
                                    changeMonth={changeFirstMonth}
                                    changeYear={changeFirstYear}
                                />

                                {useRange && (
                                    <>
                                        <div className="flex items-center">
                                            <VerticalDash/>
                                        </div>

                                        <Calendar
                                            date={secondDate}
                                            onClickPrevious={previousMonthSecond}
                                            onClickNext={nextMonthSecond}
                                            changeMonth={changeSecondMonth}
                                            changeYear={changeSecondYear}
                                        />
                                    </>
                                )}

                            </div>
                        </div>

                        {showFooter && (
                            <Footer/>
                        )}
                    </div>
                </div>
            </div>
        </DatepickerContext.Provider>
    );
};

export default Datepicker;