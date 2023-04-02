import dayjs from "dayjs";
import React, { useCallback, useContext } from "react";

import DatepickerContext from "../contexts/DatepickerContext";

import { PrimaryButton, SecondaryButton } from "./utils";

const Footer: React.FC = () => {
    // Contexts
    const { hideDatepicker, period, changeDatepickerValue, configs, classNames } =
        useContext(DatepickerContext);

    // Functions
    const getClassName = useCallback(() => {
        if (typeof classNames !== "undefined" && typeof classNames?.footer === "function") {
            return classNames.footer();
        }

        return "flex items-center justify-end pb-2.5 pt-3 border-t border-gray-300 dark:border-gray-700";
    }, [classNames]);

    return (
        <div className={getClassName()}>
            <div className="w-full md:w-auto flex items-center justify-center space-x-3">
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
                                startDate: dayjs(period.start).format("YYYY-MM-DD"),
                                endDate: dayjs(period.end).format("YYYY-MM-DD")
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
