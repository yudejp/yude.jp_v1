import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

function App (props) {
  const uuid = props;
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://minecraft.yude.jp/group/' + uuid.uuid,
      );
      setData(result.data);
    };  
    fetchData();
  }, []);
  
  if (data === undefined || data === null){
    return <p></p>
  }else {
        if (data.toString() == "staff") {
            return <span className="inline-flex items-center justify-center px-3 py-2 text-base font-bold leading-none text-indigo-100 bg-indigo-700 rounded ml-3">Staff</span>
        } else {
            return <></>
        }
    };
}

export default App;