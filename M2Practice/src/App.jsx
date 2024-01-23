//import { useState } from 'react'

import './App.css'
import Input from './components/input'
import Button from './components/button'

function App() {

  return (
    <>
    <h1> Calculator </h1>
      <p> Create a calculator with these conditions:</p>
      <ul>
          <li> The calculator will only accept two numbers per operation.</li>
          <li> The calculator will only have one operation available. </li>
        </ul>
      <div className='wrapper'>
        <Input/>
        <div className='buttonWrapper'>
          <Button/>
        </div>
      </div>
    </>
  )
}

export default App
