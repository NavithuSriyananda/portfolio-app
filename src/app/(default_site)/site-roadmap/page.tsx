import 'server-only'
import { YamlFileToModel } from '@/services/YamlFileService';
import { SiteRoadmapPageModel } from '@/data/models/pageModels/SiteRoadmapPageModel';

export default async function SiteRoadmap() {
    const data = await YamlFileToModel<SiteRoadmapPageModel>('site_roadmap.yml');
    var isCompletedTask = false;
    return (
        <div className="mt-20">
            <ul className="flex-col mx-auto">
                {
                    data.map((siteRoadmapItem, index) => {
                        isCompletedTask = isCompletedTask ? true : siteRoadmapItem.isLatest;
                        return (
                            <li key={index} className="grid grid-cols-2">
                                <div className="mr-10 text-right">v{siteRoadmapItem.version} </div>
                                <div className="flex border-l-2 border-color-1 pb-10 ">
                                    <div className={`-ml-[13px] -mt-1 mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-color-1 dark:bg-blue-700-500 absolute drop-shadow-xl shadow-xl ${siteRoadmapItem.isLatest && 'animate-ping'}`}></div>
                                    <div className={`-ml-[13px] -mt-1 mr-3 flex h-6 w-6 items-center justify-center rounded-full ${isCompletedTask ? 'bg-color-2' : 'bg-color-1'} dark:bg-blue-700-500 absolute drop-shadow-xl shadow-xl`}></div>
                                    <span className='ml-10'>{siteRoadmapItem.description}</span>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
        </div >
    )
}