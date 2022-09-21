import React from 'react'
import { BrowserRouter, Route, Routes, useLocation, useHistory, useNavigate, useParams } from "react-router-dom";
import Head from '../Components/Head';
import Customers from './Customers';
import Shipments from './Shipments';
import ShipmentDetails from './ShipmentDetails';
import { useRef } from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import PhoneNavigation from '../Components/PhoneNavigation';

function MainPage({setFixed}) {
  const customerr= useSelector((store)=>store.customer)
  const location = useLocation()
  const {pSlice}= useSelector((state)=>state.modal)
  const ref= useRef()
    const moveToTop=()=>{
      ref.current?.scrollTo({top: 0, behavior:'smooth'})
    
  }

console.log(customerr.id_cust.id)
  useEffect(() => {

    
       setTimeout(()=>{
        if(location.pathname === '/' || location.pathname === `/shipment/${customerr.id_cust.id}` || location.pathname === '/shipmentdetail'  ){
        moveToTop() 
        }
       },1000)
   
    
  },[location.pathname]) 


  return (
    <div className="flex-1  relative  overflow-auto w-full  "  ref={ref} >
        <Head/>
        <div className='py-[150px] laptop:py-[200px] px-[16px] sm:px-[40px] lg:px-[50px] 2xl:px-[70px] ' >
          { pSlice &&
            <PhoneNavigation setFixed={setFixed}/>
            }
          <div className=' max-w-[1280px] mx-auto   '>
            <Routes>
              <Route index element={<Customers />} />
              <Route path='/shipment/:id' element={<Shipments />} />
              <Route path='/shipmentdetail' element={<ShipmentDetails setFixed={setFixed}/>} />
            </Routes>
          </div>
       
        </div>
    </div>
  )
}

export default MainPage