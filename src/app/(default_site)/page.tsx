import "server-only"

import { HomePageContextProvider } from "@/context/HomePageContext";
import { HomePageModel } from "@/data/models/pageModels/HomePageModel";
import { YamlFileToModel } from "@/services/YamlFileService";
import Styles from './page.module.css'
import Avatar from "@/components/home/Avatar";
import TypeWriter from "@/components/home/TypeWriter";
import { Suspense } from "react";

export default async function HomePage() {
  const homePageData = await YamlFileToModel<HomePageModel>('home.yml');
  return (
    <HomePageContextProvider>
      <main className='relative'>
        <section id="introduction" className={`${Styles.introduction}`}>
          <TypeWriter {...homePageData} />
          <Avatar />
        </section>
      </main>
    </HomePageContextProvider>
  )
}
