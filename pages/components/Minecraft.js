import React, { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import axios from 'axios';
import Image from 'next/image'
import { list } from 'postcss';

export default function Minecraft(props) {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("minecraft")

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
        <p>{t('minecraft:fail')}</p>
        )
      }else{
        const status = data.online
        const player = data.players && data.players.online

        return (
          <div className="text-center">
            {(() => {
            if (status == true) {
            if (player == undefined || player == 0) {
              return <span>{t('minecraft:no_one')}</span>
            } else {
              return <span>{t('minecraft:playing', {count: player})}</span>
            }}else if (status == false) {
              return <span>{t('minecraft:offline')}</span>
            }else {
              return <span>{t('minecraft:loading')}</span>
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
                list.push(<Image src={url[i]} key={i} className="inline" height="50" width="50" />)
              }
              return <div>{list}</div>
            }
          })()}
          </div>
        )
      }
}