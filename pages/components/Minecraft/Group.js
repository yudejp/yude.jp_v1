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
        'https://minecraft.yude.jp/group/' + uuid.uuid,
      );
      setData(result.data);
    };  
    fetchData();
  }, []);
  if (data === undefined){
    console.log("[Minecraft: PlayersBio] データの取得に失敗しました。 / Failed to retrieve data.")
    return <p></p>
  }else {
        if (data.toString() == "staff") {
            return <span className="inline-flex items-center justify-center px-3 py-2 text-base font-bold leading-none text-indigo-100 bg-indigo-700 rounded ml-3">Staff</span>
        } else {
            return <></>
        }
    };
}

export default App;