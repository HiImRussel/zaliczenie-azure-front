/** React */
import { CSSProperties, useRef } from "react";

/** UUID */
import { v4 as uuidv4 } from "uuid";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
interface CheckboxProps {
    label: string;
    isChecked: boolean;
    onChange: (isChecked: boolean) => void;
    disabled?: boolean;
    wrapperStyle?: CSSProperties;
}

const Checkbox = (props: CheckboxProps) => {
    /** Props */
    const { label, isChecked, onChange, disabled, wrapperStyle } = props;

    /** Ref */
    const id = useRef(uuidv4());

    /** Handle */
    const handleChange = () => {
        if (disabled) return;

        onChange(!isChecked);
    };

    return (
        <div className={styles["checkbox"]} style={wrapperStyle}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
                id={id.current}
                className={styles["checkbox__input"]}
            />
            <label htmlFor={id.current} className={styles["checkbox__label"]}>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
