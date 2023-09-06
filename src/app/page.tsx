import 'server-only' //Server only

import { getData, getResumeFile } from '@/utils/API'
import SkillCard from '@/components/app/main/SkillCard';
import ToolCard from '@/components/app/main/ToolCard';
import ExperienceTimeline from '@/components/app/main/ExperienceTimeline';

export default async function Home() {
  const data = await getData();
  const x = await getResumeFile();
  console.log(x);
  return (
    <main className='relative'>
      <div id='section-Wrapper' className='section-wrapper'>

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

        <section className='section'>
          <h1 className='section-header'>Social Media</h1>
          {
            data.SocialMediaList?.map((socialMedia, index) => {
              return (
                <div key={index}>
                  <h1><a href={`${socialMedia.url}`}>{socialMedia.name}</a></h1>
                  <h1>{socialMedia.icon}</h1>
                  <h1>{socialMedia.url}</h1>
                </div>
              )
            })
          }
        </section>

      </div >
    </main>
  )
}
