'use client'

import { Skill } from "@/models/AboutPageModel";
import Image from 'next/image'

export default function SkillCard(skill: Skill) {
    return (
        <div className='skill-card'>
            <div className="aspect-square w-full relative">
                <Image
                    className="rounded-t-lg"
                    src={skill.icon}
                    fill
                    alt="" />
            </div>
            <div className="text-center">
                <h5 className="text-neutral-800 dark:text-neutral-50">
                    {skill.name}
                </h5>
                <p className="text-base text-neutral-600 dark:text-neutral-200">description</p>
            </div>
        </div >
    )
}