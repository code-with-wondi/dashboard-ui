import React from 'react'
import {MdSchool} from "react-icons/md"
import './DataCard.css'
import { RIghSide } from './RIghSide'
import {BiSolidPhoneCall} from "react-icons/bi"
import { SlCalender } from "react-icons/sl";
const DataCard = () => {
  return (
    <>
    <div className="wholewrapper">
      <div className="ded">
      <h2 className="tit">School Overview</h2>
        <div className="wrapper">
            
                <div className="card">
                    <div className="one">
                      <div className="icon-wrap">
                      <MdSchool className='icon-de'/>
                      </div>
                    
                    <p>Total Students</p>
                 
                    </div>
                    <h2 className="amount">118</h2>
                </div>
                <div className="card">
                    <div className="one">
                      <div className="icon-wrap">
                      <MdSchool className='icon-de'/>
                      </div>
                    
                    <p>Total Students</p>
                 
                    </div>
                    <h2 className="amount">118</h2>
                </div>
                <div className="card">
                    <div className="one">
                      <div className="icon-wrap">
                      <MdSchool className='icon-de'/>
                      </div>
                    
                    <p>Total Students</p>
                 
                    </div>
                    <h2 className="amount">118</h2>
                </div>
                <div className="card">
                    <div className="one">
                      <div className="icon-wrap">
                      <MdSchool className='icon-de'/>
                      </div>
                    
                    <p>Total Students</p>
                 
                    </div>
                    <h2 className="amount">118</h2>
                </div>

        </div>
      </div>
    
        <div className="analytics-wrapper">
          <h2 className='title'>Usage Analytics</h2>
          <div className="usage-cards">
          <div className="usage">
            <BiSolidPhoneCall  className='icon'/>
            <div className="inf">
            <h2>20</h2>
            <p>SMS remained</p>
            </div>
           
          </div>
          <div className="usage">
            <SlCalender  className='icon'/>
            <div className="inf">
            <h2>365</h2>
            <p>Days remained</p>
            </div>
           
          </div>
          </div>
          <h2 className='title'>Fees Overview</h2>
          <div className="donought">

          <div class="donut-chart-block block"> 
		<div class="donut-chart">
			<div id="part1" class="portion-block"><div class="circle"></div></div>
			<div id="part2" class="portion-block"><div class="circle"></div></div>
			<div id="part3" class="portion-block"><div class="circle"></div></div>
			<p class="center"></p>     
        
		</div>
    <div className="legend">
          <div className="paid">
            <div className="key"></div>
            <p>Paid</p>
          </div>
          <div className="paid">
            <div className="key unpaid"></div>
            <p>Unpaid</p>
          </div>
         </div>
   </div>
          </div>
          
        </div>
    </div>
    
 
    </>
  )
}

export default DataCard