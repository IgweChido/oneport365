import React from 'react'
import arrow from '../Images/arrow-back.svg'

function ShipmentsNav() {
  return (
    <div>
        {/* headers */}
        <div className="lg:flex  lg:justify-between lg:items-center mb-4">
            {/* left */}
            <div className=' lg:flex lg:items-center lg:gap-x-7 '>
                <img src={arrow} alt=''></img>
                <p className='lg:text-2xl font-semibold'>Shipments</p>
            </div>

            {/* right */}
            <div className='lg:flex lg:items-center lg:gap-x-3'>
                {/* box1 */}
                <button className='border border-gray rounded-md p-3.5 font-bold text-base'>Invoice</button>
                {/* box2 */}
                <button className='border border-gray rounded-md p-3.5 font-bold text-base'>Track/Update Shipment</button>
            </div>
        </div>
    </div>
  )
}

export default ShipmentsNav