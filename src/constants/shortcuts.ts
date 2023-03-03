import dayjs from "dayjs";

import { formatDate, previousMonth } from "../helpers";
import { ShortcutsItem } from "../types";

const DEFAULT_SHORTCUTS: {
    [key in string]: ShortcutsItem | ShortcutsItem[];
} = {
    today: {
        text: "Today",
        period: {
            start: formatDate(dayjs()),
            end: formatDate(dayjs())
        }
    },
    yesterday: {
        text: "Yesterday",
        period: {
            start: formatDate(dayjs().subtract(1, "d")),
            end: formatDate(dayjs().subtract(1, "d"))
        }
    },
    past: [
        {
            daysNumber: 7,
            text: "Last 7 days",
            period: {
                start: formatDate(dayjs().subtract(7, "d")),
                end: formatDate(dayjs())
            }
        },
        {
            daysNumber: 30,
            text: "Last 30 days",
            period: {
                start: formatDate(dayjs().subtract(30, "d")),
                end: formatDate(dayjs())
            }
        }
    ],
    currentMonth: {
        text: "This month",
        period: {
            start: formatDate(dayjs().startOf("month")),
            end: formatDate(dayjs().endOf("month"))
        }
    },
    pastMonth: {
        text: "Last month",
        period: {
            start: formatDate(previousMonth(dayjs()).startOf("month")),
            end: formatDate(previousMonth(dayjs()).endOf("month"))
        }
    }
};

export default DEFAULT_SHORTCUTS;
