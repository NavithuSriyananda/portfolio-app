'use client'

import { Experience } from "@/data/models/pageModels/ExperiencePageModel"
import Styles from './ExperienceTimeline.module.css'

interface props {
    experience: Experience,
    isFirst: boolean
}
export default function ExperienceTimeline(props: props) {
    const fromDate = new Date(props.experience.from);
    const toDate = new Date(props.experience.to);
    return (

        <li className="grid grid-cols-8" >        {/* <!--First item--> */}
            <div className=" col-start-2 col-span-1 text-right text-xl font-semibold -mt-2 ">
                <h4>{props.experience.designation}</h4>
            </div>
            <div className="col-span-5 border-l-2 border-color-2 dark:border-blue-700-500 ml-10">
                <div className="flex items-center">
                    {
                        props.isFirst &&
                        <div className="-ml-[13px] -mt-2 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-color-1 dark:bg-blue-700-500 absolute animate-ping"></div>

                    }
                    <div className="-ml-[13px] -mt-2 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-color-2 dark:bg-blue-700-500 text-white"></div>
                    <h4 className="-mt-2 text-xl font-semibold ">{props.experience.company.name}</h4>
                </div>
                <div className="mb-6 ml-6 pb-6">
                    <p>{props.experience.address}</p>
                    <a
                        href="#!"
                        className="text-sm text-blue-700 transition duration-150 ease-in-out hover:text-blue-700-600 focus:text-blue-700-600 active:text-blue-700-700 dark:text-blue-700-400 dark:hover:text-blue-700-500 dark:focus:text-blue-700-500 dark:active:text-blue-700-600"
                    >
                        {`${fromDate.getDate()} ${fromDate.toLocaleDateString('default', { month: "long" })}, ${fromDate.getFullYear()} - 
                        ${toDate.getDate()} ${toDate.toLocaleDateString('default', { month: "long" })}, ${toDate.getFullYear()}
                        (${fromDate.getDate()})`}
                    </a>
                    <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </li>

        // < li className = "grid grid-cols-4" >
        //         <div className="col-span-1 text-right text-xl font-semibold -mt-2 ">
        //             <h4>Software Engineer</h4>
        //         </div>
        //         <div className="col-span-3 border-l-2 border-color-2 dark:border-blue-700-500 ml-10">
        //             <div className="flex items-center">
        //                 <div className="-ml-[13px] -mt-2 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-color-2 dark:bg-blue-700-500 text-white"></div>
        //                 <h4 className="-mt-2 text-xl font-semibold ">Title of section 1</h4>
        //             </div>
        //             <div className="mb-6 ml-6 pb-6">
        //                 <a
        //                     href="#!"
        //                     className="text-sm text-blue-700 transition duration-150 ease-in-out hover:text-blue-700-600 focus:text-blue-700-600 active:text-blue-700-700 dark:text-blue-700-400 dark:hover:text-blue-700-500 dark:focus:text-blue-700-500 dark:active:text-blue-700-600"
        //                 >
        //                     4 February, 2022 - 3 March 2023
        //                 </a>
        //                 <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
        //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        //                     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        //                     ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        //                     aliquip ex ea commodo consequat.
        //                 </p>
        //             </div>
        //         </div>
        //     </li >
    )
}