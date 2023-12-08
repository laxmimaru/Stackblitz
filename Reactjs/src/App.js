import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [ipStyle, setIpStyle] = useState();

  const changeColor = () => {
    console.log('changeColor');
    console.log(255 * Math.random());
    setIpStyle(255 * Math.random());        
  };


  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input
        type="text"
        style={{ color: `rgb(${ipStyle},${ipStyle},${ipStyle}` }}
        value="test demo testings"
      />
      <br />
      <br />
      <p style={{ color: `rgb(${ipStyle},${ipStyle},${ipStyle}` }}>test</p>
      <button onClick={() => changeColor()}>submit</button>
      
    </div>
  );
}
