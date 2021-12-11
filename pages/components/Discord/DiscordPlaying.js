// React
import React, { useState, useEffect } from 'react';

// Data fetching
import axios from 'axios';

// i18n
import { useTranslation, useLanguageQuery } from 'next-export-i18n';

function App (){
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://discord.com/api/guilds/723409709306216498/widget.json',
      );
      setData(result.data);
    };  
    fetchData();
  }, []);
  if (data === undefined){
    console.log("[Discord API] データの取得に失敗しました。 / Failed to retrieve data.")
    return <p></p>
  }else{
  const str = JSON.stringify(data)
  
  if (str.indexOf("game") !== -1){
  const yes_playing = t('yes_playing', {playing: data.members[0].game.name})
  return <p>{yes_playing}</p>
  }else{
  return <></>
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