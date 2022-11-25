import React, {createContext} from "react";
import dayjs from "dayjs";
import {Configs, Period} from "../types";

type DateRange = {
    startDate: string | Date | null,
    endDate: string | Date | null,
} | null;

interface DatepickerStore {
    asSingle?: boolean,
    primaryColor: string,
    configs?: Configs | null,
    calendarContainer: React.RefObject<HTMLDivElement> | null,
    hideDatepicker: () => void,
    period: Period,
    changePeriod: (period: Period) => void,
    dayHover: string | null,
    changeDayHover: (day: string | null) => void,
    inputText: string,
    changeInputText: (text: string) => void,
    updateFirstDate: (date:  dayjs.Dayjs) => void,
    changeDatepickerValue: (value: DateRange) => void,
    showFooter?: boolean,
    placeholder?: string | null,
    separator?: string,
    i18n: string,
    value: DateRange
}

const DatepickerContext = createContext<DatepickerStore>({
    primaryColor: "blue",
    calendarContainer: null,
    hideDatepicker: () => {},
    period: {start: null, end: null},
    changePeriod: (period) => {},
    dayHover: null,
    changeDayHover: (day: string | null) => {},
    inputText: "",
    changeInputText: (text) => {},
    updateFirstDate: (date) => {},
    changeDatepickerValue: (value ) => {},
    showFooter: false,
    value: null,
    i18n: "en"
});

export default DatepickerContext;