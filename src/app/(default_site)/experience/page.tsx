import "server-only"

//Styles
import Styles from './page.module.css'

import SkillCard from "@/components/experience/SkillCard";
import ToolCard from "@/components/experience/ToolCard";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import { ExperiencePageModel } from "@/data/models/pageModels/ExperiencePageModel";
import { ReadFileAsync } from "@/libs/FileLibrary";
import path from "path";
import { YamlToModel } from "@/libs/YamlLibrary";

export default async function ExperiencePage() {
    var file = await ReadFileAsync(path.join(process.cwd(), 'public/data/experience.yml'), 'utf8');
    const data = YamlToModel<ExperiencePageModel>(file);
    //console.log(data);
    return (
        <main className='relative'>
            <div id='section-Wrapper' className={`${Styles.sections_wrapper}`}>

                {/* SkillSet Section */}
                <section className={`${Styles.section}`}>
                    <div className={`${Styles.section_header_wrapper_middle}`}>
                        <h1 className={`${Styles.section_header}`}>Skills</h1>
                    </div>
                    <div className={`${Styles.card_wrapper}`}>
                        {
                            data.SkillSet?.map((skill, index) => {
                                return (
                                    <SkillCard key={index} {...skill} />
                                )
                            })
                        }
                    </div>
                </section>

                {/* Tools Section */}
                <section className={`${Styles.section}`}>
                    <div className={`${Styles.section_header_wrapper_middle}`}>
                        <h1 className={`${Styles.section_header}`}>Tools</h1>
                    </div>
                    <div id='tool-card-wrapper' className={`${Styles.card_wrapper}`}>
                        {
                            data.Tools?.map((tool, index) => {
                                return (
                                    <ToolCard key={index} {...tool} />
                                )
                            })
                        }
                    </div>
                </section>

                {/* Experience Section */}
                <section className={`${Styles.section}`}>
                    <div className={`${Styles.section_header_wrapper_top}`}>
                        <h1 className={`${Styles.section_header}`}>Experience</h1>
                    </div>
                    <div id='experience-wrapper' className='bg-white/80 col-span-2'>
                        {
                            data.JobExperience?.map((experience, index) => {
                                return (
                                    <div key={index} className='p-6'>
                                        <h1 className='text-base text-neutral-600 dark:text-neutral-200 text-center'>{experience.name} - {experience.description}</h1>
                                    </div>
                                )
                            })
                        }
                        <ExperienceTimeline />
                    </div>
                </section>

            </div >
        </main>
    )
}