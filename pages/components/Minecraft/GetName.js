import React, { useState, useEffect } from 'react';
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
          return <p>そのようなプレイヤーは存在しません。</p>
        } else {
        return (
          <div className='has-tooltip'>
            <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8 font-mono text-sm'>UUID: {uuid.uuid}</span>
            <p className="text-2xl">{data.username}</p>
          </div>
        )
        }
    };
}

export default App;