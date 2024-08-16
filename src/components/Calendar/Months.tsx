import { useContext, useEffect } from "react";

import { MONTHS } from "../../constants";
import DatepickerContext from "../../contexts/DatepickerContext";
import { dateFormat, loadLanguageModule } from "../../libs/date";
import RoundedButton from "../RoundedButton";

interface Props {
    currentMonth: number;
    clickMonth: (month: number) => void;
}

const Months = (props: Props) => {
    const { currentMonth, clickMonth } = props;

    const { i18n } = useContext(DatepickerContext);

    useEffect(() => {
        loadLanguageModule(i18n);
    }, [i18n]);

    return (
        <div className="w-full grid grid-cols-2 gap-2 mt-2">
            {MONTHS.map(item => (
                <RoundedButton
                    key={item}
                    padding="py-3"
                    onClick={() => {
                        clickMonth(item);
                    }}
                    active={currentMonth === item}
                >
                    {dateFormat(new Date(`2022-${item}-01`), "MMM", i18n)}
                </RoundedButton>
            ))}
        </div>
    );
};

export default Months;
