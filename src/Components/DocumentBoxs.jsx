import React, { useState } from 'react'
import upload from '../Images/upload-doc.svg'
import del from '../Images/delete.svg'
import refresh from '../Images/refresh.svg'

function DocumentBoxs() {
  const [uploadd, setUploadd]= useState(true)
  return (
    <div className='border  flex items-center mb-5 rounded-lg justify-between h-32 px-7 py-6'>
        <div className=' flex items-center gap-x-5    '>
          {/* image */}
          <div>
            <img src={upload} alt=''></img>
          </div>

          {/* words */}
          {
            uploadd ?
          <div>
            <p className='font-extrabold text-base leading-7'>NXP Form</p>
            <p className='font-bold text-base leading-7'>NXP-Form.pdf</p>
            <p className='text-sm font-semibold cursor-pointer' onClick={()=> setUploadd(false)}>Uploaded by you</p>
          </div>
            :
          <div>
            <p className='font-extrabold text-base leading-7'>Portfolio.png</p>
          
            <p className='text-sm font-semibold text-rose-500 cursor-pointer' onClick={()=> setUploadd(true)}>Opps! Upload failed</p>
          </div>

          }
          
        </div>

        {  uploadd ?
          <div>
            <img src={del} alt=''></img>
          </div>
          :
          <div>
            <img src={refresh} alt=''></img>
          </div>

        }
    </div>
    
  )
}

export default DocumentBoxs