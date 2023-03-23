import dayjs from "dayjs";
import React, { useCallback, useContext, useMemo } from "react";

import { TEXT_COLOR } from "../constants";
import DEFAULT_SHORTCUTS from "../constants/shortcuts";
import DatepickerContext from "../contexts/DatepickerContext";
import { Period, ShortcutsItem } from "../types";

interface ItemTemplateProps {
    children: JSX.Element;
    key: number;
    item: ShortcutsItem | ShortcutsItem[];
}

// eslint-disable-next-line react/display-name
const ItemTemplate = React.memo((props: ItemTemplateProps) => {
    const {
        primaryColor,
        period,
        changePeriod,
        changeInputText,
        updateFirstDate,
        dayHover,
        changeDayHover,
        hideDatepicker,
        changeDatepickerValue
    } = useContext(DatepickerContext);

    // Functions
    const getClassName: () => string = useCallback(() => {
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
            changeInputText(`${item.start} ~ ${item.end}`);
            changePeriod(item);
            changeDatepickerValue({
                startDate: item.start,
                endDate: item.end
            });
            updateFirstDate(dayjs(item.start));
            hideDatepicker();
        },
        [
            changeDatepickerValue,
            changeDayHover,
            changeInputText,
            changePeriod,
            dayHover,
            hideDatepicker,
            period.end,
            period.start,
            updateFirstDate
        ]
    );

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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

const Shortcuts: React.FC = () => {
    // Contexts
    const { configs } = useContext(DatepickerContext);

    const callPastFunction = useCallback((data: unknown, numberValue: number) => {
        return typeof data === "function" ? data(numberValue) : null;
    }, []);

    const shortcutOptions = useMemo(
        () =>
            configs
                ? Object.entries(DEFAULT_SHORTCUTS).filter(([key]) => {
                      return configs.shortcuts && Object.keys(configs.shortcuts).includes(key);
                  })
                : Object.entries(DEFAULT_SHORTCUTS),
        [configs]
    );

    const printItemText = useCallback((item: ShortcutsItem) => {
        return item?.text ?? null;
    }, []);

    return (
        <div className="md:border-b mb-3 lg:mb-0 lg:border-r lg:border-b-0 border-gray-300 dark:border-gray-700 pr-1">
            <ul className="w-full tracking-wide flex flex-wrap lg:flex-col pb-1 lg:pb-0">
                {shortcutOptions.map(([key, item], index) =>
                    Array.isArray(item) ? (
                        item.map((item) => (
                            <ItemTemplate key={index} item={item}>
                                <>
                                    {key === "past" &&
                                    configs?.shortcuts &&
                                    key in configs.shortcuts &&
                                    item.daysNumber
                                        ? callPastFunction(configs.shortcuts[key], item.daysNumber)
                                        : item.text}
                                </>
                            </ItemTemplate>
                        ))
                    ) : (
                        <ItemTemplate key={index} item={item}>
                            <>
                                {configs?.shortcuts && key in configs.shortcuts
                                    ? configs.shortcuts[key as keyof typeof configs.shortcuts]
                                    : printItemText(item)}
                            </>
                        </ItemTemplate>
                    )
                )}
            </ul>
        </div>
    );
};

export default Shortcuts;
