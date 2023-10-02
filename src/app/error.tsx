'use client'

import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function error() {
    return (
        <main>
            <div className="flex flex-col fixed m-auto top-0 bottom-0 left-0 right-0 justify-center items-center overflow-[show]">
                <FontAwesomeIcon icon={faCircleExclamation} className="text-black text-[10vh]" textAnchor="asdasd" />
                <h1 className="text-[5vh] bg-white">Oops, Something went wrong.</h1>
            </div>
        </main>
    )
}