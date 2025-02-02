import { createContext, ReactNode, RefObject } from "react";

import {
    DATE_FORMAT,
    DEFAULT_COLOR,
    DEFAULT_DATE_LOOKING,
    DEFAULT_SEPARATOR,
    LANGUAGE,
    START_WEEK
} from "../constants";
import {
    Configs,
    Period,
    DateValueType,
    DateType,
    DateRangeType,
    ClassNamesTypeProp,
    PopoverDirectionType,
    ColorKeys,
    WeekStringType,
    DateLookingType
} from "../types";

interface DatepickerStore {
    arrowContainer: RefObject<HTMLDivElement | null> | null;
    asSingle?: boolean;

    calendarContainer: RefObject<HTMLDivElement | null> | null;
    changeDatepickerValue: (value: DateValueType, e?: HTMLInputElement | null) => void;
    changeDayHover: (day: DateType) => void;
    changeInputText: (text: string) => void;
    changePeriod: (period: Period) => void;
    classNames?: ClassNamesTypeProp;
    configs?: Configs;
    containerClassName?: ((className: string) => string) | string | null;

    dateLooking?: DateLookingType;
    dayHover: DateType;
    disabled?: boolean;
    disabledDates?: DateRangeType[] | null;
    displayFormat: string;

    hideDatepicker: () => void;

    i18n: string;
    input?: HTMLInputElement | null;
    inputClassName?: ((className: string) => string) | string | null;
    inputId?: string;
    inputName?: string;
    inputText: string;

    maxDate?: DateType | null;
    minDate?: DateType | null;

    period: Period;
    placeholder?: string | null;
    popoverDirection?: PopoverDirectionType;
    primaryColor: ColorKeys;

    readOnly?: boolean;
    required?: boolean;
    separator: string;

    showFooter?: boolean;
    startWeekOn?: WeekStringType | null;
    setInput: (value: HTMLInputElement | null) => void;

    toggleClassName?: ((className: string) => string) | string | null;
    toggleIcon?: (open: boolean) => ReactNode;

    updateFirstDate: (date: Date) => void;

    value: DateValueType;
}

const DatepickerContext = createContext<DatepickerStore>({
    arrowContainer: null,
    asSingle: false,

    calendarContainer: null,
    changeDatepickerValue: () => {},
    changeDayHover: () => {},
    changeInputText: () => {},
    changePeriod: () => {},
    classNames: undefined,
    configs: undefined,
    containerClassName: "",

    dateLooking: DEFAULT_DATE_LOOKING,
    dayHover: null,
    disabled: false,
    disabledDates: null,
    displayFormat: DATE_FORMAT,

    hideDatepicker: () => {},

    i18n: LANGUAGE,

    input: undefined,
    inputClassName: "",

    inputId: undefined,
    inputName: undefined,
    inputText: "",

    maxDate: null,
    minDate: null,

    period: { start: null, end: null },
    popoverDirection: undefined,
    primaryColor: DEFAULT_COLOR,

    readOnly: false,
    required: false,

    separator: DEFAULT_SEPARATOR,
    showFooter: false,
    startWeekOn: START_WEEK,
    setInput: () => {},

    toggleClassName: "",
    toggleIcon: undefined,

    updateFirstDate: () => {},

    value: null
});

export default DatepickerContext;
