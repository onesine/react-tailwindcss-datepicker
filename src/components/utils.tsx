import React, { useCallback, useContext } from "react";

import { BG_COLOR, BORDER_COLOR, BUTTON_COLOR, RING_COLOR } from "../constants";
import DatepickerContext from "../contexts/DatepickerContext";

interface IconProps {
    className?: string;
}

interface Button {
    children: JSX.Element | JSX.Element[];
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    roundedFull?: boolean;
    padding?: string;
    active?: boolean;
}

export const DateIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
        </svg>
    );
};

export const CloseIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
};

export const ChevronLeftIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
    );
};

export const DoubleChevronLeftIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
        </svg>
    );
};

export const ChevronRightIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    );
};

export const DoubleChevronRightIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
        </svg>
    );
};

export const DoubleVerticalChevronRightIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.35355 4.06066C8.15829 3.8654 7.84171 3.8654 7.64645 4.06066L5.35355 6.35355C5.15829 6.54882 4.84171 6.54882 4.64645 6.35355C4.45118 6.15829 4.45118 5.84171 4.64645 5.64645L6.93934 3.35356C7.52513 2.76777 8.47487 2.76777 9.06066 3.35355L11.3536 5.64645C11.5488 5.84171 11.5488 6.15829 11.3536 6.35355C11.1583 6.54882 10.8417 6.54882 10.6464 6.35355L8.35355 4.06066Z"
                fill="#6b7280"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.35355 11.9393C8.15829 12.1346 7.84171 12.1346 7.64645 11.9393L5.35355 9.64645C5.15829 9.45119 4.84171 9.45119 4.64645 9.64645C4.45118 9.84171 4.45118 10.1583 4.64645 10.3536L6.93934 12.6464C7.52513 13.2322 8.47487 13.2322 9.06066 12.6464L11.3536 10.3536C11.5488 10.1583 11.5488 9.84171 11.3536 9.64645C11.1583 9.45119 10.8417 9.45119 10.6464 9.64645L8.35355 11.9393Z"
                fill="#6b7280"
            />
        </svg>
    );
};

// eslint-disable-next-line react/display-name,@typescript-eslint/ban-types
export const Arrow = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <div
            ref={ref}
            className="absolute z-20 h-4 w-4 rotate-45 mt-0.5 ml-[1.2rem] border-l border-t border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-600"
        />
    );
});

export const SecondaryButton: React.FC<Button> = ({ children, onClick, disabled = false }) => {
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

export const PrimaryButton: React.FC<Button> = ({ children, onClick, disabled = false }) => {
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

export const RoundedButton: React.FC<Button> = ({
    children,
    onClick,
    disabled,
    roundedFull = false,
    padding = "py-[0.55rem]",
    active = false
}) => {
    // Contexts
    const { primaryColor } = useContext(DatepickerContext);

    // Functions
    const getClassName = useCallback(() => {
        const darkClass = "dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10";
        const activeClass = active ? "font-semibold bg-gray-50 dark:bg-white/5" : "";
        const defaultClass = !roundedFull
            ? `w-full tracking-wide ${darkClass} ${activeClass} transition-all duration-300 px-3 ${padding} uppercase hover:bg-gray-100 rounded-md focus:ring-1`
            : `${darkClass} ${activeClass} transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1`;
        const buttonFocusColor =
            BUTTON_COLOR.focus[primaryColor as keyof typeof BUTTON_COLOR.focus];
        const disabledClass = disabled ? "line-through" : "";

        return `${defaultClass} ${buttonFocusColor} ${disabledClass}`;
    }, [disabled, padding, primaryColor, roundedFull, active]);

    return (
        <button type="button" className={getClassName()} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export const VerticalDash = () => {
    // Contexts
    const { primaryColor } = useContext(DatepickerContext);
    const bgColor = BG_COLOR["500"][primaryColor as keyof (typeof BG_COLOR)["500"]];

    return <div className={`bg-blue-500 h-7 w-1 rounded-full hidden md:block ${bgColor}`} />;
};
