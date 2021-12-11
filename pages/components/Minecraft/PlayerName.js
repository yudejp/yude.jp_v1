// React
import React, { useState, useEffect } from 'react';

// Data fetching
import axios from 'axios';

function App (props) {
  const uuid = props;
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      let result = null;
      try {
        result = await axios('https://api.ashcon.app/mojang/v2/user/' + uuid.uuid);
        setData(result.data);
      } catch (err) {
        result = 404;
        setData(result);
      }
    };  
    fetchData();
  }, []);
  if (data === undefined){
        console.log("[Minecraft: UUID to player's name] データの取得に失敗しました。 / Failed to retrieve data.")
        return <>取得中...</>
  }else {
        if (data === 404) {
          return <>404</>
        } else {
        return (
          <>{data.username}</>
        )
        }
    };
}

export default App;