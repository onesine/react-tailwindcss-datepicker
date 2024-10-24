import { useCallback, useContext } from "react";

import { BG_COLOR, BORDER_COLOR, RING_COLOR } from "../constants";
import DatepickerContext from "../contexts/DatepickerContext";
import { ButtonProps } from "../types";

const PrimaryButton = (props: ButtonProps) => {
    const { children, onClick, disabled = false } = props;

    // Contexts
    const { primaryColor } = useContext(DatepickerContext);
    const bgColor = BG_COLOR["500"][primaryColor as keyof (typeof BG_COLOR)["500"]];
    const borderColor = BORDER_COLOR["500"][primaryColor as keyof (typeof BORDER_COLOR)["500"]];
    const bgColorHover = BG_COLOR.hover[primaryColor as keyof typeof BG_COLOR.hover];
    const ringColor = RING_COLOR.focus[primaryColor as keyof typeof RING_COLOR.focus];

    // Functions
    const getClassName = useCallback(() => {
        return `w-full transition-all duration-300 ${bgColor} ${borderColor} text-white font-medium border px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-offset-2 ${bgColorHover} ${ringColor} ${
            disabled ? " cursor-no-drop" : ""
        }`;
    }, [bgColor, bgColorHover, borderColor, disabled, ringColor]);

    return (
        <button type="button" className={getClassName()} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default PrimaryButton;
