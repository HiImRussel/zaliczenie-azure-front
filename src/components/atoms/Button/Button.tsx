/** React */
import { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

/** Class Names */
import classNames from "classnames";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
interface ButtonProps {
    children: ReactNode;
    isLoading?: boolean;
    fullWidth?: boolean;
    buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
    /** Props */
    const { children, isLoading, buttonProps, fullWidth } = props;

    /** Handlers */
    const handleOnClick = (
        e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    ) => {
        if (isLoading) return;

        buttonProps?.onClick?.(e);
    };

    return (
        <button
            {...buttonProps}
            className={classNames(styles["button"], buttonProps?.className, {
                [styles["button--full-width"]]: fullWidth,
            })}
            onClick={handleOnClick}
            disabled={isLoading}
        >
            {isLoading ? <span>Loading...</span> : children}
        </button>
    );
};

export default Button;
