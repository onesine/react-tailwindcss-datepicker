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
    endDate?: DateType;
};

export type DateValueType = DateRangeType | null;
