'use client'

import { Tool } from "@/models/AboutPageModel";
import Image from 'next/image'

export default function ToolCard(tool: Tool) {
    return (
        <div className='tool-card'>
            <div className="aspect-square w-full relative">
                <Image
                    className="rounded-t-lg"
                    src={tool.icon}
                    fill
                    alt="" />
            </div>
            <div className="text-center">
                <h5 className="text-neutral-800 dark:text-neutral-50">
                    {tool.name}
                </h5>
                <p className="text-base text-neutral-600 dark:text-neutral-200">description</p>
            </div>
        </div>
    )
}