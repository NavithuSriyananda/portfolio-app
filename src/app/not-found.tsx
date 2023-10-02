'use client'

import { faCircleChevronLeft, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NotFound() {
    return (
        <main>
            <div className="flex flex-col fixed m-auto top-0 bottom-0 left-0 right-0 justify-center items-center overflow-[show]">
                <FontAwesomeIcon icon={faCircleQuestion} className="text-black text-[10vh]" textAnchor="asdasd" />
                <h1 className="text-[5vh] bg-white">Page not found</h1>
                <p className="bg-white">We&#39;re sorry. The page yu requested could not be found.</p>
                <Link href={'/'} className="inline-flex items-center text-[3vh] mt-6 bg-white rounded-full border-solid border-2 shadow-xl">
                    <FontAwesomeIcon
                        icon={faCircleChevronLeft}
                        className='relative mr-1' />
                    <h1>Back to homepage</h1>
                </Link>
            </div>
        </main>
    )
}