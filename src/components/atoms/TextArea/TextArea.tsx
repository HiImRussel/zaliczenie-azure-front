/** React */
import { ChangeEvent, useMemo, useRef } from "react";

/** UUID */
import { v4 as uuidv4 } from "uuid";

/** Class Names */
import classNames from "classnames";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { ApiError } from "../../../types/error.types";
interface TextAreaProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    wrapperStyles?: React.CSSProperties;
    errors?: ApiError[];
    fieldName?: string;
    setErrors?: (errors: ApiError[]) => void;
}

const TextArea = (props: TextAreaProps) => {
    /** Props */
    const {
        value,
        placeholder,
        onChange,
        wrapperStyles,
        setErrors,
        errors,
        fieldName,
        label,
    } = props;

    /** Ref */
    const id = useRef(uuidv4());

    /** Data */
    const error = useMemo(
        () => errors?.find((e) => e.field === fieldName),
        [errors, fieldName]
    );

    /** Handlers */
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);

        if (!setErrors || !fieldName || !errors) return;

        const filteredErrors = errors.filter(
            (error) => error.field !== fieldName
        );

        setErrors(filteredErrors);
    };

    return (
        <div style={wrapperStyles} className={styles["text-area-wrapper"]}>
            {label && label?.length > 0 && (
                <label className={styles["label"]} htmlFor={id.current}>
                    {label}
                </label>
            )}

            <textarea
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                form={id.current}
                className={classNames(styles["text-area"], {
                    [styles["text-area--error"]]: error,
                })}
            ></textarea>

            {error && (
                <span className={styles["error-msg"]}>{error.message}</span>
            )}
        </div>
    );
};

export default TextArea;
