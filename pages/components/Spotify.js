import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

function App () {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("common")  
  const [dataSpotify, setDataSpotify] = useState({ hits: [] });
  useEffect(async () => {
    const result = await axios(
      '/api/Spotify',
    );

    setDataSpotify(result.dataSpotify);
    }, []);

  if (dataSpotify === undefined){
    console.log("[Spotify Web API] データの取得に失敗しました。 / Failed to retrieve data.")
    return <p></p>
  }else{
  if (dataSpotify.isPlaying){
   const status = dataSpotify.artist + ' / ' + dataSpotify.title
   const listening = t('listening', {listening: status})
   return <p>{listening}</p>
  }else{
   return <p></p>
  }
};
}

export default App;