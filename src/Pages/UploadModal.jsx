
import UploadBox from '../Components/UploadBox'
import cancel from '../Images/cancel.svg'
import {useDispatch, useSelector} from 'react-redux'
import { ShowModal } from '../Reducers/ModalSlice'
import React, { useState, useRef, useEffect } from 'react'

function UploadModal({setFixed}) {
  const ref = useRef()
  const dispatch = useDispatch()
  const {mSlice}= useSelector((state)=>state.modal)

    // user growth  side outside click handler
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          mSlice  &&
           dispatch(ShowModal(false))
           setFixed(false)
          
        }
        
      };
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }, [ mSlice]);

  return (
    <div className='flex  w-screen h-screen fixed left-0 top-0 z-10'>
      <div className='bg-black opacity-50 h-screen w-full'>

      </div>

      {/* positioned div */}
      <div ref={ref} className='absolute right-0 bg-white h-screen lg:w-39-per md:w-2/4 lg:py-8 lg:px-9 p-4 opacity-100'>
      
        {/* cancel button */}
        <div className='sm:mb-6 mb-6 md:mb-8 cursor-pointer '
        onClick={()=>{
          dispatch(ShowModal(false))
          setFixed(false)
        }}>
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