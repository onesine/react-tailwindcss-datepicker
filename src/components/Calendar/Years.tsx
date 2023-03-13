import React, { useContext } from "react";

import { generateArrayNumber } from "../../helpers";
import { RoundedButton } from "../utils";

import DatepickerContext from "contexts/DatepickerContext";

interface Props {
    year: number;
    clickYear: (data: number) => void;
}

const Years: React.FC<Props> = ({ year, clickYear }) => {
    const { yearPickerStartYearOffset } = useContext(DatepickerContext);

    return (
        <div className="w-full grid grid-cols-2 gap-2 mt-2">
            {generateArrayNumber(
                year + (yearPickerStartYearOffset || 0),
                year + (yearPickerStartYearOffset || 0) + 11
            ).map((item, index) => (
                <RoundedButton
                    key={index}
                    padding="py-3"
                    onClick={() => {
                        clickYear(item);
                    }}
                >
                    <>{item}</>
                </RoundedButton>
            ))}
        </div>
    );
};

export default Years;
