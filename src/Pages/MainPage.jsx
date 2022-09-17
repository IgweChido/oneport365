import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Head from '../Components/Head';
import Customers from './Customers';
import Shipments from './Shipments';
import ShipmentDetails from './ShipmentDetails';

function MainPage() {
  return (
    <div className="flex-1 relative  overflow-auto w-full  ">
        <Head/>
        <div className='py-[175px] px-[40px] md:px-[70px]'>
        <Routes>
            <Route index element={<Customers />} />
            <Route path='/shipment/:id' element={<Shipments />} />
            <Route path='/shipmentdetail' element={<ShipmentDetails />} />
          </Routes>
        </div>
    </div>
  )
}

export default MainPage