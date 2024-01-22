'use client'

import { Experience } from "@/data/models/pageModels/ExperiencePageModel"
import Styles from './ExperienceTimeline.module.css'
import exp from "constants";
import React from "react";

interface props {
    experience: Experience,
    isFirst: boolean
}
export default function ExperienceTimeline(props: props) {
    const fromDate = new Date(props.experience.from);
    const toDate = props.experience.to ? new Date(props.experience.to) : "Present";
    return (

        <li className="grid grid-cols-8" >        {/* <!--First item--> */}
            <div className=" col-start-2 col-span-1 text-right text-xl font-semibold -mt-2 ">
                <h4>{props.experience.designation}</h4>
            </div>
            <div className="col-start-3 col-span-5 border-l-2 border-color-2 dark:border-blue-700-500 ml-10">
                <div className="flex items-center">
                    {
                        props.isFirst &&
                        <div className="-ml-[13px] -mt-2 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-color-1 dark:bg-blue-700-500 absolute animate-ping drop-shadow-xl shadow-xl"></div>

                    }
                    <div className="-ml-[13px] -mt-2 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-color-2 dark:bg-blue-700-500 text-white drop-shadow-xl shadow-xl"></div>
                    <h4 className="-mt-2 text-xl font-semibold ">{props.experience.company}</h4>
                </div>
                <div className="mb-6 ml-6 pb-6">
                    <p>{props.experience.address}</p>
                    <a
                        href="#!"
                        className="text-sm text-blue-700 transition duration-150 ease-in-out hover:text-blue-700-600 focus:text-blue-700-600 active:text-blue-700-700 dark:text-blue-700-400 dark:hover:text-blue-700-500 dark:focus:text-blue-700-500 dark:active:text-blue-700-600"
                    >
                        {`${fromDate.getDate()} ${fromDate.toLocaleDateString('default', { month: "long" })}, ${fromDate.getFullYear()} - `}
                        {
                            toDate == "Present"
                                ? toDate
                                : `${toDate.getDate()} ${toDate.toLocaleDateString('default', { month: "long" })}, ${toDate.getFullYear()}`
                        }
                    </a>
                    <ol className="flex flex-wrap">
                        {
                            props.experience.techstack.map((tech) => {
                                return (
                                    <li key={tech}
                                        className="bg-blue-400 p-2 m-1 rounded-lg font-bold shadow-lg">
                                        {tech}
                                    </li>
                                )
                            })
                        }
                    </ol>

                    {
                        props.experience.responsibilities.length > 0 &&
                        <React.Fragment>
                            <p className="font-bold text-lg mt-2">Responsibilities and Activities:</p>
                            <ol className="list-disc">
                                {
                                    props.experience.responsibilities.map((responsibility) => {
                                        return (
                                            <li key={responsibility} className="list-item">
                                                {responsibility}
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </React.Fragment>
                    }

                    {
                        props.experience.projectExperiences.length > 0 &&
                        <React.Fragment>
                            <p className="font-bold text-lg mt-2">Projects Involved:</p>
                            <ol className="list-disc">
                                {
                                    props.experience.projectExperiences.map((experience) => {
                                        return (
                                            <li key={experience.name} className="mb-4 text-neutral-600 dark:text-neutral-300">
                                                {experience.name} - {experience.description}
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </React.Fragment>
                    }

                </div>
            </div >
        </li >
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