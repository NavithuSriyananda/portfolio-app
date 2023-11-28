'use client'

//Styles
import Styles from './ToolCard.module.css'

import { Tool } from '@/data/models/pageModels/ExperiencePageModel'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ToolCard(tool: Tool) {
    return (
        <motion.div
            className={`${Styles.nav}`}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}>
            <div className={`${Styles.tool_card}`}>
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
                    {/* <p className="text-base text-neutral-600 dark:text-neutral-200">description</p> */}
                </div>
            </div>
        </motion.div>
    )
}