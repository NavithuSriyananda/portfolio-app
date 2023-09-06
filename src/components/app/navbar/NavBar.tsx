'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DarkButton from "./DarkButton"
import styles from "./NavBar.module.css"
import { faHome, faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

export default function NavBar() {
    const [top, setTop] = useState(true);

    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY > 0 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);
    return (
        <nav id="nav"
            className={styles['nav'] + ` ${top ? '' : styles['scrolled']}`}>

            <div id="nav-item"
                className={styles['nav-item']}>
                <FontAwesomeIcon
                    icon={faHome}
                    className='relative' />
                {/* <h1 className="relative pr-4 pb-1 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">Home</h1> */}
                <h1 className="">Home</h1>
            </div>

            <div id="nav-item"
                className={styles['nav-item']}>
                <FontAwesomeIcon
                    icon={faFilePdf}
                    className='relative' />
                <a href="https://drive.google.com/u/0/uc?id=1g6Yp06BiGdVKoUVy1zAwAYNv32FrW0f4&export=download" download="cv">Download CV</a>
            </div>

            {/* <div id="nav-item"
                className={styles['nav-item']}>
                <h1 className="text-neutral-50 dark:text-neutral-200">Blogs</h1>
            </div> */}

            {/* <div id="nav-item-right-wrapper"
                className="absolute right-0">
                <DarkButton />
            </div> */}

        </nav >
    )
} 