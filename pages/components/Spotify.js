import React from "react";
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import useRequest from '../lib/useRequest'

const App = () => {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("common")
  
  const [isPlaying, setIsPlaying] = React.useState(0);
  const { data } = useRequest({
    url: '/api/Spotify'
  })
  
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

export default App;