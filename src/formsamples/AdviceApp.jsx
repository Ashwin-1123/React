import { useState } from 'react'
import '../CSS/Advice.css';

export const AdviceApp = () => {
    const [advice,setAdvice] = useState("Please click the bellow button to get the Ashwin Life code");

    async function getadvice(){
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
    }
  return (
    <div className='body'>
    <h3>{advice}</h3>
    <button onClick={getadvice}>Get Ashwin,s life code</button>
    </div>
  )
}
