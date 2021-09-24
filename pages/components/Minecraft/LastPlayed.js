import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

function App (props) {
  const uuid = props;
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("common")  
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://minecraft.yude.jp/last/' + uuid.uuid,
      );
      setData(result.data);
    };  
    fetchData();
  }, []);
  if (data === undefined){
    console.log("[Minecraft: 最終プレイ日時] データの取得に失敗しました。 / Failed to retrieve data.")
    return <p></p>
  }else {
        if (data.toString() == "[object Object]") {
            return <p>取得中です...</p>
        } else {
            return <p>{data.toString()}</p>
        }
    };
}

export default App;