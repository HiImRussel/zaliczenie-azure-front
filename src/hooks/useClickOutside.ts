/** React */
import { useEffect } from "react";

/** Types */
import type { MutableRefObject } from "react";

function useOutsideClick(
    ref: MutableRefObject<HTMLElement | null>,
    callBack: () => void
) {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!ref.current || ref?.current.contains(e.target as HTMLElement))
                return;

            callBack();
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callBack]);
}

export default useOutsideClick;
