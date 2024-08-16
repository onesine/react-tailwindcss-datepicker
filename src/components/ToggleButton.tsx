import CloseIcon from "./icons/CloseIcon";
import DateIcon from "./icons/DateIcon";

interface Props {
    isEmpty: boolean;
}

const ToggleButton = (e: Props) => {
    return e.isEmpty ? <DateIcon className="h-5 w-5" /> : <CloseIcon className="h-5 w-5" />;
};

export default ToggleButton;
