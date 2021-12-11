// React
import React, { useState, useEffect } from 'react';

// Data fetching
import axios from 'axios';

// i18n
import { useTranslation, useLanguageQuery } from 'next-export-i18n';

// Components
import LastPlayed from './LastPlayed'

function App (props) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const uuid = props;
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://minecraft.yude.jp/online/' + uuid.uuid,
      );
      setData(result.data);
    };  
    fetchData();
  }, []);
  if (data === undefined){
    console.log("[Minecraft: オンライン状況] データの取得に失敗しました。 / Failed to retrieve data.")
    return <p></p>
  }else {
        if (data.toString() == "false") {
            return <LastPlayed uuid={uuid.uuid} />
        } else {
            if (data.toString() == "true") {
            return <p>オンライン</p>
            } else {
                return <p>取得中...</p>
            }
        }
    };
}

export default App;