import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import weekday from "dayjs/plugin/weekday";

dayjs.extend(weekday);
dayjs.extend(customParseFormat);

import { DATE_FORMAT, LANGUAGE } from "../constants";

export function classNames(...classes: (false | null | undefined | string)[]) {
    return classes.filter(Boolean).join(" ");
}

export function getTextColorByPrimaryColor(color: string) {
    switch (color) {
        case "blue":
            return "text-blue-500";
        case "orange":
            return "text-orange-500";
        case "yellow":
            return "text-yellow-500";
        case "red":
            return "text-red-500";
        case "purple":
            return "text-purple-500";
        case "amber":
            return "text-amber-500";
        case "lime":
            return "text-lime-500";
        case "green":
            return "text-green-500";
        case "emerald":
            return "text-emerald-500";
        case "teal":
            return "text-teal-500";
        case "cyan":
            return "text-cyan-500";
        case "sky":
            return "text-sky-500";
        case "indigo":
            return "text-indigo-500";
        case "violet":
            return "text-violet-500";
        case "fuchsia":
            return "text-fuchsia-500";
        case "pink":
            return "text-pink-500";
        case "rose":
            return "text-rose-500";
        default:
            return "";
    }
}

export function generateArrayNumber(start = 0, end = 0) {
    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }

    return array;
}

export function shortString(value: string, limit = 3) {
    return value.slice(0, limit);
}

export function ucFirst(value: string) {
    return `${value[0].toUpperCase()}${value.slice(1, value.length)}`;
}

export function formatDate(date: dayjs.Dayjs, format = DATE_FORMAT) {
    return date.format(format);
}

export function parseFormattedDate(date: string, format = DATE_FORMAT) {
    return dayjs(date, format);
}

export function getFirstDayInMonth(date: string | dayjs.Dayjs) {
    return {
        ddd: formatDate(dayjs(date).startOf("month"), "ddd"),
        basic: formatDate(dayjs(date).startOf("month")),
        object: dayjs(date).startOf("month")
    };
}

export function getLastDayInMonth(date: string) {
    return {
        ddd: formatDate(dayjs(date).endOf("month"), "ddd"),
        basic: formatDate(dayjs(date).endOf("month")),
        object: dayjs(date).endOf("month")
    };
}

export function getDaysInMonth(date: string | dayjs.Dayjs) {
    if (!isNaN(dayjs(date).daysInMonth())) {
        return [...generateArrayNumber(1, dayjs(date).daysInMonth())];
    }
    return [];
}

export function nextMonth(date: dayjs.Dayjs) {
    return date
        .date(1)
        .hour(0)
        .minute(0)
        .second(0)
        .month(date.month() + 1);
}

export function previousMonth(date: dayjs.Dayjs) {
    return date
        .date(1)
        .hour(0)
        .minute(0)
        .second(0)
        .month(date.month() - 1);
}

export function getFirstElementsInArray(array: number[] = [], size = 0) {
    return array.slice(0, size);
}

export function getLastElementsInArray(array: number[] = [], size = 0) {
    const result: number[] = [];
    if (Array.isArray(array) && size > 0) {
        if (size >= array.length) {
            return array;
        }

        let y = array.length - 1;
        for (let i = 0; i < size; i++) {
            result.push(array[y]);
            y--;
        }
    }
    return result.reverse();
}

export function getNumberOfDay(dayString: string, startWeekOn?: string | null | undefined): number {
    let number = 0;

    let startDateModifier = 0;

    if (startWeekOn) {
        switch (startWeekOn) {
            case "mon":
                startDateModifier = 6;
                break;
            case "tue":
                startDateModifier = 5;
                break;
            case "wed":
                startDateModifier = 4;
                break;
            case "thu":
                startDateModifier = 3;
                break;
            case "fri":
                startDateModifier = 2;
                break;
            case "sat":
                startDateModifier = 1;
                break;
            case "sun":
                startDateModifier = 0;
                break;
            default:
                break;
        }
    }

    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].forEach(
        (item, index) => {
            if (item.includes(dayString)) {
                number = (index + startDateModifier) % 7;
            }
        }
    );

    return number;
}

export function getLastDaysInMonth(date: dayjs.Dayjs | string, size = 0) {
    return getLastElementsInArray(getDaysInMonth(date), size);
}

export function getFirstDaysInMonth(date: string | dayjs.Dayjs, size = 0) {
    return getFirstElementsInArray(getDaysInMonth(date), size);
}

export function loadLanguageModule(language = LANGUAGE) {
    switch (language) {
        case "af":
            import("dayjs/locale/af");
            break;
        case "am":
            import("dayjs/locale/am");
            break;
        case "ar-dz":
            import("dayjs/locale/ar-dz");
            break;
        case "ar-iq":
            import("dayjs/locale/ar-iq");
            break;
        case "ar-kw":
            import("dayjs/locale/ar-kw");
            break;
        case "ar-ly":
            import("dayjs/locale/ar-ly");
            break;
        case "ar-ma":
            import("dayjs/locale/ar-ma");
            break;
        case "ar-sa":
            import("dayjs/locale/ar-sa");
            break;
        case "ar-tn":
            import("dayjs/locale/ar-tn");
            break;
        case "ar":
            import("dayjs/locale/ar");
            break;
        case "az":
            import("dayjs/locale/az");
            break;
        case "bg":
            import("dayjs/locale/bg");
            break;
        case "bi":
            import("dayjs/locale/bi");
            break;
        case "bm":
            import("dayjs/locale/bm");
            break;
        case "bn-bd":
            import("dayjs/locale/bn-bd");
            break;
        case "bn":
            import("dayjs/locale/bn");
            break;
        case "bo":
            import("dayjs/locale/bo");
            break;
        case "br":
            import("dayjs/locale/br");
            break;
        case "ca":
            import("dayjs/locale/ca");
            break;
        case "cs":
            import("dayjs/locale/cs");
            break;
        case "cv":
            import("dayjs/locale/cv");
            break;
        case "cy":
            import("dayjs/locale/cy");
            break;

        case "da":
            import("dayjs/locale/da");
            break;
        case "de-at":
            import("dayjs/locale/de-at");
            break;
        case "de-ch":
            import("dayjs/locale/de-ch");
            break;
        case "de":
            import("dayjs/locale/de");
            break;
        case "dv":
            import("dayjs/locale/dv");
            break;

        case "el":
            import("dayjs/locale/el");
            break;
        case "en-au":
            import("dayjs/locale/en-au");
            break;
        case "en-gb":
            import("dayjs/locale/en-gb");
            break;
        case "en-ie":
            import("dayjs/locale/en-ie");
            break;
        case "en-il":
            import("dayjs/locale/en-il");
            break;
        case "en-in":
            import("dayjs/locale/en-in");
            break;
        case "en-nz":
            import("dayjs/locale/en-nz");
            break;
        case "en-sg":
            import("dayjs/locale/en-sg");
            break;
        case "en-tt":
            import("dayjs/locale/en-tt");
            break;
        case "en":
            import("dayjs/locale/en");
            break;
        case "eo":
            import("dayjs/locale/eo");
            break;
        case "es-do":
            import("dayjs/locale/es-do");
            break;
        case "es-mx":
            import("dayjs/locale/es-mx");
            break;
        case "es-pr":
            import("dayjs/locale/es-pr");
            break;
        case "es-us":
            import("dayjs/locale/es-us");
            break;
        case "es":
            import("dayjs/locale/es");
            break;
        case "et":
            import("dayjs/locale/et");
            break;
        case "eu":
            import("dayjs/locale/eu");
            break;

        case "fa":
            import("dayjs/locale/fa");
            break;
        case "fi":
            import("dayjs/locale/fi");
            break;
        case "fo":
            import("dayjs/locale/fo");
            break;
        case "fr-ch":
            import("dayjs/locale/fr-ch");
            break;
        case "fr":
            import("dayjs/locale/fr");
            break;
        case "fy":
            import("dayjs/locale/fy");
            break;
        case "ga":
            import("dayjs/locale/ga");
            break;
        case "gd":
            import("dayjs/locale/gd");
            break;
        case "gl":
            import("dayjs/locale/gl");
            break;
        case "gom-latn":
            import("dayjs/locale/gom-latn");
            break;
        case "gu":
            import("dayjs/locale/gu");
            break;
        case "he":
            import("dayjs/locale/he");
            break;
        case "hi":
            import("dayjs/locale/hi");
            break;
        case "hr":
            import("dayjs/locale/hr");
            break;
        case "ht":
            import("dayjs/locale/ht");
            break;
        case "hu":
            import("dayjs/locale/hu");
            break;
        case "hy-am":
            import("dayjs/locale/hy-am");
            break;

        case "id":
            import("dayjs/locale/id");
            break;
        case "is":
            import("dayjs/locale/is");
            break;
        case "it-ch":
            import("dayjs/locale/it-ch");
            break;
        case "it":
            import("dayjs/locale/it");
            break;

        case "ja":
            import("dayjs/locale/ja");
            break;
        case "jv":
            import("dayjs/locale/jv");
            break;

        case "ka":
            import("dayjs/locale/ka");
            break;
        case "kk":
            import("dayjs/locale/kk");
            break;
        case "ko":
            import("dayjs/locale/ko");
            break;
        case "ku":
            import("dayjs/locale/ku");
            break;
        case "ky":
            import("dayjs/locale/ky");
            break;

        case "lb":
            import("dayjs/locale/lb");
            break;
        case "lo":
            import("dayjs/locale/lo");
            break;
        case "lt":
            import("dayjs/locale/lt");
            break;
        case "lv":
            import("dayjs/locale/lv");
            break;

        case "me":
            import("dayjs/locale/me");
            break;
        case "mi":
            import("dayjs/locale/mi");
            break;
        case "mk":
            import("dayjs/locale/mk");
            break;
        case "ml":
            import("dayjs/locale/ml");
            break;
        case "mn":
            import("dayjs/locale/mn");
            break;
        case "ms-my":
            import("dayjs/locale/ms-my");
            break;
        case "ms":
            import("dayjs/locale/ms");
            break;
        case "mt":
            import("dayjs/locale/mt");
            break;
        case "my":
            import("dayjs/locale/my");
            break;

        case "nb":
            import("dayjs/locale/nb");
            break;
        case "ne":
            import("dayjs/locale/ne");
            break;
        case "nl-be":
            import("dayjs/locale/nl-be");
            break;
        case "nl":
            import("dayjs/locale/nl");
            break;
        case "nn":
            import("dayjs/locale/nn");
            break;

        case "oc-lnc":
            import("dayjs/locale/oc-lnc");
            break;

        case "pa-in":
            import("dayjs/locale/pa-in");
            break;
        case "pl":
            import("dayjs/locale/pl");
            break;
        case "pt-br":
            import("dayjs/locale/pt-br");
            break;
        case "pt":
            import("dayjs/locale/pt");
            break;

        case "rn":
            import("dayjs/locale/rn");
            break;
        case "ro":
            import("dayjs/locale/ro");
            break;
        case "ru":
            import("dayjs/locale/ru");
            break;
        case "rw":
            import("dayjs/locale/rw");
            break;

        case "sd":
            import("dayjs/locale/sd");
            break;
        case "se":
            import("dayjs/locale/se");
            break;
        case "si":
            import("dayjs/locale/si");
            break;
        case "sk":
            import("dayjs/locale/sk");
            break;
        case "sl":
            import("dayjs/locale/sl");
            break;
        case "sq":
            import("dayjs/locale/sq");
            break;
        case "sr":
            import("dayjs/locale/sr");
            break;
        case "sr-cyrl":
            import("dayjs/locale/sr-cyrl");
            break;
        case "ss":
            import("dayjs/locale/ss");
            break;
        case "sv-fi":
            import("dayjs/locale/sv-fi");
            break;
        case "sv":
            import("dayjs/locale/sv");
            break;
        case "sw":
            import("dayjs/locale/sw");
            break;

        case "ta":
            import("dayjs/locale/ta");
            break;
        case "te":
            import("dayjs/locale/te");
            break;
        case "tg":
            import("dayjs/locale/tg");
            break;
        case "th":
            import("dayjs/locale/th");
            break;
        case "tk":
            import("dayjs/locale/tk");
            break;
        case "tl-ph":
            import("dayjs/locale/tl-ph");
            break;
        case "tlh":
            import("dayjs/locale/tlh");
            break;
        case "tr":
            import("dayjs/locale/tr");
            break;
        case "tzl":
            import("dayjs/locale/tzl");
            break;
        case "tzm-latn":
            import("dayjs/locale/tzm-latn");
            break;
        case "tzm":
            import("dayjs/locale/tzm");
            break;

        case "ug-cn":
            import("dayjs/locale/ug-cn");
            break;
        case "uk":
            import("dayjs/locale/uk");
            break;
        case "ur":
            import("dayjs/locale/ur");
            break;
        case "uz-latn":
            import("dayjs/locale/uz-latn");
            break;
        case "uz":
            import("dayjs/locale/uz");
            break;

        case "vi":
            import("dayjs/locale/vi");
            break;

        case "x-pseudo":
            import("dayjs/locale/x-pseudo");
            break;

        case "yo":
            import("dayjs/locale/yo");
            break;

        case "zh-cn":
            import("dayjs/locale/zh-cn");
            break;
        case "zh-hk":
            import("dayjs/locale/zh-hk");
            break;
        case "zh-tw":
            import("dayjs/locale/zh-tw");
            break;
        case "zh":
            import("dayjs/locale/zh");
            break;

        default:
            import("dayjs/locale/en");
            break;
    }
}

export function dateIsValid(date: Date | number) {
    return date instanceof Date && !isNaN(date.getTime());
}

export function formatDateTimeToISO(
    dateIncoming: Date,
    hourIncoming: number,
    minute: number,
    period: string
): string {
    // Adjust hour based on period (AM/PM)
    const hour = (() => {
        if (period === "PM" && hourIncoming !== 12) return hourIncoming + 12;

        if (period === "AM" && hourIncoming === 12) return 0;

        return hourIncoming;
    })();

    // Create a new Date object and set the components
    const date = new Date(dateIncoming);
    date.setHours(hour);
    date.setMinutes(minute);

    // Format date to ISO 8601
    const isoString = date.toISOString();
    return isoString;
}
