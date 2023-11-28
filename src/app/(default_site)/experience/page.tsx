import "server-only"

//Styles
import Styles from './page.module.css'

import SkillCard from '@/components/experience/Skills/SkillCard'
import ToolCard from '@/components/experience/Tools/ToolCard'
import ExperienceTimeline from '@/components/experience/ExperienceTimeline/ExperienceTimeline'
import { ExperiencePageModel } from '@/data/models/pageModels/ExperiencePageModel'
import { YamlFileToModel } from '@/services/YamlFileService'

export default async function ExperiencePage() {
    const data = await YamlFileToModel<ExperiencePageModel>('experience.yml');
    return (
        <main className='relative'>
            <div id='section-Wrapper' className={`${Styles.sections_wrapper}`}>

                {/* SkillSet Section */}
                <section className={`${Styles.section}`}>
                    <div className={`${Styles.section_header_wrapper}`}>
                        <h1 className={`${Styles.section_header}`}>Technical Skills</h1>
                    </div>
                    <div className={`${Styles.card_wrapper}`}>
                        {
                            data.skillSet?.map((skill, index) => {
                                return (
                                    <SkillCard key={index} {...skill} />
                                )
                            })
                        }
                    </div>
                </section>

                {/* Tools Section */}
                <section className={`${Styles.section}`}>
                    <div className={`${Styles.section_header_wrapper}`}>
                        <h1 className={`${Styles.section_header}`}>Tools</h1>
                    </div>
                    <div id='tool-card-wrapper' className={`${Styles.card_wrapper}`}>
                        {
                            data.tools?.map((tool, index) => {
                                return (
                                    <ToolCard key={index} {...tool} />
                                )
                            })
                        }
                    </div>
                </section>

                {/* Experience Section */}
                <section className={`${Styles.section}`}>
                    <div className={`${Styles.section_header_wrapper}`}>
                        <h1 className={`${Styles.section_header}`}>Experience</h1>
                    </div>
                    <div id='experience-wrapper' className='bg-white/80 col-span-2'>\

                        <ol className="">
                            {
                                data.jobExperience?.map((experience, index) => {
                                    return (
                                        <div key={index}>
                                            <div className='p-6'>
                                            </div>
                                            <ExperienceTimeline isFirst={true} experience={experience} />
                                        </div>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </section>

            </div >
        </main>
    )
}