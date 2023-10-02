import "server-only"

//Styles
import Styles from './page.module.css'

import ProjectCard from "@/components/projects/ProjectCard"
import { ReadFileAsync } from "@/libs/FileLibrary";
import { ProjectsPageModel } from "@/data/models/pageModels/ProjectsPageModel";
import { YamlToModel } from "@/libs/YamlLibrary";
import path from "path";

export default async function ProjectsPage() {
    var file = await ReadFileAsync(path.join(process.cwd(), 'public/data/projects.yml'), 'utf8');
    const data = YamlToModel<ProjectsPageModel>(file);
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