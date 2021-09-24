import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App (props) {
  const uuid = props;
  const [data, setData] = useState({ hits: [] });
//   const uuid_nohyphen = uuid.uuid.toString().replace(/-/g, "");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.ashcon.app/mojang/v2/user/' + uuid.uuid,
      );
      setData(result.data);
    };  
    fetchData();
  }, []);
  if (data === undefined){
        console.log("[Minecraft: UUID to player's name] データの取得に失敗しました。 / Failed to retrieve data.")
        return <span></span>
  }else {
        return <span>{data.username}</span>
    };
    
    // return <p>{uuid_nohyphen}</p>
}

export default App;