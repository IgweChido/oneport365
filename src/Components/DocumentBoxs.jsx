import React from 'react'
import upload from '../Images/upload-doc.svg'

function DocumentBoxs() {
  return (
    <div className='border border-2 flex items-center gap-x-5 px-7 py-6 rounded-lg mb-5'>
      {/* image */}
      <div>
        <img src={upload} alt=''></img>
      </div>

      {/* words */}
      <div>
        <p className='font-extrabold text-base leading-7'>NXP Form</p>
        <p className='font-bold text-base leading-7'>NXP-Form.pdf</p>
        <p className='text-sm font-semibold'>Uploaded by you</p>
      </div>
    </div>
  )
}

export default DocumentBoxs