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
            style={{
              size: "50px",
              background: "#eee",
              color: "#111",
            }}
          />
          <SlCalender />
        </div>
        <div className="left">
          <GrNotification />
          <HiTranslate />
          <BiUserCircle />
        </div>
      </div>
    </>
  );
};

export default Header;
