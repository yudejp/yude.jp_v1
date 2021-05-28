import React from "react";
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
const url = '/api/Spotify';

function App ({data}) {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("common")  

  if (data === undefined){
    console.log("Spotify Web API: データの取得に失敗しました。 / Failed to retrieve data.")
    return <p></p>
  }else{
  if (data.isPlaying === "true"){
   const status = data.artist + ' - ' + data.title
   const listening = t('listening', {listening: status})
   return <p>{listening}</p>
  }else{
   return <p></p>
  }
};
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(url)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }

export default App;