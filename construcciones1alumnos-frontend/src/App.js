//@ts-check
import React from 'react'
import NavBar from './components/general/navBar/NavBar'
import BottomBar from './components/general/bottomBar/BottomBar'

export default function App() {
  return (
    <div className="bgColor">
      <NavBar/>
      <BottomBar/>
    </div>
  )
}
