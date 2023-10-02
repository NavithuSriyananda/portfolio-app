'use client'

//Styles
import Styles from './SkillCard.module.css'

import { Skill } from '@/data/models/pageModels/ExperiencePageModel'
import Image from 'next/image'

export default function SkillCard(skill: Skill) {
    return (
        <div className={`${Styles.skill_card}`}>
            <div className="aspect-square w-full relative">
                <Image
                    priority
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