import React, { useEffect, useState } from 'react'

const TextChage = () => {
    const text = "Hi, I am Shivank";
    const [currentText, setcurrentText] = useState("");
    const [endValue, setendValue] = useState(true);
    const [isForward, setisForward] = useState(true);
    const [Index, setIndex] = useState(0);

    useEffect(()=>{
        const interValId= setInterval(()=>{
            setcurrentText(text.substring(0,endValue));
            if(isForward) {
                setendValue((prev)=> prev+1);
            } else {
                setendValue((prev)=>prev-1);
            }
            if(endValue > text.length) {
                setisForward(false);
            }
            if(endValue < 4.1)  {
                setisForward(true);
                setIndex((prev) => 4 );
            }
        },50);

        return ()=> clearInterval(interValId);
    } ,[endValue, isForward, Index, text]);

  return (
    <div className='transition-ease duration-300'>
         {currentText}
    </div>
  )
}

export default TextChage