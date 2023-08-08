import dayjs from "dayjs";
import React from "react";
import { DateType } from "types";
interface Props {
    date: dayjs.Dayjs;
    minDate?: DateType | null;
    maxDate?: DateType | null;
    onClickPrevious: () => void;
    onClickNext: () => void;
    changeMonth: (month: number) => void;
    changeYear: (year: number) => void;
}
declare const Calendar: React.FC<Props>;
export default Calendar;
