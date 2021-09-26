 // Base layout
import Layout from "../../components/Layout"

// React
import { useRouter } from 'next/router'

// Data fetching
import Players from '../../components/Minecraft/Players'
import PlayerName from '../../components/Minecraft/PlayerName'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function UUID() {
  const router = useRouter()
  const { uuid } = router.query
  const { data, error } = useSwr(
    uuid ? `/api/PlayerName/${uuid}` : null,
    fetcher
  )
  if (error) {
    return (
      <>
        <Layout title="エラー - プレイヤー情報">
        <p className="text-2xl">エラーが発生しました。</p>
        </Layout>
      </>
    )
  } else {
    if (!data) {
      return (
        <>
          <Layout title="読み込み中... - プレイヤー情報">
          <Players uuid={uuid} />
          </Layout>
        </>
      )
    } else {
        return (
          <>
            <Layout title={data.username + " - " + "プレイヤー情報"}>
            <Players uuid={uuid} />
            </Layout>
          </>
        )
    }
  }
}
