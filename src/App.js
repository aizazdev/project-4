import React, { useState } from 'react';
import logo from './logo.svg';
import Message from './Message.js';
import './App.css';

function App() {

  let [bColor, bChange] = useState(true);
  let [tColor, tChange] = useState(true);
  const backAndColor = {
    color: tColor ? "" : "silver",
    backgroundColor: bColor ? "" : "black"
  }
  return (
    <div style={backAndColor} className="box">
      <Message backgroundColor={bColor ? "brown" : "black"} textColor={tColor ? "white" : "silver"}/>

      <button onClick={() => bChange(!bColor) }>Change Background</button>
      <button onClick={() => tChange(!tColor) }>Change Text</button>
    </div>
  );
}

export default App;
