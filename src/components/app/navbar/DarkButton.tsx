import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function DarkButton() {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const toggleDark = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
        setDarkMode(prev => !prev);
    };

    return (
        <div
            className="relative text-3xl text-center hover:cursor-pointer
                  bg-white/50 dark:bg-black/40
                    rounded-2xl
                    shadow-[inset_0px_0px_10px_0px_rgb(0,0,0,0.8)]
                    dark:shadow-[inset_0px_0px_10px_0px_rgb(0,0,0,0.8)]"
            onClick={toggleDark}>

            <FontAwesomeIcon
                icon={faSun}
                className="relative text-yellow-600 mr-1 mt-1
                        opacity-100 dark:opacity-20
                        translate-x-1
                        transition-all duration-200 z-[999]" />

            <FontAwesomeIcon
                icon={faMoon}
                className="relative text-neutral-500 
                        mr-1 mt-1
                        opacity-30 dark:opacity-100
                        -translate-x-1
                        transition-all duration-200 z-[999]" />

            <div id="dark-button"
                className="rounded-2xl bg-black
                        absolute w-[60%] h-[90%] top-0 mt-[0.1rem] translate-x-[5%]
                        transition-all ease-in-out duration-700
                        shadow-[0px_2px_15px_rgb(0,0,0,1)]
                        dark:shadow-[0px_2px_15px_rgb(235,150,0,1)]
                        dark:translate-x-[60%]
                        dark:bg-yellow-600
                        z-[0]">
            </div>

        </div>
    )
}