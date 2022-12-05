import dayjs from "dayjs";
import React, { useCallback, useContext } from "react";

import { DEFAULT_SHORTCUTS, TEXT_COLOR } from "../constants";
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
        hideDatepicker
    } = useContext(DatepickerContext);

    // Functions
    const getClassName: () => string = useCallback(() => {
        const textColor = TEXT_COLOR["600"][primaryColor as keyof typeof TEXT_COLOR["600"]];
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
            updateFirstDate(dayjs(item.start));
            hideDatepicker();
        },
        [
            changeDayHover,
            changeInputText,
            changePeriod,
            dayHover,
            period.end,
            period.start,
            updateFirstDate,
            hideDatepicker
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

const Shortcuts = () => {
    // Contexts
    const { configs } = useContext(DatepickerContext);

    const callPastFunction = (data: unknown, numberValue: number) => {
        return typeof data === "function" ? data(numberValue) : null;
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const printItemText = item => {
        return "text" in item ? item.text : "";
    };

    return (
        <div className="md:border-b mb-3 lg:mb-0 lg:border-r lg:border-b-0 border-gray-300 dark:border-gray-700 pr-1">
            <ul className="w-full tracking-wide flex flex-wrap lg:flex-col pb-1 lg:pb-0">
                {Object.entries(DEFAULT_SHORTCUTS).map(([key, item], index) =>
                    key === "past" ? (
                        (Array.isArray(item) ? item : []).map((item, index) => (
                            <ItemTemplate key={index} item={item}>
                                <>
                                    {configs && configs.shortcuts && key in configs.shortcuts
                                        ? callPastFunction(configs.shortcuts[key], item.daysNumber)
                                        : item.text}
                                </>
                            </ItemTemplate>
                        ))
                    ) : (
                        <ItemTemplate key={index} item={item}>
                            <>
                                {configs && configs.shortcuts && key in configs.shortcuts
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
