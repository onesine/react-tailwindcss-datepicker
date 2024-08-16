import { IconProps } from "../../types";

const ChevronRightIcon = (props: IconProps) => {
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    );
};

export default ChevronRightIcon;
