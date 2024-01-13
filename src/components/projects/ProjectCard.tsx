'use client'

//Styles
import Styles from './ProjectCard.module.css'

import Image from 'next/image'
import { Project } from '@/data/models/pageModels/ProjectsPageModel'
import Link from 'next/link'
import parse from 'html-react-parser'

export default function ProjectCard(project: Project) {
    return (
        <section className={`${Styles.project_section}`}>

            {/* logo */}
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

            {/* title, description and links */}
            <div className={`${Styles.project_right_pane}`}>
                <h1 className={`${Styles.project_header}`}>
                    {project.title}
                </h1>
                <p className={`${Styles.project_description}`}>
                    {parse(project.description)}
                </p>
                <div className={`${Styles.links_wrapper}`}>
                    {
                        project.links?.map((link, index) => {
                            return (
                                <Link key={index} className={`${Styles.link} noopenner`} href={link.url ?? ''} target='_blank'>
                                    {link.name}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}