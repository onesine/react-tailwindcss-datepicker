import React from "react";
import dayjs from "dayjs";
import { Configs, Period } from "../types";
interface DatepickerStore {
    asSingle?: boolean;
    primaryColor: string;
    configs?: Configs | null;
    calendarContainer: React.RefObject<HTMLDivElement> | null;
    hideDatepicker: () => void;
    period: Period;
    changePeriod: (period: Period) => void;
    dayHover: string | null;
    changeDayHover: (day: string | null) => void;
    inputText: string;
    changeInputText: (text: string) => void;
    updateFirstDate: (date: dayjs.Dayjs) => void;
    changeDatepickerValue: (value: {
        startDate: string | null;
        endDate: string | null;
    }) => void;
    showFooter?: boolean;
    placeholder?: string | null;
    separator?: string;
    i18n: string;
    value: {
        startDate: Date | string;
        endDate: Date | string;
    } | null;
}
declare const DatepickerContext: React.Context<DatepickerStore>;
export default DatepickerContext;
