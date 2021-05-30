import React, { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import axios from 'axios';

export default function Minecraft(props) {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("minecraft")

  const [dataMinecraft, setDataMinecraft] = useState({ hits: [] });
  const [data, setData] = useState({ hits: [] });
  const fail = t('minecraft:fail')
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
        <p>{fail}</p>
        )
      }else{
        const status = data.online
        const player = data.players && data.players.online
        const playing = t('minecraft:playing', {count: player})
        const no_one = t('minecraft:no_one')
        const offline = t('minecraft:offline')
        return (
          <p className="text-center">
            {(() => {
            if (status) {
            if (player == undefined || player == 0) {
              return <span>{no_one}</span>
            } else {
              return <span>{playing}</span>
            }}else{
              return <span>{offline}</span>
            }
          })()}
          </p>
        )
      }
}