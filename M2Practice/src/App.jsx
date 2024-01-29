import { useState } from 'react'

import './App.css'
import Input from './components/input'
import Button from './components/button'

function App() {
  const [input,setInput] =useState("");
  const [result,setResult] =useState("");

  function addToText(value){
    setInput((input) => [...input,value + ""]);
  }

  return (
    <>
    <h1> Calculator </h1>
      <p> Create a calculator with these conditions:</p>
      <ul>
          <li> The calculator will only accept two numbers per operation.</li>
          <li> The calculator will only have one operation available. </li>
        </ul>
      <div className='wrapper'>
        <Input text={input} result={result}/>
        <div className='buttonWrapper'>
          <div className='row'>
            <Button symbol = "AC"/> 
            <Button symbol = "+/-"/>
            <Button symbol = "%"/>
            <Button symbol = "/"/>
          </div>
          <div className='row'>
            <Button symbol = "7" handleClick={addToText}/>  
            <Button symbol = "8" />
            <Button symbol = "9" />
            <Button symbol = "x" />
          </div>
          <div className='row'>
            <Button symbol = "4" /> 
            <Button symbol = "5" />
            <Button symbol = "6" />
            <Button symbol = "-" />
          </div>
          <div className='row'>
            <Button symbol = "1" /> 
            <Button symbol = "2" />
            <Button symbol = "3" />
            <Button symbol = "+" />
          </div>
          <div className='row'>
            <Button symbol = "0" /> 
            <Button symbol = "." />
            <Button symbol = "=" />
             
          </div>
         
        </div>
      </div>
    </>
  )
}

export default App
