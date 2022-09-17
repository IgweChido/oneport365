import React from 'react'
import { useNavigate } from 'react-router-dom';
import back from '../Images/back.svg';
import search from '../Images/search.svg';
import cross from '../Images/cross.svg';
import caret from '../Images/caret.svg'
import profile from '../Images/shipmentprofile.png'
import ShipmentsTable from '../Components/ShipmentsTable';
import {useDispatch, useSelector} from 'react-redux'

import UseFetch from '../UseFetch';



function Shipments() {

    const navigate = useNavigate();
    const customerr= useSelector((store)=>store.customer)
    const{res, Error, loading}=UseFetch(`https://demo3522726.mockable.io/get_single_customer_shipments/123456789`)
    console.log(customerr)
  return (
    <div>
      <div onClick={()=>{
        navigate(-1)
      }}><img className='mb-5' src={back} alt="" /></div>

      <div className='flex flex-col md:flex-row space-y-5 justify-between bg-lightestGrey py-7 px-[26px] rounded-md border-[1px] border-grey w-auto md:max-w-[647px] '>
        <div className='flex flex-col md:flex-row md:space-x-5'>
          <img  className='w-20 h-20 rounded-full' src={customerr.cust.avatar} alt="profile" />
          <div>
            <p className='font-medium text-lg'>{customerr.cust.name}</p>
            <p className='text-lg'>{customerr.cust.email}</p>
            <p className='text-lg'>{customerr.cust.phone}</p>
          </div>
        </div>
        <div>
            
            <button 
                className='py-3.5 px-6 text-white bg-[#3AB44A] rounded-md flex items-center text-white outline-none'
                
                onClick={() => navigate(``)}
                >
                <span className='font-medium text-base'>Edit</span>
                
            </button>

        </div>
      </div>

      <div className='overflow-x-auto '>
        <div className='flex justify-between mt-10 shipment-button min-w-[1000px]'>
          <div className='flex space-x-4 md:flex-nowrap justify-between md:w-auto max-w-[647px] '>
           
            <button 
                className='py-3.5 px-6 text-white bg-[#3AB44A] rounded-md flex items-center text-white outline-none'
                
                onClick={() => navigate(``)}
                >
                <span className='font-medium text-base'>Add New Shipment</span>
                <img src={cross} className='ml-2' alt="" /> 
            </button>
           
            <button 
                className='py-3.5 px-6 text-[#374151] bg-[#F3F4F6] rounded-md flex items-center text-white outline-none'
                
                onClick={() => navigate(``)}
                >
                <span className='font-medium text-base'>Shipment Type</span>
                <img src={caret} className='ml-2' alt="" />
            </button>
           
            <button 
                className='py-3.5 px-6 text-[#374151] bg-[#F3F4F6] rounded-md flex items-center text-white outline-none'
                
                onClick={() => navigate(``)}
                >
                <span className='font-medium text-base'>Shipment Date</span>
                <img src={caret} className='ml-2' alt="" />
            </button>

          </div>
          <div className="input_container">
            <input type="text" className='w-72 py-2 px-3 rounded-md pl-10 border-grey border-[1px] placeholder:text-sm placeholder:text-[#9CA3AF] focus:outline-0' placeholder='search by shipment ID, Destination'/>
            <img src={search} alt="search" />
          </div>
        </div>
      </div>

      <ShipmentsTable  data={res}/>
      
    </div>
  )
}

export default Shipments