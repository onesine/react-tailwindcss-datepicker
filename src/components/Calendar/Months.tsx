import dayjs from "dayjs";
import React, { useContext } from "react";

import DatepickerContext from "../../contexts/DatepickerContext";
import { loadLanguageModule, shortString, ucFirst } from "../../helpers";
import { RoundedButton } from "../utils";

interface Props {
    clickMonth: (month: number) => void;
}

const Months: React.FC<Props> = ({ clickMonth }) => {
    const { i18n } = useContext(DatepickerContext);
    loadLanguageModule(i18n);
    return (
        <div className="w-full grid grid-cols-2 gap-2 mt-2">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => (
                <RoundedButton
                    key={index}
                    padding="py-3"
                    onClick={() => {
                        clickMonth(index + 1);
                    }}
                >
                    <>
                        {ucFirst(
                            shortString(
                                dayjs(`2022-${1 + item}-01`)
                                    .locale(i18n)
                                    .format("MMM")
                            )
                        )}
                    </>
                </RoundedButton>
            ))}
        </div>
    );
};

export default Months;
