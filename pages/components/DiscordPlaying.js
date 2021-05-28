import React from "react";
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
const url = 'https://discord.com/api/guilds/723409709306216498/widget.json';

function App ({data}){
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("common")
  
  if (data === undefined){
    console.log("Discord API: データの取得に失敗しました。 / Failed to retrieve data.")
    return <p></p>
  }else{
  const str = JSON.stringify(data)
  
  if (str.indexOf("game") !== -1){
  const yes_playing = t('yes_playing', {playing: data.members[0].game.name})
  return <p>{yes_playing}</p>
  }else{
  return <p></p>
  }
}
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(url)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default App;