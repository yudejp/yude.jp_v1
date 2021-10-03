 // Base layout
 import Layout from "../../components/Layout"

 // React
 import { useRouter } from 'next/router'
 
 // Data fetching
 import Players from '../../components/Minecraft/Players'
 import useSwr from 'swr'
 const fetcher = (url) => fetch(url).then((res) => res.json())
 
 // Components
 import WrongUUID from '../../components/Minecraft/WrongUUID'
 
 export default function UUID() {
   const router = useRouter()
   const { ign } = router.query
   const { data, error } = useSwr(
    ign ? `https://api.ashcon.app/mojang/v2/user/${ign}` : null,
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
            <p className="text-2xl">読み込み中</p>
           </Layout>
         </>
       )
     } else {
       if (data.code) {
         return (
           <>
             <Layout title="404 - プレイヤー情報">
               <WrongUUID />
             </Layout>
           </>
         )
       } else {
         router.push('/minecraft/players/' + data.uuid)
         return (
          <p>リダイレクトしています...</p>
         )
       }
     }
   }
 }
 