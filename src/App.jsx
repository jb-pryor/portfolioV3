import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './SideBar.jsx'
import AboutMeBtn from './AboutMeBtn.jsx'
import Header from './Header.jsx'
import Lightmode from './Lightmode.jsx'


function App() {


  return (
    <>
      <Header></Header>
      <Lightmode></Lightmode>
      <SideBar></SideBar>
      <AboutMeBtn></AboutMeBtn>
      <div className='emptySpace'></div>
    </>
  )
}

export default App
