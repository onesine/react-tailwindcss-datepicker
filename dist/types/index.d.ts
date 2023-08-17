import React from "react";
import { COLORS } from "../constants";
import { DatepickerStore } from "../contexts/DatepickerContext";
export interface Period {
    start: string | null;
    end: string | null;
}
interface CustomShortcuts {
    [key: string]: ShortcutsItem;
}
interface DefaultShortcuts {
    today?: string;
    yesterday?: string;
    past?: (period: number) => string;
    currentMonth?: string;
    pastMonth?: string;
}
export interface Configs {
    shortcuts?: DefaultShortcuts | CustomShortcuts;
    footer?: {
        cancel?: string;
        apply?: string;
    };
}
export interface ShortcutsItem {
    text: string;
    daysNumber?: number;
    period: {
        start: Date | string;
        end: Date | string;
    };
}
export type DateType = string | null | Date;
export type DateRangeType = {
    startDate: DateType;
    endDate: DateType;
};
export type DateValueType = DateRangeType | null;
export type ClassNamesTypeProp = {
    container?: (p?: object | null | undefined) => string | undefined;
    input?: (p?: object | null | undefined) => string | undefined;
    toggleButton?: (p?: object | null | undefined) => string | undefined;
    footer?: (p?: object | null | undefined) => string | undefined;
};
export type PopoverDirectionType = "up" | "down";
export interface DatepickerType {
    asSingle?: boolean;
    classNames?: ClassNamesTypeProp | undefined;
    configs?: Configs;
    containerClassName?: ((className: string) => string) | string | null;
    dateLooking?: "forward" | "backward" | "middle";
    disableAutoHide: boolean;
    disabled?: boolean;
    disabledDates?: DateRangeType[] | null;
    displayFormat?: string;
    i18n?: string;
    inputClassName?: ((className: string) => string) | string | null;
    inputId?: string;
    inputName?: string;
    isStaticPosition?: boolean;
    maxDate?: Date | null;
    minDate?: Date | null;
    onChange: (value: DateValueType, e?: HTMLInputElement | null | undefined) => void;
    placeholder?: string;
    popoverDirection?: PopoverDirectionType;
    primaryColor?: ColorKeys;
    readOnly?: boolean;
    renderFooter?: (datepickerContext: DatepickerStore) => React.ReactNode;
    renderHeader?: (datepickerContext: DatepickerStore) => React.ReactNode;
    separator?: string;
    showFooter?: boolean;
    showShortcuts?: boolean;
    startFrom?: Date | null;
    startWeekOn?: string | null;
    toggleClassName?: ((className: string) => string) | string | null;
    toggleIcon?: (open: boolean) => React.ReactNode;
    useRange?: boolean;
    value: DateValueType;
}
export type ColorKeys = (typeof COLORS)[number];
export interface Colors {
    [key: string]: {
        [K in ColorKeys]: string;
    };
}
export {};
