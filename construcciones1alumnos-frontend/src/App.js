// @ts-nocheck
import React from 'react'
import NavBar from './components/general/navBar/NavBar'
import BottomBar from './components/general/bottomBar/BottomBar'
import PublicHome from './pages/PublicHome'

export default function App() {
  return (
    <div className="bg-black">
      <NavBar/>
      <PublicHome/>
      <BottomBar/> 
    </div>
  );
}
