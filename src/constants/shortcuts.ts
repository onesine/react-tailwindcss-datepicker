import { dateAdd, endDayOfMonth, firstDayOfMonth, previousMonthBy } from "../libs/date";
import { ShortcutsItem } from "../types";

const CURRENT_DATE = new Date();

const DEFAULT_SHORTCUTS: {
    [key in string]: ShortcutsItem | ShortcutsItem[];
} = {
    today: {
        text: "Today",
        period: {
            start: CURRENT_DATE,
            end: CURRENT_DATE
        }
    },
    yesterday: {
        text: "Yesterday",
        period: {
            start: dateAdd(CURRENT_DATE, -1, "day"),
            end: dateAdd(CURRENT_DATE, -1, "day")
        }
    },
    past: [
        {
            daysNumber: 7,
            text: "Last 7 days",
            period: {
                start: dateAdd(CURRENT_DATE, -7, "day"),
                end: CURRENT_DATE
            }
        },
        {
            daysNumber: 30,
            text: "Last 30 days",
            period: {
                start: dateAdd(CURRENT_DATE, -30, "day"),
                end: CURRENT_DATE
            }
        }
    ],
    currentMonth: {
        text: "This month",
        period: {
            start: firstDayOfMonth(CURRENT_DATE),
            end: endDayOfMonth(CURRENT_DATE)
        }
    },
    pastMonth: {
        text: "Last month",
        period: {
            start: firstDayOfMonth(previousMonthBy(CURRENT_DATE)),
            end: endDayOfMonth(previousMonthBy(CURRENT_DATE))
        }
    }
};

export default DEFAULT_SHORTCUTS;
