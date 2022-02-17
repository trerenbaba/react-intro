import React, { useState } from 'react'
import './button.css'



function Button({text,className,clicked}) {

    const [counter, setCounter] = useState(0);
    
    const click = ()=>{
        //window.alert('cliked');
        clicked(`${text} butonuna tıklandı`);
        setCounter(counter+1);
    }


  return (
      <div> 
        <p>Tıklama sayısı : {counter}</p>
        <button className={className} onClick={click}>
             {text}
        </button>   
      </div> 
  )
}

export default Button