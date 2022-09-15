import React, { useState } from 'react'
import upload from '../Images/uploading.svg'
import del from '../Images/delete.svg'

function UploadBox() {
  const [check, setCheck]=useState(false)
  return (
    <div className='flex justify-between items-center border  p-4 rounded-md bg-#FAFFFB'>
      {
        check ?
        <div className=' '>

          {/* image */}
          <div className='block mx-auto w-fit mb-3'>
              <img src={upload} alt=''></img>
          </div>

          <p className='text-base font-normal text-center'>Click to upload a file or drag and drop</p>
          <p className='text-sm font-normal text-center'>PNG, JPG, , GIF upto 5MB</p>
      </div>
      :
      <div className=' flex items-center gap-x-5    '>
      {/* image */}
      <div>
        <img src={upload} alt=''></img>
      </div>

      {/* words */}
      
      <div>
        <p className='font-extrabold text-base leading-7'>Portfolio.png</p>
      
        <p className='text-sm font-semibold text-rose-500 cursor-pointer'>Opps! Upload failed</p>
      </div>
      
    </div>

      }

        {
          !check &&
          <div>
            <img src={del} alt=''></img>
          </div>
        }

    </div>
    
  )
}

export default UploadBox