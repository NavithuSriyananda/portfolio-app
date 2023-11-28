'use client'

import Typewriter, { TypewriterClass } from "typewriter-effect";
import Styles from './TypeWriter.module.css'
import { HomePageModel } from "@/data/models/pageModels/HomePageModel";
import parse from 'html-react-parser'

export default function TypeWriter(props: HomePageModel) {
    const initTypeWriter = (typewriter: TypewriterClass) => {
        props.TypewriterData?.map(element => {
            typewriter.typeString(element)
                .pauseFor(1000)
                .deleteAll()
        });
        typewriter.start();
    };
    return (
        <div className={`${Styles.typewriter}`}>
            {
                props.StartWording.map((element, index) => {
                    return (<p key={index}>{parse(element)}</p>)
                })
            }
            <Typewriter
                onInit={(typewriter) => initTypeWriter(typewriter)}
                options={{
                    loop: true,
                    wrapperClassName: Styles.typewriter_wrapper
                }}
            />
            {
                props.EndWording.map((element, index) => {
                    return (<p key={index}>{parse(element)}</p>)
                })
            }
        </div >
    )
}