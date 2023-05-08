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
    } & { [key: string]: ShortcutsItem };
    footer?: {
        cancel?: string;
        apply?: string;
    };
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

export type PopoverDirectionType = "up" | "down";

export interface DatepickerType {
    primaryColor?: string;
    value: DateValueType;
    onChange: (value: DateValueType, e?: HTMLInputElement | null | undefined) => void;
    useRange?: boolean;
    showFooter?: boolean;
    showShortcuts?: boolean;
    configs?: Configs;
    asSingle?: boolean;
    placeholder?: string;
    separator?: string;
    startFrom?: Date | null;
    i18n?: string;
    disabled?: boolean;
    classNames?: ClassNamesTypeProp | undefined;
    containerClassName?: ((className: string) => string) | string | null;
    inputClassName?: ((className: string) => string) | string | null;
    toggleClassName?: ((className: string) => string) | string | null;
    toggleIcon?: (open: boolean) => React.ReactNode;
    inputId?: string;
    inputName?: string;
    displayFormat?: string;
    readOnly?: boolean;
    minDate?: DateType | null;
    maxDate?: DateType | null;
    disabledDates?: DateRangeType[] | null;
    startWeekOn?: string | null;
    popoverDirection?: PopoverDirectionType;
    justifyCalendar?: "start" | "end" | "center";
}
