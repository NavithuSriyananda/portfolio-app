'use client'

//Styles
import Styles from './Introduction.module.css'

import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tilt from "react-parallax-tilt";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import { faLaptopCode, faUser } from "@fortawesome/free-solid-svg-icons";
import { UseHomePageContext, UseHomePageContextDispatch } from "@/context/HomePageContext";
import * as ActionTypes from "../../data/actionTypes/HomePageActionTypes";
import { HomePageModel } from "@/data/models/pageModels/HomePageModel";

export default function Introduction(props: HomePageModel) {
    const initTypeWriter = (typewriter: TypewriterClass) => {
        props.TypewriterData.forEach(element => {
            typewriter.typeString(element)
                .pauseFor(1000)
                .deleteAll()
        });
        typewriter.start();
    };

    return (
        <section id="introduction" className={`${Styles.introduction}`}>
            {/* Typewriter */}
            <div className={`${Styles.typewriter}`}>
                <Typewriter
                    onInit={(typewriter) => initTypeWriter(typewriter)}
                    options={{
                        loop: true,
                        wrapperClassName: Styles.typewriter_wrapper
                    }}
                />
            </div>

            {/* Avatar */}
            <div className={`${Styles.tilt_wrapper}`}>
                <Tilt
                    perspective={500}
                    glareEnable={false}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                    className={`${Styles.tilt}`}>
                    <div className={`${Styles.tilt_inner}`}>
                        <FontAwesomeIcon icon={faUser} className="text-[30vh]" />
                        <div className={`${Styles.tilt_top_icon}`}>
                            <FontAwesomeIcon icon={faLaptopCode} className="text-[10vh]" />
                        </div>
                    </div>
                </Tilt>
            </div>

        </section >
    )
}