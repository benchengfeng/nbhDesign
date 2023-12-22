import React, { useEffect, useState } from 'react';

const FetcherHook = () => {
  const [data, setData] = useState([]);
  console.log('fetching data:', JSON.stringify(data));
  
  useEffect(() => {
    // Fetch data from the PHP script
    fetch('/server.php') // Assuming the PHP script is at the root directory
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {/* Render your data here */}
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default FetcherHook;
