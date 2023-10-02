'use client'

//Styles
import Styles from "./DarkButton.module.css";

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
            id="dark-button"
            className="dark-button"
            onClick={toggleDark}>

            <FontAwesomeIcon
                icon={faSun}
                className='sun-icon' />

            <FontAwesomeIcon
                icon={faMoon}
                className="moon-icon" />

            <div id="dark-button-switch"
                className="dark-button-switch">
            </div>

        </div>
    )
}