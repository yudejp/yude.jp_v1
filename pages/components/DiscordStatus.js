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
  const str = JSON.stringify(data)
  const status = 0
  if (str.indexOf("status") !== -1){
    status = data.members && data.members[0].status;
  }
  return (
  <>
  <div className="z-50 w-6 transform translate-y-3/4 -translate-x-full">
  {
    (() => {
      if (status == 0) {
        return <div className="text-gray-700 rounded-full bg-gray-500 flex w-6 h-6"></div>
      }else{
      if (status == "online"){
        return <div className="text-green-700 rounded-full bg-green-500 flex w-6 h-6"></div>
      } else if (status == "idle"){
        return <div className="text-yellow-700 rounded-full bg-green-500 flex w-6 h-6"></div>
      } else {
        return <div className="text-yellow-700 rounded-full bg-red-500 flex w-6 h-6"></div>
      } 
    }
    })()
  }
  </div>
  </>
  )
}

export default App;