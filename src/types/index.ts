import React from "react";

export interface Period {
    start: string | null;
    end: string | null;
}

export interface Configs {
    shortcuts?: {
        today?: string;
        yesterday?: string;
        past?: (period: number) => string;
        currentMonth?: string;
        pastMonth?: string;
    } | null;
    footer?: {
        cancel?: string;
        apply?: string;
    } | null;
}

export interface ShortcutsItem {
    text?: string;
    daysNumber?: number;
    period?: {
        start: string;
        end: string;
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

export type ClassNameParam = ClassNameParam[] | string | number | boolean | undefined;

export interface DatepickerType {
    primaryColor?: string;
    value: DateValueType;
    onChange: (value: DateValueType, e?: HTMLInputElement | null | undefined) => void;
    useRange?: boolean;
    showFooter?: boolean;
    showShortcuts?: boolean;
    configs?: {
        shortcuts?: {
            today?: string;
            yesterday?: string;
            past?: (period: number) => string;
            currentMonth?: string;
            pastMonth?: string;
        } | null;
        footer?: {
            cancel?: string;
            apply?: string;
        } | null;
    } | null;
    asSingle?: boolean;
    placeholder?: string;
    separator?: string;
    startFrom?: Date | null;
    i18n?: string;
    disabled?: boolean;
    classNames?: ClassNamesTypeProp | undefined;
    inputClassName?: ((args?: ClassNameParam) => string) | string | null;
    toggleClassName?: string | null;
    toggleIcon?: ((open: ClassNameParam) => React.ReactNode) | undefined;
    inputId?: string;
    inputName?: string;
    containerClassName?: ((args?: ClassNameParam) => string) | string | null;
    displayFormat?: string;
    readOnly?: boolean;
    minDate?: DateType | null;
    maxDate?: DateType | null;
    disabledDates?: DateRangeType[] | null;
    startWeekOn?: string | null;
}
