'use client'

//Styles
import Styles from './ToolCard.module.css'

import { Tool } from '@/data/models/pageModels/ExperiencePageModel'
import Image, { StaticImageData } from 'next/image'

export default function ToolCard(tool: Tool) {
    return (
        <div className={`${Styles.tool_card}`}>
            <a target='_blank' href={tool.website} rel="noopener noreferrer">
                <div className="aspect-square w-full relative">
                    <Image
                        priority
                        className="rounded-t-lg"
                        src={`/images/${tool.icon}`}
                        fill
                        alt="" />
                </div>
                <div className="text-center">
                    <h5 className="text-neutral-800 dark:text-neutral-50">
                        {tool.name}
                    </h5>
                    <p className="text-base text-neutral-600 dark:text-neutral-200">description</p>
                </div>
            </a>
        </div>
    )
}