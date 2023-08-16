'use client'

import DarkButton from "./DarkButton"

export default function NavBar() {

    return (
        <nav id="nav"
            className="justify-center items-center
                    p-3 gap-10
                    backdrop-blur-sm bg-black/30 dark:bg-white/30 sticky 
                    top-0 z-[999] flex flex-row min-w-full">

            <div id="nav-item"
                className="px-5 py-3 rounded-lg  cursor-pointer 
                                shadow-sm shadow-black/30 dark:shadow-white/30
                                ease-in-out transition-all duration-200 hover:border-b-2">
                <h1 className="text-neutral-600 dark:text-neutral-200">Home</h1>
            </div>
            <div id="nav-item"
                className="px-5 py-3 rounded-lg  cursor-pointer 
                    shadow-sm shadow-black/30 dark:shadow-white/30
                    ease-in-out transition-all duration-200 hover:border-b-2">
                <h1 className="text-neutral-600 dark:text-neutral-200">Resume</h1>
            </div>
            <div id="nav-item"
                className="px-5 py-3 rounded-lg  cursor-pointer 
                    shadow-sm shadow-black/30 dark:shadow-white/30
                    ease-in-out transition-all duration-200 hover:border-b-2">
                <h1 className="text-neutral-600 dark:text-neutral-200">Blogs</h1>
            </div>
            <div id="nav-item-right-wrapper"
                className="absolute right-0">
                <DarkButton />
            </div>

        </nav>
    )
} 