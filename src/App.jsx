import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const countDownDate = new Date(2023, 9, 1).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
  });

  return (
    <>
      <h1>RUBY APPRECATION MONTH:</h1>
      <br></br>
      <h2>Days: <div style={{color: 'pink'}}>{Math.floor(countDown / (1000 * 60 * 60 * 24))}</div>  Hours: <div style={{color: 'pink'}}>{Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}</div> Minutes: <div style={{color: 'pink'}}>{Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))}</div> Seconds: <div style={{color: 'pink'}}>{Math.floor((countDown % (1000 * 60)) / 1000)}</div></h2>
    </>
  )
}

export default App
