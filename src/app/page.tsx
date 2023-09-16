import 'server-only' //Server only

import { getData, getResumeFile } from '@/utils/API'
import Introduction from '@/components/home/Introduction';


export default async function HomePage() {
  const data = await getData();
  // const x = await getResumeFile();
  // console.log(x);
  return (
    <main className='relative'>
      <Introduction />
    </main>
  )
}
