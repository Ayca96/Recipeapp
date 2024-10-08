import React, { useState, useEffect } from 'react';

const Date = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

   
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>{dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}</div>
  );
}

export default Date;
