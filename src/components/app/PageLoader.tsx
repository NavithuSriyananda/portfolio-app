'use client'

import { UseAppContext } from "@/utils/contexts/AppContext"
import { faGear, faGears } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PageLoader() {
    const appState = UseAppContext();
    if (appState.IsParticleBackgroundLoaded) {
        return (
            <></>
        )
    } else {
        return (
            <div className="flex absolute z-[999] w-full h-full bg-white/90  justify-center items-center">
                {/* <div
                    className="inline-block absolute h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"> */}
                <FontAwesomeIcon icon={faGear} className="text-black text-[10vh] animate-[spin_2s_linear_infinite]" />
            </div>
        )
    }
}