import React from 'react'
import connect from '../Images/connect.svg'
import arrow from '../Images/arrow-angle.svg'


function ExportBox() {
  return (
    <div className='overflow-x-auto'>
   <div className='mb-12 w-full min-w-[620px]'>

        {/* header */}
        <div className=' px-10 flex justify-between rounded-t-xl items-center h-24 bg-main-green '>
            {/* part1 */}
            <div className='flex items-center gap-x-2'>
                <img src={arrow} alt=''></img>
                <p className='text-white font-semibold text-xl'>Export</p>
            </div>

            {/* part2 */}
            <div>
                <p className='text-white text-lg'>Apr 02, 2022</p>
            </div>

            {/* part3 */}
            <div>
                <p className='text-white font-medium text-base opacity-70'>Shipment ID</p>
                <p className='text-white text-lg'>489395758</p>
            </div>
        </div>


        {/* body */}
        <div className=' rounded-b-xl px-10 py-8 flex gap-x-10 items-center h-40  bg-exp-img bg-cover 
        bg-no-repeat bg-center'>

            {/* part1 */}
            <div>
                <p className='font-semibold text-xs mb-6'>PORT OF DISCHARGE</p>
                <p className='font-bold  text-2xl mb-2'>NGAPP</p>
                <p className='font-semibold text-sm'>Lagos, Nigeria</p>
            </div>

            {/* image */}
            <div>
                <img src={connect} alt=''></img>
            </div>

            {/* part2 */}
            <div>
                <p className='font-semibold text-xs mb-6'>DELIVERY LOCATION</p>
                <p className='font-bold  text-2xl mb-2'>Arlington</p>
                <p className='font-semibold text-sm'>VA, USA</p>
            </div>
        </div>


    </div>
    </div>
 
  )
}

export default ExportBox