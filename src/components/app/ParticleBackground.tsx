'use client'

import { useCallback } from 'react';
import Particles from 'react-particles';
import type { Engine, Container } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
    }, []);

    return (
        <Particles
            id="tsparticles"
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
                            speed: 3,
                            size_min: 0,
                            sync: false
                        }
                    },
                    move: {
                        enable: true,
                        speed: 0.2,
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
    );
};