'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import { faLaptopCode, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Introduction() {
    return (
        <section id="introduction" className="grid grid-cols-2 grid-rows-1 overflow-hidden
        m-3 h-[50vh]">
            {/* Typewriter */}
            <div className="typewriter">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Hello World!')
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(2500)
                            .deleteAll()
                            .callFunction(() => {
                                console.log('All strings were deleted');
                            })
                            .start();
                    }}
                    options={{
                        loop: true,
                        wrapperClassName: "typewriter-wrapper"
                    }}
                />
            </div>

            {/* Avatar */}
            <div className="avatar">
                <Tilt
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                    gyroscope={true}
                    className="parent">
                    <div className="inner">
                        <FontAwesomeIcon icon={faUser} className="text-[30vh] " />
                        <div className="inner-inner">
                            <FontAwesomeIcon icon={faLaptopCode} className="text-[10vh] " />
                        </div>
                    </div>
                </Tilt>
            </div>

        </section >
    )
}