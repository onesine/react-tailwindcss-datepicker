import { ReactNode } from "react";
import "../styles/globals.css";

interface Props {
    children: ReactNode;
}

const RootLayout = (props: Props) => {
    const { children } = props;

    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
