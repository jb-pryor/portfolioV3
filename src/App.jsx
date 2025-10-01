import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './SideBar.jsx'
import AboutMeBtn from './AboutMeBtn.jsx'


function App() {


  return (
    <>
      <AboutMeBtn></AboutMeBtn>
      <SideBar></SideBar>
    </>
  )
}

export default App
