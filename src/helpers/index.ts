import dayjs from "dayjs";

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

export function formatDate(date: dayjs.Dayjs, format = "YYYY-MM-DD") {
    return date.format(format);
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

export function getNumberOfDay(dayString: string): number {
    let number = 0;
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].forEach(
        (item, index) => {
            if (item.includes(dayString)) {
                number = index + 1;
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

export function loadLanguageModule(language = "en") {
    switch (language) {
        case "af":
            require("dayjs/locale/af");
            break;
        case "am":
            require("dayjs/locale/am");
            break;
        case "ar-dz":
            require("dayjs/locale/ar-dz");
            break;
        case "ar-iq":
            require("dayjs/locale/ar-iq");
            break;
        case "ar-kw":
            require("dayjs/locale/ar-kw");
            break;
        case "ar-ly":
            require("dayjs/locale/ar-ly");
            break;
        case "ar-ma":
            require("dayjs/locale/ar-ma");
            break;
        case "ar-sa":
            require("dayjs/locale/ar-sa");
            break;
        case "ar-tn":
            require("dayjs/locale/ar-tn");
            break;
        case "ar":
            require("dayjs/locale/ar");
            break;
        case "az":
            require("dayjs/locale/az");
            break;
        case "bg":
            require("dayjs/locale/bg");
            break;
        case "bi":
            require("dayjs/locale/bi");
            break;
        case "bm":
            require("dayjs/locale/bm");
            break;
        case "bn-bd":
            require("dayjs/locale/bn-bd");
            break;
        case "bn":
            require("dayjs/locale/bn");
            break;
        case "bo":
            require("dayjs/locale/bo");
            break;
        case "br":
            require("dayjs/locale/br");
            break;
        case "ca":
            require("dayjs/locale/ca");
            break;
        case "cs":
            require("dayjs/locale/cs");
            break;
        case "cv":
            require("dayjs/locale/cv");
            break;
        case "cy":
            require("dayjs/locale/cy");
            break;

        case "da":
            require("dayjs/locale/da");
            break;
        case "de-at":
            require("dayjs/locale/de-at");
            break;
        case "de-ch":
            require("dayjs/locale/de-ch");
            break;
        case "de":
            require("dayjs/locale/de");
            break;
        case "dv":
            require("dayjs/locale/dv");
            break;

        case "el":
            require("dayjs/locale/el");
            break;
        case "en-au":
            require("dayjs/locale/en-au");
            break;
        case "en-gb":
            require("dayjs/locale/en-gb");
            break;
        case "en-ie":
            require("dayjs/locale/en-ie");
            break;
        case "en-il":
            require("dayjs/locale/en-il");
            break;
        case "en-in":
            require("dayjs/locale/en-in");
            break;
        case "en-nz":
            require("dayjs/locale/en-nz");
            break;
        case "en-sg":
            require("dayjs/locale/en-sg");
            break;
        case "en-tt":
            require("dayjs/locale/en-tt");
            break;
        case "en":
            require("dayjs/locale/en");
            break;
        case "eo":
            require("dayjs/locale/eo");
            break;
        case "es-do":
            require("dayjs/locale/es-do");
            break;
        case "es-mx":
            require("dayjs/locale/es-mx");
            break;
        case "es-pr":
            require("dayjs/locale/es-pr");
            break;
        case "es-us":
            require("dayjs/locale/es-us");
            break;
        case "es":
            require("dayjs/locale/es");
            break;
        case "et":
            require("dayjs/locale/et");
            break;
        case "eu":
            require("dayjs/locale/eu");
            break;

        case "fa":
            require("dayjs/locale/fa");
            break;
        case "fi":
            require("dayjs/locale/fi");
            break;
        case "fo":
            require("dayjs/locale/fo");
            break;
        case "fr-ch":
            require("dayjs/locale/fr-ch");
            break;
        case "fr":
            require("dayjs/locale/fr");
            break;
        case "fy":
            require("dayjs/locale/fy");
            break;
        case "ga":
            require("dayjs/locale/ga");
            break;
        case "gd":
            require("dayjs/locale/gd");
            break;
        case "gl":
            require("dayjs/locale/gl");
            break;
        case "gom-latn":
            require("dayjs/locale/gom-latn");
            break;
        case "gu":
            require("dayjs/locale/gu");
            break;
        case "he":
            require("dayjs/locale/he");
            break;
        case "hi":
            require("dayjs/locale/hi");
            break;
        case "hr":
            require("dayjs/locale/hr");
            break;
        case "ht":
            require("dayjs/locale/ht");
            break;
        case "hu":
            require("dayjs/locale/hu");
            break;
        case "hy-am":
            require("dayjs/locale/hy-am");
            break;

        case "id":
            require("dayjs/locale/id");
            break;
        case "is":
            require("dayjs/locale/is");
            break;
        case "it-ch":
            require("dayjs/locale/it-ch");
            break;
        case "it":
            require("dayjs/locale/it");
            break;

        case "ja":
            require("dayjs/locale/ja");
            break;
        case "jv":
            require("dayjs/locale/jv");
            break;

        case "ka":
            require("dayjs/locale/ka");
            break;
        case "kk":
            require("dayjs/locale/kk");
            break;
        case "ko":
            require("dayjs/locale/ko");
            break;
        case "ku":
            require("dayjs/locale/ku");
            break;
        case "ky":
            require("dayjs/locale/ky");
            break;

        case "lb":
            require("dayjs/locale/lb");
            break;
        case "lo":
            require("dayjs/locale/lo");
            break;
        case "lt":
            require("dayjs/locale/lt");
            break;
        case "lv":
            require("dayjs/locale/lv");
            break;

        case "me":
            require("dayjs/locale/me");
            break;
        case "mi":
            require("dayjs/locale/mi");
            break;
        case "mk":
            require("dayjs/locale/mk");
            break;
        case "ml":
            require("dayjs/locale/ml");
            break;
        case "mn":
            require("dayjs/locale/mn");
            break;
        case "ms-my":
            require("dayjs/locale/ms-my");
            break;
        case "ms":
            require("dayjs/locale/ms");
            break;
        case "mt":
            require("dayjs/locale/mt");
            break;
        case "my":
            require("dayjs/locale/my");
            break;

        case "nb":
            require("dayjs/locale/nb");
            break;
        case "ne":
            require("dayjs/locale/ne");
            break;
        case "nl-be":
            require("dayjs/locale/nl-be");
            break;
        case "nl":
            require("dayjs/locale/nl");
            break;
        case "nn":
            require("dayjs/locale/nn");
            break;

        case "oc-lnc":
            require("dayjs/locale/oc-lnc");
            break;

        case "pa-in":
            require("dayjs/locale/pa-in");
            break;
        case "pl":
            require("dayjs/locale/pl");
            break;
        case "pt-br":
            require("dayjs/locale/pt-br");
            break;
        case "pt":
            require("dayjs/locale/pt");
            break;

        case "rn":
            require("dayjs/locale/rn");
            break;
        case "ro":
            require("dayjs/locale/ro");
            break;
        case "ru":
            require("dayjs/locale/ru");
            break;
        case "rw":
            require("dayjs/locale/rw");
            break;

        case "sd":
            require("dayjs/locale/sd");
            break;
        case "se":
            require("dayjs/locale/se");
            break;
        case "si":
            require("dayjs/locale/si");
            break;
        case "sk":
            require("dayjs/locale/sk");
            break;
        case "sl":
            require("dayjs/locale/sl");
            break;
        case "sq":
            require("dayjs/locale/sq");
            break;
        case "sr":
            require("dayjs/locale/sr");
            break;
        case "sr-cyrl":
            require("dayjs/locale/sr-cyrl");
            break;
        case "ss":
            require("dayjs/locale/ss");
            break;
        case "sv-fi":
            require("dayjs/locale/sv-fi");
            break;
        case "sv":
            require("dayjs/locale/sv");
            break;
        case "sw":
            require("dayjs/locale/sw");
            break;

        case "ta":
            require("dayjs/locale/ta");
            break;
        case "te":
            require("dayjs/locale/te");
            break;
        case "tg":
            require("dayjs/locale/tg");
            break;
        case "th":
            require("dayjs/locale/th");
            break;
        case "tk":
            require("dayjs/locale/tk");
            break;
        case "tl-ph":
            require("dayjs/locale/tl-ph");
            break;
        case "tlh":
            require("dayjs/locale/tlh");
            break;
        case "tr":
            require("dayjs/locale/tr");
            break;
        case "tzl":
            require("dayjs/locale/tzl");
            break;
        case "tzm-latn":
            require("dayjs/locale/tzm-latn");
            break;
        case "tzm":
            require("dayjs/locale/tzm");
            break;

        case "ug-cn":
            require("dayjs/locale/ug-cn");
            break;
        case "uk":
            require("dayjs/locale/uk");
            break;
        case "ur":
            require("dayjs/locale/ur");
            break;
        case "uz-latn":
            require("dayjs/locale/uz-latn");
            break;
        case "uz":
            require("dayjs/locale/uz");
            break;

        case "vi":
            require("dayjs/locale/vi");
            break;

        case "x-pseudo":
            require("dayjs/locale/x-pseudo");
            break;

        case "yo":
            require("dayjs/locale/yo");
            break;

        case "zh-cn":
            require("dayjs/locale/zh-cn");
            break;
        case "zh-hk":
            require("dayjs/locale/zh-hk");
            break;
        case "zh-tw":
            require("dayjs/locale/zh-tw");
            break;
        case "zh":
            require("dayjs/locale/zh");
            break;

        default:
            require("dayjs/locale/en");
            break;
    }
}

export function dateIsValid(date: Date | number) {
    return date instanceof Date && !isNaN(date.getTime());
}
