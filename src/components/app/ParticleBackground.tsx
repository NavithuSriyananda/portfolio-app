'use client'

import Particles from 'react-particles';
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

export default function ParticleBackground() {
    async function customInit(engine: Engine): Promise<void> {
        // this adds the preset to tsParticles, you can safely use the
        await loadStarsPreset(engine);
    }

    const options: ISourceOptions = {
        preset: "stars",
        themes: [{ name: "dark" }, { name: "light" }],
        fullScreen: {
            zIndex: -1,
        }
    };
    return (
        <Particles options={options} init={customInit} />

    )

}