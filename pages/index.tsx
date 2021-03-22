import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
  // const data =
  const [data, setData] = useState<any | undefined>(undefined);
  const requestData = async () => {
    try {
      const res = await axios.get('/api/SearchByRegistrationEvent');
      console.log(res);
      setData(JSON.stringify(res.data));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <button onClick={requestData}>load data</button>
      {data}
    </div>
  );
}
