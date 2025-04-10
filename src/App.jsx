import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu_Left from './components/Menu_Left'
import Navigation_Top from './components/Navigation_Top'
import Board_Main from './components/Board_Main'

function App() {
  return (
    <>
      <Navigation_Top />
      <div className='main' style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start"
      }

            }>
        <Menu_Left/>
        <Board_Main />
      </div>
    </>
  )
}

export default App
