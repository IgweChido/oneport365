import React from 'react'
import CustomerTable from '../Components/CustomerTable'
import { useNavigate } from 'react-router-dom';
//icons
import cross from '../Images/cross.svg';

function Customers() {
    const navigate = useNavigate();
  return (
    <div>
        
        <button 
            className='py-3.5 px-6 text-white bg-[#3AB44A] rounded-md flex items-center text-white outline-none'
            
            onClick={() => navigate(``)}
        >
            <span className='font-medium text-base'>Add Customer</span>
            {<img src={cross} className='ml-2' alt="" /> || ''}
        </button>
        <CustomerTable  />
    </div>
  )
}

export default Customers