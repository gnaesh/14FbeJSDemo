import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [btnColor ,setBtnColor]=useState("blue");
  //-------------
  function col(){
    if(btnColor=="blue"){return "red"}else{return "blue"}
  }
  //---------------------

  return (
    <div className="App">
     <p>Hello</p>
  <button onClick={()=>{setBtnColor(col())}}
  style={{backgroundColor:col()}}>change to {btnColor}</button>
    </div>
  );
}

export default App;
