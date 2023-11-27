import Image from 'next/image'
import Hero from './components/Hero'
import ListCard from './components/ListCard'
import { fetchChapters } from '@/utils/action'
import Selections from './components/Selections'

export default async function Home() {
  const chapters = await fetchChapters()
  return (
    <main>
      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center gap-10'>
        <Hero />
        <section className='w-full px-4 md:px-20 lg:px-32'>
          <Selections />
          <section className='grid md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-3 w-full my-10'>
            {chapters}
          </section>
        </section>
      </section>
    </main>
  )
}
