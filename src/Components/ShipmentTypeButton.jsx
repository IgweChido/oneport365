import React from 'react'

import { useState, useEffect,useRef } from 'react';
import caret from '../Images/caret.svg'

function ShipmentTypeButton() {

    const[btn, setBtn]= useState(false)

    const ref= useRef()

    // user growth  side outside click handler
    useEffect(() => {
       const handleClickOutside = (event) => {
         if (ref.current && !ref.current.contains(event.target)) {
           btn &&
            setBtn(false)
           
         }
         
       };
       document.addEventListener('click', handleClickOutside, true);
       return () => {
         document.removeEventListener('click', handleClickOutside, true);
       };
     }, [ btn]);

  return (
        //   {/* button */}
        <div className='relative' ref={ref}>

          <button 
              className='relative py-3.5 px-6 text-[#374151] bg-[#F3F4F6] rounded-md flex items-center text-white outline-none'
               onClick={() =>{
                  btn?
                  setBtn(false)
                  :
                  setBtn(true)
               } }
              >
              <span className='font-medium text-base'>Shipment Type</span>
              <img src={caret} className={btn? 'rotate-180 ml-2':'ml-2'} alt="" />
          </button>

           {/* Hidden */}

           {
            btn &&
            <div className=' absolute top-[60px] rounded-md border border-[#F6F6F6] w-full left-0 bg-white z-30'>
                <div className='cursor-pointer p-[10px] hover:bg-[#F6F6F6]'>
                  <p className='align-left'>Import</p>
                </div>
                <div className='cursor-pointer p-[10px] hover:bg-[#F6F6F6]'>
                  <p className='align-left'>Export</p>
                </div>
                

              </div>}
         </div>
        
  )
}

export default ShipmentTypeButton