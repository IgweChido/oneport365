import React from 'react'
import UploadBox from '../Components/UploadBox'
import cancel from '../Images/cancel.svg'

function UploadModal() {
  return (
    <div className='bg-black opacity-50 w-screen h-screen relative'>

      {/* positioned div */}
      <div className='absolute right-0 bg-white h-screen lg:w-39-per md:w-2/4 lg:py-8 lg:px-9 p-4'>
      
        {/* cancel button */}
        <div className='sm:mb-6 mb-6 md:mb-8 '>
          <img src={cancel} alt=''></img>
        </div>

        {/* header */}
        <div className='sm:mb-6 md:mb-12 mb-4'>
          <p className='font-semibold sm:text-2xl text-xl'>Documents Upload</p>
          <p className='font-normal text-sm'>Rhoncus dui convallis lorem egestas molestie vitae nibh.</p>
        </div>

        {/* form area */}
        <form className='relative '>
          {/* input area */}
          <div>
            <label className='text-sm font-semibold '>Select Document type to upload</label>
            <input placeholder='Selecet document type' type='text'
             className='form-input border border-gray w-full p-3 h-11 mb-6 mt-2.5 font-normal text-sm' />
          </div>

          <UploadBox/>

          {/* upload button */}
          <button className='absolute right-0 rounded-md mt-5 py-4 px-14  font-bold text-base text-white bg-main-green'>Upload</button>

        </form>

      </div>

    </div>
  )
}

export default UploadModal