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
    PopoverDirectionType,
    ColorKeys
} from "../types";

export interface DatepickerStore {
    arrowContainer: React.RefObject<HTMLDivElement> | null;
    asSingle?: boolean;
    calendarContainer: React.RefObject<HTMLDivElement> | null;
    changeDatepickerValue: (value: DateValueType, e?: HTMLInputElement | null | undefined) => void;
    changeDayHover: (day: string | null) => void;
    changeInputText: (text: string) => void;
    changePeriod: (period: Period) => void;
    classNames?: ClassNamesTypeProp;
    configs?: Configs;
    containerClassName?: ((className: string) => string) | string | null;
    dateLooking?: "forward" | "backward" | "middle";
    dayHover: string | null;
    disableAutoHide: boolean;
    disabled?: boolean;
    disabledDates?: DateRangeType[] | null;
    displayFormat: string;
    hideDatepicker: () => void;
    i18n: string;
    input?: React.RefObject<HTMLInputElement>;
    inputClassName?: ((className: string) => string) | string | null;
    inputId?: string;
    inputName?: string;
    inputText: string;
    isStaticPosition: boolean;
    maxDate?: DateType | null;
    minDate?: DateType | null;
    period: Period;
    placeholder?: string | null;
    popoverDirection?: PopoverDirectionType;
    primaryColor: ColorKeys;
    readOnly?: boolean;
    separator: string;
    showDatePicker: () => void;
    showFooter?: boolean;
    startWeekOn?: string | null;
    toggleClassName?: ((className: string) => string) | string | null;
    toggleIcon?: (open: boolean) => React.ReactNode;
    toggleSingleView: (enableSigle: boolean) => void;
    updateFirstDate: (date: dayjs.Dayjs) => void;
    value: DateValueType;
}

const DatepickerContext = createContext<DatepickerStore>({
    arrowContainer: null,
    calendarContainer: null,
    // eslint-disable-next-line
    changeDatepickerValue: (value: DateValueType, e: HTMLInputElement | null | undefined) => {},
    // eslint-disable-next-line
    changeDayHover: (day: string | null) => {},
    // eslint-disable-next-line
    changeInputText: text => {},
    // eslint-disable-next-line
    changePeriod: period => {},
    classNames: undefined,
    configs: undefined,
    containerClassName: "",
    dateLooking: "forward",
    dayHover: null,
    disableAutoHide: false,
    disabled: false,
    disabledDates: null,
    displayFormat: DATE_FORMAT,
    // eslint-disable-next-line
    hideDatepicker: () => {},
    i18n: LANGUAGE,
    input: undefined,
    inputClassName: "",
    inputId: undefined,
    inputName: undefined,
    inputText: "",
    isStaticPosition: false,
    maxDate: null,
    minDate: null,
    period: { start: null, end: null },
    popoverDirection: undefined,
    primaryColor: "blue",
    readOnly: false,
    separator: "~",
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    showDatePicker: () => {},
    showFooter: false,
    startWeekOn: START_WEEK,
    toggleClassName: "",
    toggleIcon: undefined,
    // eslint-disable-next-line
    toggleSingleView: (enableSignle: boolean) => {},
    // eslint-disable-next-line
    updateFirstDate: date => {},
    value: null
});

export default DatepickerContext;
