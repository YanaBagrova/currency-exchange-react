import React, { useEffect, useState } from 'react';
import './Clock.scss'

function Home(props) {

  const [time, setTime] = useState((new Date()).toLocaleTimeString())
  
  useEffect(() => {
    const int = setInterval(function () {
      let now = new Date()
      setTime(now.toLocaleTimeString())
    }, 1000)
    return () => {
      clearInterval(int);
    }
  }, [])

  return (
    <div className="clock-outer-block">
      <div className="clock" id="clock">{time}</div>
    </div>
  );
}

export default Home;
