import React, { useEffect, useState } from 'react';
import './Home.scss'

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
    <div className="parent">
      <div className="clock" id="clock">{time}</div>
    </div>
  );
}

export default Home;
