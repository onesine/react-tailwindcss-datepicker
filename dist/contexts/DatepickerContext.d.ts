import dayjs from "dayjs";
import React from "react";
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
declare const DatepickerContext: React.Context<DatepickerStore>;
export default DatepickerContext;
