import "server-only"

//Styles
import Styles from './page.module.css'

import ProjectCard from "@/components/projects/ProjectCard"
import { ProjectsPageModel } from "@/data/models/pageModels/ProjectsPageModel";
import { YamlFileToModel } from "@/services/YamlFileService";

export default async function ProjectsPage() {
    const data = await YamlFileToModel<ProjectsPageModel>('projects.yml');
    return (
        <main className="relative">

            <div id="projects-wrapper" className={`${Styles.projects_wrapper}`}>
                {
                    data.Projects?.map((project, index) => {
                        return (
                            <ProjectCard key={index} {...project} />
                        )
                    })
                }
            </div>

        </main>
    )
}