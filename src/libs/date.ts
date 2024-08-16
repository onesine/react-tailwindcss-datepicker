import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isToday from "dayjs/plugin/isToday";

import { LANGUAGE } from "../constants";
import { DateType, WeekDaysIndexType, WeekStringType } from "../types";

dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(isToday);

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

export function dateIsValid(date: DateType) {
    return dayjs(date).isValid();
}

export function isCurrentDay(date: Date) {
    if (!dateIsValid(date)) return false;

    return dayjs(date).isToday();
}

export function dateIsSame(a: Date, b: Date, unit: dayjs.OpUnitType) {
    if (!dateIsValid(a) || !dateIsValid(b)) return false;

    return dayjs(a).isSame(dayjs(b), unit);
}

export function dateIsBefore(a: Date, b: Date, unit: dayjs.OpUnitType) {
    if (!dateIsValid(a) || !dateIsValid(b)) return false;

    return dayjs(a).isBefore(dayjs(b), unit);
}

export function dateIsAfter(a: Date, b: Date, unit: dayjs.OpUnitType) {
    if (!dateIsValid(a) || !dateIsValid(b)) return false;

    return dayjs(a).isAfter(dayjs(b), unit);
}

export function dateIsSameOrBefore(a: DateType, b: DateType, unit: dayjs.OpUnitType) {
    if (!dateIsValid(a) || !dateIsValid(b)) return false;

    return dayjs(a).isSameOrBefore(dayjs(b), unit);
}

export function dateIsSameOrAfter(a: DateType, b: DateType, unit: dayjs.OpUnitType) {
    if (!dateIsValid(a) || !dateIsValid(b)) return false;

    return dayjs(a).isSameOrAfter(dayjs(b), unit);
}

export function dateIsBetween(
    whoIsBetween: Date,
    start: Date,
    end: Date,
    unit: dayjs.OpUnitType,
    include?: { start?: boolean; end?: boolean }
) {
    if (!dateIsValid(whoIsBetween) || !dateIsValid(start) || !dateIsValid(end)) {
        return false;
    }

    return dayjs(whoIsBetween).isBetween(
        dayjs(start),
        dayjs(end),
        unit,
        `${include?.start ? "[" : "("}${include?.end ? "]" : ")"}`
    );
}

export function dateFormat(date: DateType, format: string, local = "en") {
    if (!dateIsValid(date)) return null;

    return dayjs(date).locale(local).format(format);
}

export function dateStringToDate(dateString: string) {
    const parseDate = dayjs(dateString);

    if (!parseDate.isValid()) return null;

    return parseDate.toDate();
}

export function previousMonthBy(date: DateType) {
    if (!dateIsValid(date)) return dayjs().toDate();

    const parseDate = dayjs(date);

    return parseDate
        .date(1)
        .hour(0)
        .minute(0)
        .second(0)
        .month(parseDate.month() - 1)
        .toDate();
}

export function nextMonthBy(date: DateType) {
    if (!dateIsValid(date)) return dayjs().toDate();

    const parseDate = dayjs(date);

    return parseDate
        .date(1)
        .hour(0)
        .minute(0)
        .second(0)
        .month(parseDate.month() + 1)
        .toDate();
}

export function dateUpdateMonth(date: DateType, value: number) {
    if (!dateIsValid(date)) return dayjs().toDate();

    return dayjs(date).month(value).toDate();
}

export function dateUpdateYear(date: DateType, value: number) {
    if (!dateIsValid(date)) return dayjs().toDate();

    return dayjs(date).year(value).toDate();
}

export function firstDayOfMonth(date?: Date) {
    return dayjs(date || dayjs())
        .startOf("month")
        .toDate();
}

export function endDayOfMonth(date?: Date) {
    return dayjs(date || dayjs())
        .endOf("month")
        .toDate();
}

export function dayIndexInWeek(date?: Date) {
    return dayjs(date || dayjs()).day();
}

export function previousDaysInWeek(date: Date, weekStartDayIndex: WeekDaysIndexType = 0) {
    if (!dateIsValid(date)) return [];

    const dayIndex = dayIndexInWeek(date);

    const previousDays: Date[] = [];

    for (let i = weekStartDayIndex; i < dayIndex; i++) {
        previousDays.push(dayjs(date).day(i).toDate());
    }

    return previousDays;
}

export function nextDaysInWeek(date: Date, weekStartDayIndex: WeekDaysIndexType = 0) {
    if (!dateIsValid(date)) return [];

    const dayIndex = dayIndexInWeek(date);

    const nextDays: Date[] = [];

    let i = dayIndex + 1;

    if (weekStartDayIndex > i) {
        i = weekStartDayIndex;
    }

    for (i; i <= 6; i++) {
        nextDays.push(dayjs(date).day(i).toDate());
    }

    return nextDays;
}

export function daysInMonth(date?: dayjs.ConfigType) {
    const daysNumber = dayjs(date || dayjs()).daysInMonth();

    if (!daysNumber) return 0;

    return daysNumber;
}

export function allDaysInMonth(date?: Date) {
    if (!dateIsValid(date || new Date())) return [];

    const maxDaysInMonth = daysInMonth(date);

    const days: Date[] = [];

    for (let i = 1; i <= maxDaysInMonth; i++) {
        days.push(dayjs(date).date(i).toDate());
    }

    return days;
}

export function weekDayStringToIndex(dayString?: WeekStringType): WeekDaysIndexType {
    switch (dayString) {
        case "mon":
            return 0;
        case "tue":
            return 1;
        case "wed":
            return 2;
        case "thu":
            return 3;
        case "fri":
            return 4;
        case "sat":
            return 5;
        case "sun":
            return 6;
        default:
            return 0;
    }
}

export function dateAdd(date: Date, value: number, unit: dayjs.ManipulateType) {
    if (!dateIsValid(date)) return date;

    return dayjs(date).add(value, unit).toDate();
}

export function getNextDates(date: Date, limit: number) {
    if (!dateIsValid(date)) return [];

    const nexDates: Date[] = [];

    for (let i = 1; i <= limit; i++) {
        nexDates.push(dateAdd(date, i, "day"));
    }

    return nexDates;
}
