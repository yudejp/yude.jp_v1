import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

function App () {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("common")  
  const [data, setData] = useState({ hits: [] });
  useEffect(async () => {
    const result = await axios(
      '/api/Spotify',
    );

    setData(result.data);
    }, []);

  if (data === undefined){
    console.log("[Spotify Web API] データの取得に失敗しました。 / Failed to retrieve data.")
    return <p></p>
  }else{
  if (data.isPlaying){
   const status = data.artist + ' / ' + data.title
   const listening = t('listening', {listening: status})
   return <p>{listening}</p>
  }else{
   return <p></p>
  }
};
}

export default App;