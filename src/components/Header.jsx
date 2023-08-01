import React from "react";
import { BiCalendarEvent } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="right">
          <BiCalendarEvent
            style={{
              size: "50px",
              height: "100px",
              width: "100px",
              padding: "9px",
              background: "#eee",
              color: "#111",
            }}
          />
          <SlCalender />
        </div>
      </div>
    </>
  );
};

export default Header;
