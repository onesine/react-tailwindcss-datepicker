import dayjs from "dayjs";
import React, { useCallback, useContext } from "react";

import { DATE_FORMAT } from "../constants";
import DatepickerContext from "../contexts/DatepickerContext";
import { formatDateTimeToISO } from "../helpers";

import { PrimaryButton, SecondaryButton } from "./utils";

const Footer: React.FC = () => {
    // Contexts
    const {
        asTimePicker,
        period,
        hour,
        minute,
        periodDay,
        configs,
        classNames,
        changeDatepickerValue,
        hideDatepicker
    } = useContext(DatepickerContext);

    // Functions
    const getClassName = useCallback(() => {
        if (typeof classNames !== "undefined" && typeof classNames?.footer === "function") {
            return classNames.footer();
        }

        return "flex items-center justify-end pb-2.5 pt-3 border-t border-gray-300 dark:border-gray-700";
    }, [classNames]);

    return (
        <div className={getClassName()}>
            <div className="flex w-full items-center justify-center space-x-3 md:w-auto">
                <SecondaryButton
                    onClick={() => {
                        hideDatepicker();
                    }}
                >
                    <>{configs?.footer?.cancel ? configs.footer.cancel : "Cancel"}</>
                </SecondaryButton>
                <PrimaryButton
                    onClick={() => {
                        if (period.start && period.end) {
                            changeDatepickerValue({
                                startDate: asTimePicker
                                    ? formatDateTimeToISO(period.start, hour, minute, periodDay)
                                    : dayjs(period.start).format(DATE_FORMAT),
                                endDate: asTimePicker
                                    ? formatDateTimeToISO(period.end, hour, minute, periodDay)
                                    : dayjs(period.end).format(DATE_FORMAT)
                            });

                            hideDatepicker();
                        }
                    }}
                    disabled={!(period.start && period.end)}
                >
                    <>{configs?.footer?.apply ? configs.footer.apply : "Apply"}</>
                </PrimaryButton>
            </div>
        </div>
    );
};

export default Footer;
