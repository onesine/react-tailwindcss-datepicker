import React from "react";
interface Props {
    year: number;
    currentYear: number;
    minYear: number | null;
    maxYear: number | null;
    clickYear: (data: number) => void;
}
declare const Years: React.FC<Props>;
export default Years;
