import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import Intro from './Intro'

function App() {

  return (
    <div className="App bg-main h-[100vh]">
      <Header />
      <Intro />
    </div>
  )
}

export default App
