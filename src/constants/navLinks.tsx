/** Icons */
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";

/** Constants */
import { APP_URLS } from "./app";

/** Types */
interface LinkType {
    id: number;
    to: string;
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    visibleForAdminOnly?: boolean;
}

const navLinks: LinkType[] = [
    {
        id: 1,
        to: APP_URLS.HOME,
        Icon: HomeIcon,
    },
];

export default navLinks;
