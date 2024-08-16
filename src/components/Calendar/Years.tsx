import { useContext, useMemo } from "react";

import { generateArrayNumber } from "../../helpers";
import RoundedButton from "../RoundedButton";

import DatepickerContext from "contexts/DatepickerContext";

interface Props {
    year: number;
    currentYear: number;
    minYear: number | null;
    maxYear: number | null;
    clickYear: (data: number) => void;
}

const Years = (props: Props) => {
    const { year, currentYear, minYear, maxYear, clickYear } = props;

    const { dateLooking } = useContext(DatepickerContext);

    const date = useMemo(() => {
        let start: number;
        let end: number;

        switch (dateLooking) {
            case "backward":
                start = year - 11;
                end = year;
                break;
            case "middle":
                start = year - 4;
                end = year + 7;
                break;
            case "forward":
            default:
                start = year;
                end = year + 11;
                break;
        }

        return {
            start,
            end
        };
    }, [dateLooking, year]);

    return (
        <div className="w-full grid grid-cols-2 gap-2 mt-2">
            {generateArrayNumber(date.start, date.end).map((item, index) => (
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
