'use client'

import { UseAppContext } from "@/context/AppContext"
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PageLoader() {
    const appState = UseAppContext();
    if (appState.IsLoading) {
        return (
            <div className="flex fixed z-[998] m-auto top-0 bottom-0 left-0 right-0 bg-white/90  justify-center items-center overflow-[show]">
                {/* <div
                    className="inline-block absolute h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"> */}
                <FontAwesomeIcon icon={faGear} className="text-black text-[10vh] animate-[spin_2s_linear_infinite]" />
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}