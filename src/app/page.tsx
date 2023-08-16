import 'server-only' //Server only
import getData from '@/lib/API'
import SkillCard from '@/components/app/SkillCard';
import ToolCard from '@/components/app/ToolCard';

export default function Home() {
  const data = getData();

  return (
    <main className='relative'>
      <div id='section-Wrapper' className='flex flex-col gap-10 h-auto justify-center'>

        <div id='section' className='flex flex-col mx-5 my-5 rounded-lg'>
          <h1 className='text-3xl text-center text-neutral-600 dark:text-neutral-200'>Skill Set</h1>
          <div id='skill-card-wrapper' className='flex flex-wrap justify-center'>
            {
              data.SkillSet?.map((skill, index) => {
                return (
                  <SkillCard key={index} {...skill} />
                )
              })
            }
          </div>
        </div>

        <div id='section' className='flex flex-col mx-5 my-5 rounded-lg'>
          <h1 className='text-3xl text-center text-neutral-600 dark:text-neutral-200'>Tools</h1>
          <div id='tool-card-wrapper' className='flex flex-wrap justify-center'>
            {
              data.Tools?.map((tool, index) => {
                return (
                  <ToolCard key={index} {...tool} />
                )
              })
            }
          </div>
        </div>

        <div id='section' className='flex flex-col mx-5 my-5 rounded-lg'>
          <h1 className='text-3xl text-center text-neutral-600 dark:text-neutral-200'>Experience</h1>
          <div id='experience-wrapper' className='flex flex-wrap justify-center'>
            {
              data.Experience?.map((experience, index) => {
                return (
                  <div key={index} className='p-6'>
                    <h1 className='text-base text-neutral-600 dark:text-neutral-200 text-center'>{experience.name} - {experience.description}</h1>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div id='section' className='flex flex-col mx-5 my-5 rounded-lg'>
          {
            data.SocialMedia?.map((skill, index) => {
              return (
                <div key={index}>
                  <h1>{skill}</h1>
                </div>
              )
            })
          }
        </div>

      </div >
    </main>
  )
}
