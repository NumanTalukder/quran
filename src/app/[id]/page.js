import { fetchChapterVerses } from '@/utils/action'

const Surah = async () => {
  const surah = await fetchChapterVerses(1)

  return <div>{surah}</div>
}

export default Surah
