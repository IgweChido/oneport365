import React from 'react'
import CustomerTable from '../Components/CustomerTable'
import { useNavigate } from 'react-router-dom';
import UseFetch from '../UseFetch';
//icons
import cross from '../Images/cross.svg';

function Customers() {

    const navigate = useNavigate();
    const{res, Error, loading}=UseFetch('https://demo3522726.mockable.io/get_customers')

  return (
    <div>
        
        <button 
            className='py-3.5 px-6 text-white bg-[#3AB44A] rounded-md flex items-center text-white outline-none'
            
            onClick={() => navigate(``)}
        >
            <span className='font-medium text-base'>Add Customer</span>
            <img src={cross} className='ml-2' alt="" />
        </button>
        <CustomerTable  customer={res}/>
    </div>
  )
}

export default Customers