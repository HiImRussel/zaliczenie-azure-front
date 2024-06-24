/** React */
import { useMemo } from "react";

/** Constants */
import navLinks from "../../../constants/navLinks";

/** Components */
import NavLink from "../../atoms/NavLink/NavLink";
import LogOutBtn from "../../atoms/LogOutBtn/LogOutBtn";

/** Styles */
import styles from "./styles.module.scss";
import classNames from "classnames";

/** Types */
interface NavLinksProps {
    isMobile?: boolean;
}

const NavLinks = (props: NavLinksProps) => {
    const { isMobile } = props;

    const links = useMemo(
        () =>
            navLinks.map((link) => (
                <NavLink
                    key={link.id}
                    to={link.to}
                    visibleForAdminOnly={link?.visibleForAdminOnly}
                >
                    {link.Icon({})}
                </NavLink>
            )),
        []
    );

    return (
        <div
            className={classNames(styles["nav-links"], {
                [styles["nav-links--mobile"]]: isMobile,
            })}
        >
            <div>{links}</div>

            <LogOutBtn />
        </div>
    );
};

export default NavLinks;
