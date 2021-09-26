import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App (props) {
  const uuid = props;
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://playersbio.yude.jp/' + uuid.uuid,
      );
      setData(result.data);
    };  
    fetchData();
  }, []);
  if (data === undefined){
    console.log("[Minecraft: PlayersBio] データの取得に失敗しました。 / Failed to retrieve data.")
    return <p></p>
  }else {
      if (data.toString() == "[object Object]"){
        return <p>読み込み中...</p>
      } else {
        if (data.toString() == "") {
            return <p>ひとことは設定されていません...</p>
        } else {
            return <p>ひとこと: <span className="italic">{data.toString()}</span></p>
        }
      }
    };
}

export default App;