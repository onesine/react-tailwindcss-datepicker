import React from "react";
interface IconProps {
    className: string;
}
interface Button {
    children: JSX.Element | JSX.Element[];
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    roundedFull?: boolean;
    padding?: string;
    active?: boolean;
}
export declare const DateIcon: React.FC<IconProps>;
export declare const CloseIcon: React.FC<IconProps>;
export declare const ChevronLeftIcon: React.FC<IconProps>;
export declare const DoubleChevronLeftIcon: React.FC<IconProps>;
export declare const ChevronRightIcon: React.FC<IconProps>;
export declare const DoubleChevronRightIcon: React.FC<IconProps>;
export declare const Arrow: React.ForwardRefExoticComponent<React.RefAttributes<HTMLDivElement>>;
export declare const SecondaryButton: React.FC<Button>;
export declare const PrimaryButton: React.FC<Button>;
export declare const RoundedButton: React.FC<Button>;
export declare const VerticalDash: () => React.JSX.Element;
export {};
