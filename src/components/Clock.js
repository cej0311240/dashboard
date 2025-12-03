import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); 

    return () => clearInterval(timer);
  }, []);


  const formatTime = (date) => {
    const pad = (n) => n.toString().padStart(2, "0");
    return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  };

  return (
    <div id="clock">
      <h1>{formatTime(time)}</h1>
    </div>
  );
};

export default Clock;