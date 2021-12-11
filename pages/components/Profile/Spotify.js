// React
import React, { useState, useEffect } from 'react';

// Data fetching
import axios from 'axios';

// i18n
import { useTranslation, useLanguageQuery } from 'next-export-i18n';

function App () {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://vercel-spotify-api.vercel.app/api/Spotify',
      );
      setData(result.data);
    };  
    fetchData();
  }, []);
  if (data === undefined){
    console.log("[Spotify Web API] データの取得に失敗しました。 / Failed to retrieve data.")
    return <p></p>
  }else{
  if (data.isPlaying){
   const status = data.artist + ' / ' + data.title
   return <p>{t('listening', {listening: status})}</p>
  }else{
   return <></>
  }
};
}

export default App;