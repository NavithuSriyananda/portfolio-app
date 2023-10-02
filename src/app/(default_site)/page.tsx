import "server-only"

import Introduction from '@/components/home/Introduction';
import { HomePageContextProvider, UseHomePageContext, UseHomePageContextDispatch } from "@/context/HomePageContext";
import { ReadFileAsync } from "@/libs/FileLibrary";
import path from "path";
import { YamlToModel } from "@/libs/YamlLibrary";
import { HomePageModel } from "@/data/models/pageModels/HomePageModel";

export default async function HomePage() {
  var file = await ReadFileAsync(path.join(process.cwd(), 'public/data/home.yml'), 'utf8');
  const homePageData = YamlToModel<HomePageModel>(file);
  return (
    <HomePageContextProvider>
      <main className='relative'>
        <Introduction TypewriterData={homePageData.TypewriterData} />
      </main>
    </HomePageContextProvider>
  )
}
