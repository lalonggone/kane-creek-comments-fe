import { useState, useEffect } from 'react'
import './App.css'
import responses from '../../../cleanedResponses.json'
import { Routes, Route } from 'react-router-dom'
import Main from '../Main/Main'

const firstHundredResponses = responses.slice(0, 100)

function App() {
  const [responses, setResponses] = useState(firstHundredResponses)

  return (
    <>
     <Main />
    </>
  )
}

export default App
