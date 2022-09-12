import React from 'react'

function DocsNavigation() {
  return (
    <div >
      {/* navigation */}
      <div className=' flex items-center  mb-6'>

        {/* documents */}
        <div className='py-2 px-6 border-b-2 border-black'>
          <p className='font-semibold text-base'>Documents</p>
        </div>

        {/* Cargo details */}
        <div className='py-2 px-6'>
          <p className='font-semibold text-base'>Cargo Details</p>
        </div>

        {/* Additional Services */}
        <div className='py-2 px-6'>
          <p className='font-semibold text-base'>Additional Services</p>
        </div>

        {/* Rates */}
        <div className='py-2 px-6'>
          <p className='font-semibold text-base'>Rates</p>
        </div>
        
      </div>
    </div>
  )
}

export default DocsNavigation