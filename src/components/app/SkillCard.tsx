'use client'
import { Skill } from "@/models/app/DataModel";
import Image from 'next/image'

export default function SkillCard(skill: Skill) {
    return (
        <div id="skill-card"
            className="block max-w-[18rem] rounded-lg m-4
            shadow-[0px_4px_12px_0px_rgb(0,0,0,0.1)]
            dark:shadow-[0px_4px_12px_0px_rgb(255,255,255,0.1)]
            hover:shadow-[0px_10px_30px_0px_rgb(51,51,54,0.26)] 
            dark:hover:shadow-[0px_10px_30px_0px_rgb(255,255,255,0.26)]
            transition-shadow ease-in-out duration-200">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <Image
                    className="rounded-t-lg"
                    src={skill.icon}
                    width={0}
                    height={0}
                    sizes="10rem"
                    style={{ width: '10rem', height: '10rem', maxWidth: '10rem', maxHeight: '10rem' }} // optional
                    alt="" />
            </div>
            <div className="p-6">
                <p className="text-base text-neutral-600 dark:text-neutral-200 text-center">
                    {skill.name}
                </p>
            </div>
        </div>
    )
}