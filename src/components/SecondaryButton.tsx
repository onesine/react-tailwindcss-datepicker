import { useCallback, useContext } from "react";

import { RING_COLOR } from "../constants";
import DatepickerContext from "../contexts/DatepickerContext";
import { ButtonProps } from "../types";

const SecondaryButton = (props: ButtonProps) => {
    const { children, onClick, disabled = false } = props;

    // Contexts
    const { primaryColor } = useContext(DatepickerContext);

    // Functions
    const getClassName: () => string = useCallback(() => {
        const ringColor = RING_COLOR.focus[primaryColor as keyof typeof RING_COLOR.focus];
        return `w-full transition-all duration-300 bg-white dark:text-gray-700 font-medium border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-offset-2 hover:bg-gray-50 ${ringColor}`;
    }, [primaryColor]);

    return (
        <button type="button" className={getClassName()} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default SecondaryButton;
