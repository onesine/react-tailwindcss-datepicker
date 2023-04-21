import dayjs from "dayjs";
import React, { useContext } from "react";

import { MONTHS } from "../../constants";
import DatepickerContext from "../../contexts/DatepickerContext";
import { loadLanguageModule } from "../../helpers";
import { RoundedButton } from "../utils";

interface Props {
    clickMonth: (month: number) => void;
}

const Months: React.FC<Props> = ({ clickMonth }) => {
    const { i18n } = useContext(DatepickerContext);
    loadLanguageModule(i18n);
    return (
        <div className="w-full grid grid-cols-2 gap-2 mt-2">
            {MONTHS.map(item => (
                <RoundedButton
                    key={item}
                    padding="py-3"
                    onClick={() => {
                        clickMonth(item);
                    }}
                >
                    <>{dayjs(`2022-${item}-01`).locale(i18n).format("MMM")}</>
                </RoundedButton>
            ))}
        </div>
    );
};

export default Months;
