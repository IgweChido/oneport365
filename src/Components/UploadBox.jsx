import React, { useState, useEffect, useRef } from 'react'
import upload from '../Images/uploading.svg'
import del from '../Images/delete.svg'
import refresh from '../Images/refresh.svg'
import icon from '../Images/Icon.svg'
import '../Animate.css'

function UploadBox() {
  const [check, setCheck]=useState(true)
  const [check1, setCheck1]=useState(false)
  const [check2, setCheck2]=useState(false)
  const [load, setLoad]= useState(true)

  const ref = useRef()
  const noRef= useRef()
  const ref1 = useRef()
 

  // user growth  side outside click handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && (!ref.current.contains(event.target) && noRef.current.contains(event.target))) {
        check1 &&
        setCheck(true)
        setCheck1(false)    
      }

      else if (ref1.current && (!ref1.current.contains(event.target) && noRef.current.contains(event.target))) {
        check2 &&
        setCheck(true)
        setCheck2(false)    
      }
      
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ check ,check1]);


  // method for pushing the load
  const Loaded=()=>{
    setTimeout(()=>{
      setLoad(false)
    },3000)
  }


  return (
    <div className='flex justify-between items-center border  p-4 rounded-md bg-#FAFFFB' ref={noRef}>
      {
        check &&
        <div className='w-full ' onClick={()=>{
          setCheck(false)
          setCheck1(true)
          Loaded()
        }}>

          {/* image */}
          <div className='block mx-auto w-fit mb-3'>
              <img src={upload} alt=''></img>
          </div>

          <p className='text-base font-normal text-center '>
            <span className='text-main-green'>Click to upload a file </span>
             or drag and drop
          </p>
          <p className='text-sm font-normal text-center text-[#6B7280]'>PNG, JPG, , GIF upto 5MB</p>
      </div>
      }
      
     { check1 &&
      <div className=' flex items-center gap-x-5  w-full' >
        {/* image */}
        <div>
          <img src={upload} alt=''></img>
        </div>

        {/* words */}
        {
          load &&
          <div className='w-full '>
            <p className='font-extrabold text-base leading-7'>Portfolio.png</p>

              <div className='animate-cont'>
                <div className='animate-main'></div>
              </div>

              <div  className='flex items-center gap-x-1'>
                <p className='text-grey gap-x-1 text-xs font-normal '>525KB</p>
                <p className='w-1 h-1 rounded-full bg-black'></p>
                <p className='gap-x-1 text-xs font-normal'>30% uploaded</p>

              </div>
          </div>
        }
        
        
       { 
        !load &&
        <div >
            <p className='font-extrabold text-base leading-7'>Portfolio.png</p>

            <div ref={ref} className='flex items-center gap-x-1' onClick={()=>{
              setCheck1(false)
              setCheck2(true)
            }}>
              <p className='text-grey gap-x-1 text-xs font-normal '>525KB</p>
              <p className='w-1 h-1 rounded-full bg-black'></p>
              <p className='gap-x-1 text-xs font-normal'>100% uploaded</p>

            </div>
            
          </div>
        }
      
      </div>
      }
      
      { check2 &&
       <div className=' flex items-center gap-x-5    '>
        {/* image */}
        <div>
          <img src={upload} alt=''></img>
        </div>

         {/* words */}
        
         <div>
         <p className='font-extrabold text-base leading-7'>Portfolio.png</p>
        
           <p ref={ref1} className='text-xs font-semibold text-rose-500 cursor-pointer' onClick={()=>{
            setCheck2(false)
            setCheck1(true)
           }}>Opps! Upload failed</p>
         </div>
      
       </div>

      }



      {
        check1 &&
        <div>
          {
                !load &&
                <div>
                  <img src={refresh} alt=''></img>
                </div>
              }
              {
                load &&
                <div>
                  <img src={icon} alt=''></img>
                </div>
              }
        </div>
      }
       
         {
          check2 &&
          <div>
            <img src={del} alt=''></img>
          </div>
        }

    </div>
    
  )
}

export default UploadBox