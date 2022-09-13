import React from 'react'
import upload from '../Images/uploading.svg'

function UploadBox() {
  return (
    <div className='border border-black p-4 rounded-md bg-#FAFFFB '>

        {/* image */}
        <div className='block mx-auto w-fit mb-3'>
            <img src={upload} alt=''></img>
        </div>

        <p className='text-base font-normal text-center'>Click to upload a file or drag and drop</p>
        <p className='text-sm font-normal text-center'>PNG, JPG, , GIF upto 5MB</p>
    </div>
  )
}

export default UploadBox