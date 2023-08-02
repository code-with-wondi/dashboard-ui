import React from "react";
import { BiCalendarEvent,BiUserCircle } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import {GrNotification} from "react-icons/gr"
import {HiTranslate} from "react-icons/hi"

import './Header.css';

const Header = () => {
  return ( 
    <>
      <div className="navbar">
        <div className="right">
          <BiCalendarEvent
            className="icon-nav"
          />
          <SlCalender className="icon-nav" />
        </div>
        <div className="left">
          <GrNotification className="icon-nav" style={{color: "#4f6367"}}/>
          <HiTranslate className="icon-nav"/>
          <div className="profile">
          <BiUserCircle className="icon-nav"/>
          <div className="info">
            <h4>Lema Asefa</h4>
            <p>Adminstrator</p>
          </div>
          </div>
         
        </div>
      </div>
    </>
  );
}; 

export default Header;
