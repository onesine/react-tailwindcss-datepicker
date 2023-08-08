import dayjs from "dayjs";
export declare function classNames(...classes: (false | null | undefined | string)[]): string;
export declare function getTextColorByPrimaryColor(color: string): "" | "text-blue-500" | "text-orange-500" | "text-yellow-500" | "text-red-500" | "text-purple-500" | "text-amber-500" | "text-lime-500" | "text-green-500" | "text-emerald-500" | "text-teal-500" | "text-cyan-500" | "text-sky-500" | "text-indigo-500" | "text-violet-500" | "text-fuchsia-500" | "text-pink-500" | "text-rose-500";
export declare function generateArrayNumber(start?: number, end?: number): number[];
export declare function shortString(value: string, limit?: number): string;
export declare function ucFirst(value: string): string;
export declare function formatDate(date: dayjs.Dayjs, format?: string): string;
export declare function parseFormattedDate(date: string, format?: string): dayjs.Dayjs;
export declare function getFirstDayInMonth(date: string | dayjs.Dayjs): {
    ddd: string;
    basic: string;
    object: dayjs.Dayjs;
};
export declare function getLastDayInMonth(date: string): {
    ddd: string;
    basic: string;
    object: dayjs.Dayjs;
};
export declare function getDaysInMonth(date: string | dayjs.Dayjs): number[];
export declare function nextMonth(date: dayjs.Dayjs): dayjs.Dayjs;
export declare function previousMonth(date: dayjs.Dayjs): dayjs.Dayjs;
export declare function getFirstElementsInArray(array?: number[], size?: number): number[];
export declare function getLastElementsInArray(array?: number[], size?: number): number[];
export declare function getNumberOfDay(dayString: string, startWeekOn?: string | null | undefined): number;
export declare function getLastDaysInMonth(date: dayjs.Dayjs | string, size?: number): number[];
export declare function getFirstDaysInMonth(date: string | dayjs.Dayjs, size?: number): number[];
export declare function loadLanguageModule(language?: string): void;
export declare function dateIsValid(date: Date | number): boolean;
