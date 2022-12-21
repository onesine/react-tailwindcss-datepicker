import dayjs from "dayjs";
import React, { createContext } from "react";

import { Configs, Period } from "../types";

type DateRange = {
    startDate: string | Date | null;
    endDate: string | Date | null;
} | null;

interface DatepickerStore {
    asSingle?: boolean;
    primaryColor: string;
    configs?: Configs | null;
    calendarContainer: React.RefObject<HTMLDivElement> | null;
    arrowContainer: React.RefObject<HTMLDivElement> | null;
    hideDatepicker: () => void;
    period: Period;
    changePeriod: (period: Period) => void;
    dayHover: string | null;
    changeDayHover: (day: string | null) => void;
    inputText: string;
    changeInputText: (text: string) => void;
    updateFirstDate: (date: dayjs.Dayjs) => void;
    changeDatepickerValue: (value: DateRange) => void;
    showFooter?: boolean;
    placeholder?: string | null;
    separator?: string;
    i18n: string;
    value: DateRange;
    disabled?: boolean;
    inputClassName?: string | null;
    containerClassName?: string | null;
    readonly?: boolean;
}

const DatepickerContext = createContext<DatepickerStore>({
    primaryColor: "blue",
    calendarContainer: null,
    arrowContainer: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    hideDatepicker: () => {},
    period: { start: null, end: null },
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    changePeriod: period => {},
    dayHover: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    changeDayHover: (day: string | null) => {},
    inputText: "",
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    changeInputText: text => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    updateFirstDate: date => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    changeDatepickerValue: value => {},
    showFooter: false,
    value: null,
    i18n: "en",
    disabled: false,
    inputClassName: "",
    containerClassName: "",
    readonly: false
});

export default DatepickerContext;
