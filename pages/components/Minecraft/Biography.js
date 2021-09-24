import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import LastPlayed from './LastPlayed'

function App (props) {
  const uuid = props;
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("common")  
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://playersbio.yude.jp/' + uuid.uuid,
      );
      setData(result.data);
    };  
    fetchData();
  }, []);
  if (data === undefined){
    console.log("[Minecraft: PlayersBio] データの取得に失敗しました。 / Failed to retrieve data.")
    return <p></p>
  }else {
        if (data.toString() == "") {
            return <p>ひとことは設定されていません...</p>
        } else {
            return <p>ひとこと: <span className="italic">{data.toString()}</span></p>
        }
    };
}

export default App;