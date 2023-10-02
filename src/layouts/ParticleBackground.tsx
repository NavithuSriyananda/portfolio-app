'use client'

import { useCallback } from 'react';
import Particles from 'react-particles';
import { type Engine, type Container } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { UseAppContextDispatch } from "../context/AppContext"
import * as AppActionTypes from "../data/actionTypes/AppActionTypes"

export default function ParticleBackground() {
    const dispatch = UseAppContextDispatch();

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        dispatch({
            type: AppActionTypes.PARTICLE_BACKGROUND_LOADING_SUCCESS,
            data: null
        });
    }, [dispatch]);

    return (
        <div className='absolute w-full h-full top-0 left-0 z-[-999]'>
            <Particles
                id="tsparticles"
                className='fixed w-full h-full top-0 bottom-0 m-0 p-0'
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    backgroundMode: {
                        enable: true,
                        zIndex: -999
                    },
                    background: {
                        color: {
                            value: "#FFFFF",
                        },
                    },
                    fpsLimit: 120,
                    smooth: true,
                    particles: {
                        number: {
                            value: 100,
                            density: {
                                enable: true,
                                value_area: 789.1476416322727
                            }
                        },
                        color: {
                            value: "#000000"
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#000000"
                            },
                            polygon: {
                                nb_sides: 5
                            },
                        },
                        opacity: {
                            value: 0.48927153781200905,
                            random: false,
                            anim: {
                                enable: true,
                                speed: 0,
                                opacity_min: 0,
                                sync: false
                            }
                        },
                        size: {
                            value: {
                                min: 0,
                                max: 6
                            },
                            random: true,
                            anim: {
                                enable: true,
                                speed: 5,
                                size_min: 0,
                                sync: false
                            }
                        },
                        move: {
                            enable: true,
                            speed: 0.5,
                            direction: "none",
                            random: true,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },

                    detectRetina: true,
                }}
            />
        </div>
    );
};