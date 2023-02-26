import React from "react";

import { generateArrayNumber } from "../../helpers";
import { RoundedButton } from "../utils";

interface Props {
    year: number;
    minYear: number | null;
    maxYear: number | null;
    clickYear: (data: number) => void;
}

const Years: React.FC<Props> = ({ year, minYear, maxYear, clickYear }) => {
    return (
        <div className="w-full grid grid-cols-2 gap-2 mt-2">
            {generateArrayNumber(year, year + 11).map((item, index) => (
                <RoundedButton
                    key={index}
                    padding="py-3"
                    onClick={() => {
                        clickYear(item);
                    }}
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
