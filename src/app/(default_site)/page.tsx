import "server-only"

import Introduction from '@/components/(default_site)/Introduction';
import { HomePageContextProvider } from "@/context/HomePageContext";
import { HomePageModel } from "@/data/models/pageModels/HomePageModel";
import { YamlFileToModel } from "@/services/YamlFileService";

export default async function HomePage() {
  const homePageData = await YamlFileToModel<HomePageModel>('home.yml');
  return (
    <HomePageContextProvider>
      <main className='relative'>
        <Introduction TypewriterData={homePageData.TypewriterData} />
      </main>
    </HomePageContextProvider>
  )
}
