import React from "react";

import { CloseIcon, DateIcon } from "./utils";

interface ToggleButtonProps {
    isEmpty?: boolean | undefined;
}

const ToggleButton: React.FC<ToggleButtonProps> = (e: ToggleButtonProps): JSX.Element => {
    return e.isEmpty ? <CloseIcon className="h-5 w-5" /> : <DateIcon className="h-5 w-5" />;
};

export default ToggleButton;
