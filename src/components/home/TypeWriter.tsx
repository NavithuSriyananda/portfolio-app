'use client'

import Typewriter, { TypewriterClass } from "typewriter-effect";
import Styles from './TypeWriter.module.css'
import { HomePageModel } from "@/data/models/pageModels/HomePageModel";
import parse from 'html-react-parser'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaughBeam } from "@fortawesome/free-solid-svg-icons";

export default function TypeWriter(props: HomePageModel) {

    const initTypeWriter = (typewriter: TypewriterClass, element: string) => {
        typewriter.typeString(element)
        // .pauseFor(1000)
        // .deleteAll()
        typewriter.start();
    };

    return (
        <div className={`${Styles.typewriter}`}>
            {
                props.StartWording?.map((element, index) => {
                    return (<p key={index}>{parse(element)}</p>)
                })
            }

            {
                props.TypewriterData?.map(element => {
                    return (
                        <Typewriter
                            key={element}
                            onInit={(typewriter) => initTypeWriter(typewriter, element)}
                            options={{
                                loop: false,
                                wrapperClassName: Styles.typewriter_wrapper,
                                delay: 60
                            }}
                        />
                    )
                })
            }
            {
                props.EndWording?.map((element, index) => {
                    return (<p key={index}>{parse(element)}</p>)
                })
            }
            <div>
                <span className="text-color-1">{'<'}</span>
                <FontAwesomeIcon icon={faFaceLaughBeam} className="text-color-1" />
                <span className="text-color-1">{'>'}</span>
            </div>

        </div >
    )
}