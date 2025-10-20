import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './SideBar.jsx'
import AboutMeBtn from './AboutMeBtn.jsx'
import Header from './Header.jsx'
import Lightmode from './Lightmode.jsx'
import SidePics from './SidePics.jsx'


function App() {


  return (
    <>
      <Header></Header>
      <Lightmode></Lightmode>
      <AboutMeBtn></AboutMeBtn>
      <SideBar></SideBar>
      <SidePics></SidePics>
      <div className='emptySpace'></div>
    </>
  )
}

export default App
