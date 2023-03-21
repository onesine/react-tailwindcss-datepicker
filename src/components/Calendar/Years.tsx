import React, { useContext } from "react";

import { generateArrayNumber } from "../../helpers";
import { RoundedButton } from "../utils";

import DatepickerContext from "contexts/DatepickerContext";

interface Props {
    year: number;
    clickYear: (data: number) => void;
}

const Years: React.FC<Props> = ({ year, clickYear }) => {
    const { isForwardLooking } = useContext(DatepickerContext);
    const startDate = isForwardLooking ? year : year - 11;
    const endDate = isForwardLooking ? year + 11 : year;
    return (
        <div className="w-full grid grid-cols-2 gap-2 mt-2">
            {generateArrayNumber(startDate, endDate).map((item, index) => (
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
