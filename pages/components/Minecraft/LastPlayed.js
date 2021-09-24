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
  
  const timeAgo = (prevDate) => {
    const diff = Number(new Date()) - prevDate;
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;
    switch (true) {
        case diff < minute:
            const seconds = Math.round(diff / 1000);
             return `${seconds} 秒前`
        case diff < hour:
            return Math.round(diff / minute) + ' 分前';
        case diff < day:
            return Math.round(diff / hour) + ' 時間前';
        case diff < month:
            return Math.round(diff / day) + ' 日前';
        case diff < year:
            return Math.round(diff / month) + ' ヶ月前';
        case diff > year:
            return Math.round(diff / year) + ' 年前';
        default:
            return "";
    }
};

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
            let dateTime = new Date(parseInt(data.toString()) * 1000);
            return (
                <div class='has-tooltip'>
                    <span class='tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8'>{dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString()}</span>
                    最終ログイン: {timeAgo(dateTime)}
                </div>
            )
        }
    };
}

export default App;