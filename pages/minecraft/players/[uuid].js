// Base layout
import Layout from "../../components/Layout"

// i18n
import useTranslation from 'next-translate/useTranslation'

// React
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

// Data fetching
import axios from 'axios';
import Players from '../../components/Minecraft/Players'
import PlayerName from '../../components/Minecraft/PlayerName'

export default function UUID() {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("index")
  const { uuid } = router.query
  
  const [data, setData] = useState({ hits: [] });
  
  let playerName = null;
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/api/PlayerName/' + uuid,
      );
      setData(result.data);
      
    };  
    fetchData();
  }, []);
  
  if (data.username === undefined) {
    return (
      <>
        <Layout title="404 - プレイヤー情報">
        <Players uuid={uuid} />
        </Layout>
      </>
    )
  } else {
  return (
    <>
      <Layout title={data.username + " - " + "プレイヤー情報"}>
      <Players uuid={uuid} />
      </Layout>
    </>
  )
  }
}
