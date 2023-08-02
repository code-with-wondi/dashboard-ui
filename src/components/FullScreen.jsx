import React from 'react'
import Header from './Header'
import './Header.css'
import DataCard from './DataCard'
import { RIghSide } from './RIghSide'

export const FullScreen = () => {
  return (
    <div className="full">
   
       <Header/>
        <RIghSide />

        
        <DataCard/>
        
    </div>
  
  )
}
