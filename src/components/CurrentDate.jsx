import { useState, useEffect } from 'react';

const CurrentDate = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

   
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='date'>
    
    {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}

    </div>
  );
}

export default CurrentDate ;
