import React from "react";
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

const url = "https://discord.com/api/guilds/723409709306216498/widget.json";
const App = () => {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("common")
  
  const [playing, setPlaying] = React.useState(0);
  React.useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((j) => setPlaying(j.members[0].game.name))
  }, []);

  const yes_playing = t('yes_playing', {playing: playing})
  const no_playing = t('no_playing')
  if (playing){
  return <p>{yes_playing}</p>
  }else{
  return <p>{no_playing}</p>
  }
};

export default App;