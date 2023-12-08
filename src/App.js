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

  const getPosts=async ()=>{
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log('posts = ',posts)
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input
        type="text"
        style={{ color: `rgb(${(ipStyle, 255, 255)})` }}
        value="test demo"
      />{' '}
      <br />
      <br />
      <button onClick={() => changeColor()}>submit</button>
      <p style={{ color: 'rgb(211,250,210' }}>test</p>
    </div>
  );
}
