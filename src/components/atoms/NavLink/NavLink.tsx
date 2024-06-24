/** React router */
import { NavLink as RouterNavLink } from "react-router-dom";

/** Class names */
import classNames from "classnames";

/** Hooks */
import useObservable from "../../../hooks/useObservable";

/** RXJS Store */
import { currentUser$ } from "../../../rxjsStore/auth.rxjs-store";

/** Styles */
import styles from "./styles.module.scss";

/** Types */
import { LinkProps } from "react-router-dom";

type NavLinkProps = LinkProps & {
    visibleForAdminOnly?: boolean;
};

const NavLink = (props: NavLinkProps) => {
    const { children, visibleForAdminOnly } = props;
    const { to } = props;

    const user = useObservable(currentUser$);

    const onClick = () => {
        console.log();
    };

    if (visibleForAdminOnly && !user?.isAdmin) return null;

    return (
        <RouterNavLink
            to={to}
            className={({ isActive }) =>
                classNames(`${styles["nav-link"]}`, {
                    [`${styles["nav-link--active"]}`]: isActive,
                })
            }
            onClick={onClick}
        >
            {children}
        </RouterNavLink>
    );
};

export default NavLink;
