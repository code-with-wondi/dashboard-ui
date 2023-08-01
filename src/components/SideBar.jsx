import React from 'react'
import './SideBar.css'
import {BiSolidDashboard} from "react-icons/bi"
import {BsCurrencyDollar} from "react-icons/bs"
import {MdSchool} from "react-icons/md"

export const SideBar = () => {
  return (
    <>
    <div className="sidebar">
        <div className="logo">
            Sekela
        </div>
        <div className="menu-wrapper">
            <div className="menu active"><BiSolidDashboard className='icon-des'/>Dashboard</div>
            <div className="menu"><MdSchool className='icon-des'/>School Setup</div>
            <div className="menu"><BsCurrencyDollar className='icon-des'/>Fee Collectin</div>
            <div className="menu"><BiSolidDashboard className='icon-des'/>Classes</div>
            <div className="menu"><BiSolidDashboard className='icon-des'/>Grade</div>
            <div className="menu"><BiSolidDashboard className='icon-des'/>Attendance</div>
            <div className="menu"><BiSolidDashboard className='icon-des'/>Parent</div>
            <div className="menu"><BiSolidDashboard className='icon-des'/>Academic</div>
        </div>
        <div className="prem-card">
            <h1>Go premium</h1>
            <p>Get access all the features we offered and make your work flow a lot easier</p>
        </div>
        </div>
    </>
  )
}
