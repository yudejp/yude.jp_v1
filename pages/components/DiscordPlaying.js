import React from "react";
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import useRequest from '../lib/useRequest'

const App = () => {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("common")
  
  const { data } = useRequest({
    url: 'https://discord.com/api/guilds/723409709306216498/widget.json'
  })
  
  if (data === undefined){
    console.log("Discord API: データの取得に失敗しました。 / Failed to retrieve data.")
    return <p></p>
  }else{
  const str = JSON.stringify(data)
  const yes_playing = t('yes_playing', {playing: data.members[0].game.name})
  if (str.indexOf("game") !== -1){
  return <p>{yes_playing}</p>
  }else{
  return <p></p>
  }
}
};

export default App;