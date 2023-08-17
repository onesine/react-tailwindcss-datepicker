import React from "react";
interface Props {
    currentMonth: number;
    clickMonth: (month: number) => void;
}
declare const Months: React.FC<Props>;
export default Months;
