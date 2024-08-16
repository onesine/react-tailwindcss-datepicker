import { IconProps } from "../../types";

const DoubleChevronLeftIcon = (props: IconProps) => {
    const { className = "w-6 h-6" } = props;

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

export default DoubleChevronLeftIcon;
