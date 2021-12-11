// React
import React, { useState, useEffect } from 'react';

// Data fetching
import useSwr from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())

// i18n
import { useTranslation, useLanguageQuery } from 'next-export-i18n';

export default function DiscordPlaying() {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  
  const { data, error } = useSwr(
    `https://discord.com/api/guilds/723409709306216498/widget.json`,
     fetcher
   )
  if (error){
    console.log("[Discord API] データの取得に失敗しました。 / Failed to retrieve data.")
    return <></>
  } else {
    if (!data) {
      return <p>Loading...</p>
    } else {
      if (data.members) {
        if (data.members[0].game) {
          const yes_playing = t('yes_playing', {playing: data.members[0].game.name})
          return <p>{yes_playing}</p>
        } else {
          return <></>
        }
      } else {
        return <></> 
      }
    }
}
}
