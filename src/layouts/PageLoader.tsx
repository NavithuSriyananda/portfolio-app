'use client'

import { UseAppContext } from "@/context/AppContext"
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";

export default function PageLoader() {
    const appState = UseAppContext();
    if (appState.IsLoading) {
        return (
            <div className="flex fixed z-website-loader m-auto top-0 bottom-0 left-0 right-0 bg-white  justify-center items-center overflow-[show]">
                <FontAwesomeIcon icon={faGear} className="text-black text-[10vh] animate-[spin_2s_linear_infinite]" />
            </div>
        )
    } else {
        return (
            <Fragment />
        )
    }
}