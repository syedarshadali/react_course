import React, { useState, useEffect } from 'react';

const Clock = () => {

  // State to hold the current time
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // useEffect to update time every second
  useEffect(() => {

    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function to stop the interval when the component unmounts
    return () => clearInterval(intervalId);

  }, []); // Empty array means the effect runs once after initial render

  return (
    <div>
      <h1>Current Time</h1>
      <p>{time}</p>
    </div>
  )
}

export default Clock;


