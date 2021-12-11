// React
import React, { useState, useEffect } from 'react';

// i18n
import { useTranslation, useLanguageQuery } from 'next-export-i18n';

import axios from 'axios';

export default function Minecraft(props) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.mcsrvstat.us/2/yude.jp',
      );
      setData(result.data);
    };  
    fetchData();
  }, []);

    if (data === undefined){
        console.log("[Minecraft Query] データの取得に失敗しました。 / Failed to retrieve data.")
        return (
        <p>{t('fail')}</p>
        )
      }else{
        const status = data.online
        const player = data.players && data.players.online

        return (
          <div className="text-center">
            {(() => {
            if (status == true) {
            if (player == undefined || player == 0) {
              return <span>{t('no_one')}</span>
            } else {
              return <span>{t('playing', {count: player})}</span>
            }}else if (status == false) {
              return <span>{t('offline')}</span>
            }else {
              return <span>{t('loading')}</span>
            }
          })()}

          {(() => {
            if (data.players && data.players.list){
              var list = [];
              var url = [];
              for (var i in data.players.list){
                url.push('https://mc-heads.net/avatar/' + data.players.list[i])
              }
              for (var i in url){
                list.push(<img src={url[i]} key={i} className="inline" height="50" width="50" alt={i}/>)
              }
              return <div>{list}</div>
            }
          })()}
          </div>
        )
      }
}