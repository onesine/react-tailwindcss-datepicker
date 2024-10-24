import { memo, ReactNode, useCallback, useContext, useMemo } from "react";

import { TEXT_COLOR } from "../constants";
import DEFAULT_SHORTCUTS from "../constants/shortcuts";
import DatepickerContext from "../contexts/DatepickerContext";
import { dateIsSameOrBefore } from "../libs/date";
import { Period, ShortcutsItem } from "../types";

interface ItemTemplateProps {
    children: ReactNode;
    key: number;
    item: ShortcutsItem | ShortcutsItem[];
}

const ItemTemplate = memo((props: ItemTemplateProps) => {
    const {
        primaryColor,
        period,
        changePeriod,
        updateFirstDate,
        dayHover,
        changeDayHover,
        hideDatepicker,
        changeDatepickerValue
    } = useContext(DatepickerContext);

    // Functions
    const getClassName = useCallback(() => {
        const textColor = TEXT_COLOR["600"][primaryColor as keyof (typeof TEXT_COLOR)["600"]];
        const textColorHover = TEXT_COLOR.hover[primaryColor as keyof typeof TEXT_COLOR.hover];
        return `whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer ${textColor} ${textColorHover}`;
    }, [primaryColor]);

    const chosePeriod = useCallback(
        (item: Period) => {
            if (dayHover) {
                changeDayHover(null);
            }
            if (period.start || period.end) {
                changePeriod({
                    start: null,
                    end: null
                });
            }
            changePeriod(item);
            changeDatepickerValue({
                startDate: item.start,
                endDate: item.end
            });

            if (item.start) updateFirstDate(item.start);
            hideDatepicker();
        },
        [
            changeDatepickerValue,
            changeDayHover,
            changePeriod,
            dayHover,
            hideDatepicker,
            period.end,
            period.start,
            updateFirstDate
        ]
    );

    const children = props?.children;

    return (
        <li
            className={getClassName()}
            onClick={() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                chosePeriod(props?.item.period);
            }}
        >
            {children}
        </li>
    );
});

ItemTemplate.displayName = "ItemTemplate";

const Shortcuts = () => {
    // Contexts
    const { configs } = useContext(DatepickerContext);

    const callPastFunction = useCallback((data: unknown, numberValue: number) => {
        return typeof data === "function" ? data(numberValue) : null;
    }, []);

    const shortcutOptions = useMemo<[string, ShortcutsItem | ShortcutsItem[]][]>(() => {
        if (!configs?.shortcuts) {
            return Object.entries(DEFAULT_SHORTCUTS);
        }

        return Object.entries(configs.shortcuts).flatMap(([key, customConfig]) => {
            if (Object.prototype.hasOwnProperty.call(DEFAULT_SHORTCUTS, key)) {
                return [[key, DEFAULT_SHORTCUTS[key]]];
            }

            const { text, period } = customConfig as ShortcutsItem;

            if (!text || !period) {
                return [];
            }

            const { start, end } = period;

            if (dateIsSameOrBefore(start, end, "date")) {
                return [
                    [
                        text,
                        {
                            text,
                            period: {
                                start: start,
                                end: end
                            }
                        }
                    ]
                ];
            }

            return [];
        });
    }, [configs]);

    const printItemText = useCallback((item: ShortcutsItem) => {
        return item?.text ?? null;
    }, []);

    return shortcutOptions?.length ? (
        <div className="md:border-b mb-3 lg:mb-0 lg:border-r lg:border-b-0 border-gray-300 dark:border-gray-700 pr-1">
            <ul className="w-full tracking-wide flex flex-wrap lg:flex-col pb-1 lg:pb-0">
                {shortcutOptions.map(([key, item], index) =>
                    Array.isArray(item) ? (
                        item.map((item, index) => (
                            <ItemTemplate key={index} item={item}>
                                <>
                                    {key === "past" &&
                                    configs?.shortcuts &&
                                    key in configs.shortcuts &&
                                    item.daysNumber
                                        ? callPastFunction(
                                              configs.shortcuts[key as "past"],
                                              item.daysNumber
                                          )
                                        : item.text}
                                </>
                            </ItemTemplate>
                        ))
                    ) : (
                        <ItemTemplate key={index} item={item}>
                            <>
                                {configs?.shortcuts && key in configs.shortcuts
                                    ? typeof configs.shortcuts[
                                          key as keyof typeof configs.shortcuts
                                      ] === "object"
                                        ? printItemText(item)
                                        : configs.shortcuts[key as keyof typeof configs.shortcuts]
                                    : printItemText(item)}
                            </>
                        </ItemTemplate>
                    )
                )}
            </ul>
        </div>
    ) : null;
};

export default Shortcuts;
