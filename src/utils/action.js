'use server'

import ListCard from '@/app/components/ListCard'
import Verses from '@/app/components/Verses'

export const fetchChapters = async () => {
  const res = await fetch('https://api.quran.com/api/v4/chapters')
  const data = await res.json()
  const chapters = data.chapters

  return chapters.map((chapter) => (
    <ListCard key={chapter.id} chapter={chapter} />
  ))
}

export const fetchChapterVerses = async (id) => {
  const res = await fetch(`https://api.alquran.cloud/v1/surah/1`)
  const data = await res.json()
  const verses = data.data
  console.log(verses)

  // return verses.map((verse, index) => <Verses key={index} verse={verse} />)
}
