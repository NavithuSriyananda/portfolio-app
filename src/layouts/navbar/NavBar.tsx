'use client'

//Styles
import Styles from './NavBar.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faFilePdf, faUser, faRocket, faProjectDiagram, faShapes } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation";
import Link from "next/link"
import { UseAppContextDispatch } from "@/context/AppContext";
import * as AppActionTypes from "../../data/actionTypes/AppActionTypes";
import Logo from '@/../../public/Profolio-Icon-01.svg'
import Image from 'next/image'

export default function NavBar() {
    const [top, setTop] = useState(true);
    const pathName = usePathname();
    const dispatch = UseAppContextDispatch();

    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY > 0 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    const onBtnDownloadClick = () => {
        dispatch({
            type: AppActionTypes.APP_LOADING_REQUESTED,
            data: null
        })
    }

    const BtnDownloadClick = () => {
        console.log('clicked download button');
        fetch('/api/download-cv', { method: 'Get' });
    }

    return (
        <nav
            className={Styles.nav + ' ' + (top ? '' : Styles.scrolled)}>

            {/* left corner */}
            <div className={`${Styles.left}`}>
                <Link href={'/'}
                    className={`${Styles.nav_logo} ${Styles.nav_item_hover}`}>
                    <Image
                        src={Logo}
                        className={`${Styles.nav_logo_image}`}
                        fill
                        alt=''
                    />
                    {/* <h1 className="relative pr-4 pb-1 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">Home</h1> */}
                </Link>
            </div>

            {/* center */}
            <div className={`${Styles.center}`} >
                <Link href={'/'}
                    className={`${Styles.nav_item} ${Styles.nav_item_hover} ${(pathName == "/" && Styles.current)}`}>
                    <FontAwesomeIcon
                        icon={faHome}
                        className='relative' />
                    {/* <h1 className="relative pr-4 pb-1 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">Home</h1> */}
                    <h1 className="">Home</h1>
                </Link>
                <Link href={'/experience'}
                    className={`${Styles.nav_item} ${Styles.nav_item_hover} ${(pathName == "/experience" && Styles.current)}`}>
                    <FontAwesomeIcon
                        icon={faRocket}
                        className='relative' />
                    <h1>Experience</h1>
                </Link>
                <Link href={'/projects'}
                    className={`${Styles.nav_item} ${Styles.nav_item_hover} ${(pathName == "/projects" && Styles.current)}`}>
                    <FontAwesomeIcon
                        icon={faShapes}
                        className='relative' />
                    <h1>Projects</h1>
                </Link >
                <div
                    className={`${Styles.nav_item}`}>
                    <FontAwesomeIcon
                        icon={faFilePdf}
                        className='relative' />
                    {/* <a href="https://drive.google.com/u/0/uc?id=1g6Yp06BiGdVKoUVy1zAwAYNv32FrW0f4&export=download" download="cv" onClick={onBtnDownloadClick}>Download CV</a> */}
                    <a href='/public/resume -Navithu Sriyananda.pdf'>Donwload CV</a>
                </div>
            </div>

            {/* right corner */}
            <div className={`${Styles.right}`}>
            </div>


            {/* <div 
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