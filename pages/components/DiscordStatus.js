import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
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
  const status = data.members && data.members[0].status;
  return (
  <>
  <div className="z-50 transform translate-x-96 -translate-y-10 w-5">
  {
    (() => {
      if (status == "online"){
        return <div className="z-1000 text-green-700 rounded-full bg-green-500 flex w-5 h-5"></div>
      } else if (status == "idle"){
        return <div className="z-1000 text-yellow-700 rounded-full bg-green-500 flex w-5 h-5"></div>
      } else if (status == "dnd"){
        return <div className="z-1000 text-yellow-700 rounded-full bg-red-500 flex w-5 h-5"></div>
      } else {
        return <div className="z-1000 text-gray-700 rounded-full bg-red-500 flex w-5 h-5"></div>
      }
    })()
  }
  </div>
  </>
  )
}

export default App;