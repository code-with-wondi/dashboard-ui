import React from 'react'
import { FullScreen } from './FullScreen'
import Header from './Header'
import { SideBar } from './SideBar'
import './Home.css'

export const Home = () => {
  return (
    <>
       <div className="wrapper">
        <SideBar />
        <FullScreen />
       </div>
    </>
  )
}
