import React from "react";
interface Props {
    primaryColor?: string;
    value: {
        startDate: Date | string;
        endDate: Date | string;
    } | null;
    onChange: (value: {
        startDate: string | null;
        endDate: string | null;
    }) => void;
    useRange?: boolean;
    showFooter?: boolean;
    showShortcuts?: boolean;
    configs?: {
        shortcuts?: {
            today?: string;
            yesterday?: string;
            past?: (period: number) => string;
            currentMonth?: string;
            pastMonth?: string;
        } | null;
        footer?: {
            cancel?: string;
            apply?: string;
        } | null;
    } | null;
    asSingle?: boolean;
    placeholder?: string;
    separator?: string;
    startFrom?: Date | null;
    i18n?: string;
}
declare const Datepicker: React.FC<Props>;
export default Datepicker;
