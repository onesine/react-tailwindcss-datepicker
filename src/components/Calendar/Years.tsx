import React, { useContext } from "react";

import DatepickerContext from "../../contexts/DatepickerContext";
import { generateArrayNumber } from "../../helpers";
import { RoundedButton } from "../utils";

interface Props {
    year: number;
    currentYear: number;
    minYear: number | null;
    maxYear: number | null;
    clickYear: (data: number) => void;
}

const Years: React.FC<Props> = ({ year, currentYear, minYear, maxYear, clickYear }) => {
    const { dateLooking } = useContext(DatepickerContext);

    let startDate = 0;
    let endDate = 0;

    switch (dateLooking) {
        case "backward":
            startDate = year - 11;
            endDate = year;
            break;
        case "middle":
            startDate = year - 4;
            endDate = year + 7;
            break;
        case "forward":
        default:
            startDate = year;
            endDate = year + 11;
            break;
    }

    return (
        <div className="mt-2 grid w-full grid-cols-2 gap-2">
            {generateArrayNumber(startDate, endDate).map((item, index) => (
                <RoundedButton
                    key={index}
                    padding="py-3"
                    onClick={() => {
                        clickYear(item);
                    }}
                    active={currentYear === item}
                    disabled={
                        (maxYear !== null && item > maxYear) || (minYear !== null && item < minYear)
                    }
                >
                    <>{item}</>
                </RoundedButton>
            ))}
        </div>
    );
};

export default Years;
