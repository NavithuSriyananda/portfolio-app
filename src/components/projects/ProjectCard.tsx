'use client'

//Styles
import Styles from './ProjectCard.module.css'

import Image from 'next/image'
import { Project } from '@/data/models/pageModels/ProjectsPageModel'


export default function ProjectCard(project: Project) {
    return (
        <section className={`${Styles.project_section}`}>

            {/* title and logo */}
            <div className={`${Styles.project_left_pane}`}>
                <div className={`${Styles.project_logo_wrapper}`}>
                    <Image
                        priority
                        className=''
                        src={`/images/${project.logo}`}
                        fill
                        alt=''
                    />
                </div>
            </div>

            {/* description and links */}
            <div className={`${Styles.project_right_pane}`}>
                <h1 className={`${Styles.project_header}`}>
                    {project.title}
                </h1>
                <p>
                    {project.description}
                </p>
                {
                    project.links?.map((link, index) => {
                        return (
                            <div key={index} className='hover:text-lg transition-all delay-100'>{link.name} - {link.url}</div>
                        )
                    })
                }
            </div>

        </section>
    )
} 