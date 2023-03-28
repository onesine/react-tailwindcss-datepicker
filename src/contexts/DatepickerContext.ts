import dayjs from "dayjs";
import React, { createContext } from "react";

import { DATE_FORMAT, LANGUAGE, START_WEEK } from "../constants";
import {
    Configs,
    Period,
    DateValueType,
    DateType,
    DateRangeType,
    ClassNamesTypeProp,
    ClassNameParam
} from "../types";

interface DatepickerStore {
    input?: React.RefObject<HTMLInputElement>;
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
    changeDatepickerValue: (value: DateValueType, e?: HTMLInputElement | null | undefined) => void;
    showFooter?: boolean;
    placeholder?: string | null;
    separator?: string;
    i18n: string;
    value: DateValueType;
    disabled?: boolean;
    inputClassName?: ((args?: ClassNameParam) => string) | string | null;
    containerClassName?: ((args?: ClassNameParam) => string) | string | null;
    toggleClassName?: ((args?: ClassNameParam) => string) | string | null;
    toggleIcon?: (open: boolean) => React.ReactNode;
    readOnly?: boolean;
    startWeekOn?: string | null;
    displayFormat?: string;
    minDate?: DateType | null;
    maxDate?: DateType | null;
    disabledDates?: DateRangeType[] | null;
    inputId?: string;
    inputName?: string;
    classNames?: ClassNamesTypeProp | undefined;
    isClearable?: boolean;
}

const DatepickerContext = createContext<DatepickerStore>({
    input: undefined,
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
    changeDatepickerValue: (
        // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
        value: DateValueType,
        // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
        e: HTMLInputElement | null | undefined
        // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    ) => {},
    showFooter: false,
    value: null,
    i18n: LANGUAGE,
    disabled: false,
    inputClassName: "",
    containerClassName: "",
    toggleClassName: "",
    readOnly: false,
    displayFormat: DATE_FORMAT,
    minDate: null,
    maxDate: null,
    disabledDates: null,
    inputId: undefined,
    inputName: undefined,
    startWeekOn: START_WEEK,
    toggleIcon: undefined,
    classNames: undefined
});

export default DatepickerContext;
