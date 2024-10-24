import { useContext } from "react";

import { BG_COLOR } from "../constants";
import DatepickerContext from "../contexts/DatepickerContext";

const VerticalDash = () => {
    // Contexts
    const { primaryColor } = useContext(DatepickerContext);
    const bgColor = BG_COLOR["500"][primaryColor as keyof (typeof BG_COLOR)["500"]];

    return <div className={`h-7 w-1 rounded-full hidden md:block ${bgColor || "bg-blue-500"}`} />;
};

export default VerticalDash;
