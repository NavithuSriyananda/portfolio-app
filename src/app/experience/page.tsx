import "server-only"

import "./experience.css";
import { getData } from "@/utils/API";
import SkillCard from "@/components/experience/SkillCard";
import ToolCard from "@/components/experience/ToolCard";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";

export default async function AboutPage() {
    const data = await getData();

    return (
        <main className='relative'>
            <div id='section-Wrapper' className='section-wrapper'>

                {/* SkillSet Section */}
                <section className='section'>
                    <div className='section-header-wrapper-middle'>
                        <h1 className='section-header'>Skills</h1>
                    </div>
                    <div className='card-wrapper'>
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
                <section className='section'>
                    <div className='section-header-wrapper-middle'>
                        <h1 className='section-header'>Tools</h1>
                    </div>
                    <div id='tool-card-wrapper' className='card-wrapper'>
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
                <section className='section'>
                    <div className='section-header-wrapper-top'>
                        <h1 className='section-header'>Experience</h1>
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