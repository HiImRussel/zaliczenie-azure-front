/** Styles */
import styles from "./styles.module.scss";

/** Types */
interface LoadingSpinnerProps {
    wrapperStyle?: React.CSSProperties;
    spinnerStyle?: React.CSSProperties;
}

const LoadingSpinner = (props: LoadingSpinnerProps) => {
    /** Props */
    const { wrapperStyle, spinnerStyle } = props;

    return (
        <div className={styles["loading-spinner"]} style={wrapperStyle}>
            <div
                className={styles["loading-spinner__spinner"]}
                style={spinnerStyle}
            ></div>
        </div>
    );
};

export default LoadingSpinner;
