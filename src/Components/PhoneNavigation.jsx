import React from 'react'
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import cancel from '../Images/cancel.svg'
import { NavLink, useLocation } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { ShowNav } from '../Reducers/ModalSlice';

function PhoneNavigation({setFixed}) {

    const dispatch = useDispatch()
    const location = useLocation()
    const[nav,setNav] = useState(true)
    const {pSlice}= useSelector((state)=>state.modal)
    const ref = useRef()

    useEffect(()=>{
        if(location.pathname === '/shipmentdetail'){
                setNav(false)
        }
        else{
            setNav(true)
        }
    },[location.pathname])

    // user growth  side outside click handler
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            pSlice  &&
             dispatch(ShowNav(false))
             setFixed(false)
            
          }
          
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, [ pSlice]);

  return (
    <div className='laptop:hidden block flex  w-screen h-screen fixed left-0 top-0 z-10'>
      <div className='bg-black opacity-50 h-screen w-full'>

      </div>

      {/* positioned div */}
      <div ref={ref}  className=' absolute   right-0 bg-white h-screen w-full sm:w-3/4 lg:w-39-per md:w-2/4   opacity-100'>
        {/* cancel button */}
        <div className=' my-6 md:my-8 cursor-pointer  mx-[41px] '
        onClick={()=>{
         dispatch(ShowNav(false))
         setFixed(false)
        }}>
          <img src={cancel} alt=''></img>
        </div>

        <div className=' overflow-y-auto h-full  t-scroll mt-[10px] mx-[41px] px-[15px] '>
            <nav className='mt-[10px]   flex flex-col space-y-8 about mb-[100px]'>

                <NavLink to='' className='  flex items-center space-x-[24px] text-lg '>
                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 .6A2.4 2.4 0 0 0 .6 3v2.4A2.4 2.4 0 0 0 3 7.8h2.4a2.4 2.4 0 0 0 2.4-2.4V3A2.4 2.4 0 0 0 5.4.6H3ZM3 10.2a2.4 2.4 0 0 0-2.4 2.4V15A2.4 2.4 0 0 0 3 17.4h2.4A2.4 2.4 0 0 0 7.8 15v-2.4a2.4 2.4 0 0 0-2.4-2.4H3ZM10.2 3A2.4 2.4 0 0 1 12.6.6H15A2.4 2.4 0 0 1 17.4 3v2.4A2.4 2.4 0 0 1 15 7.8h-2.4a2.4 2.4 0 0 1-2.4-2.4V3ZM10.2 12.6a2.4 2.4 0 0 1 2.4-2.4H15a2.4 2.4 0 0 1 2.4 2.4V15a2.4 2.4 0 0 1-2.4 2.4h-2.4a2.4 2.4 0 0 1-2.4-2.4v-2.4Z" fill="#6B7280"/>
                    </svg>
                    <span className='block font-semibold text-[18px]'>Dashboard</span>
                </NavLink>

                <NavLink to='' className='flex items-center space-x-[24px] text-lg'>
                    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.6 10A9.6 9.6 0 1 1 .4 10a9.6 9.6 0 1 1 19.2 0Zm-7.2-3.6a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0ZM10 11.2a6 6 0 0 0-5.455 3.499 7.184 7.184 0 0 0 5.455 2.5c2.18 0 4.135-.969 5.455-2.5a6 6 0 0 0-5.455-3.5Z" fill="#6B7280"/>
                    </svg>
                    <span className='block font-semibold text-[18px]'>Admin</span>
                </NavLink>

               
                    {
                        nav ?
                        <NavLink to='' className='flex items-center space-x-[12px] text-lg ml-[-10px]'>
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="44" height="44" rx="8" fill="#3AB44A"/>
                            <path d="M25.5992 17.2001C25.5992 19.1883 23.9874 20.8001 21.9992 20.8001C20.011 20.8001 18.3992 19.1883 18.3992 17.2001C18.3992 15.2119 20.011 13.6001 21.9992 13.6001C23.9874 13.6001 25.5992 15.2119 25.5992 17.2001Z" fill="white"/>
                            <path d="M31.5992 19.6001C31.5992 20.9256 30.5247 22.0001 29.1992 22.0001C27.8737 22.0001 26.7992 20.9256 26.7992 19.6001C26.7992 18.2746 27.8737 17.2001 29.1992 17.2001C30.5247 17.2001 31.5992 18.2746 31.5992 19.6001Z" fill="white"/>
                            <path d="M26.7992 28.0001C26.7992 25.3491 24.6502 23.2001 21.9992 23.2001C19.3483 23.2001 17.1992 25.3491 17.1992 28.0001V31.6001H26.7992V28.0001Z" fill="white"/>
                            <path d="M17.1992 19.6001C17.1992 20.9256 16.1247 22.0001 14.7992 22.0001C13.4737 22.0001 12.3992 20.9256 12.3992 19.6001C12.3992 18.2746 13.4737 17.2001 14.7992 17.2001C16.1247 17.2001 17.1992 18.2746 17.1992 19.6001Z" fill="white"/>
                            <path d="M29.1992 31.6001V28.0001C29.1992 26.7351 28.873 25.5463 28.3001 24.5133C28.5875 24.4394 28.8888 24.4001 29.1992 24.4001C31.1874 24.4001 32.7992 26.0119 32.7992 28.0001V31.6001H29.1992Z" fill="white"/>
                            <path d="M15.6983 24.5133C15.1254 25.5463 14.7992 26.7351 14.7992 28.0001V31.6001H11.1992V28.0001C11.1992 26.0119 12.811 24.4001 14.7992 24.4001C15.1097 24.4001 15.4109 24.4394 15.6983 24.5133Z" fill="white"/>
                            </svg>
                            <span className='block font-semibold text-[18px] text-[black]'>Customers</span>
                        </NavLink>

                        :
                        <NavLink to='' className='flex items-center space-x-[24px] text-lg'>
                        <svg width="22" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6 4.2a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM20.6 6.6a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0ZM15.8 15a4.8 4.8 0 0 0-9.6 0v3.6h9.6V15ZM6.2 6.6a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0ZM18.2 18.6V15a7.167 7.167 0 0 0-.9-3.487A3.6 3.6 0 0 1 21.8 15v3.6h-3.6ZM4.7 11.513A7.167 7.167 0 0 0 3.8 15v3.6H.2V15a3.6 3.6 0 0 1 4.5-3.487Z" fill="#6B7280"/>
                        </svg>
                        <span className='block font-semibold text-[18px]'>Customers</span>
                        </NavLink>
                    }
                  

               
                    {
                    !nav?
                    <NavLink to='' className='flex items-center space-x-[12px] text-lg ml-[-10px]' >
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="44" height="44" rx="8" fill="#3AB44A"/>
                        <path d="M19.5984 29.7998C19.5984 30.7939 18.7925 31.5998 17.7984 31.5998C16.8043 31.5998 15.9984 30.7939 15.9984 29.7998C15.9984 28.8057 16.8043 27.9998 17.7984 27.9998C18.7925 27.9998 19.5984 28.8057 19.5984 29.7998Z" fill="white"/>
                        <path d="M27.9984 29.7998C27.9984 30.7939 27.1925 31.5998 26.1984 31.5998C25.2043 31.5998 24.3984 30.7939 24.3984 29.7998C24.3984 28.8057 25.2043 27.9998 26.1984 27.9998C27.1925 27.9998 27.9984 28.8057 27.9984 29.7998Z" fill="white"/>
                        <path d="M13.5984 14.7998C12.9357 14.7998 12.3984 15.3371 12.3984 15.9998V27.9998C12.3984 28.6625 12.9357 29.1998 13.5984 29.1998H14.8584C15.1364 27.8305 16.3471 26.7998 17.7984 26.7998C19.2498 26.7998 20.4605 27.8305 20.7384 29.1998H21.9984C22.6612 29.1998 23.1984 28.6625 23.1984 27.9998V15.9998C23.1984 15.3371 22.6612 14.7998 21.9984 14.7998H13.5984Z" fill="white"/>
                        <path d="M26.7984 18.3998C26.1357 18.3998 25.5984 18.9371 25.5984 19.5998V26.8598C25.7923 26.8205 25.993 26.7998 26.1984 26.7998C27.6498 26.7998 28.8605 27.8305 29.1384 29.1998H30.3984C31.0612 29.1998 31.5984 28.6625 31.5984 27.9998V21.9998C31.5984 21.6815 31.472 21.3763 31.247 21.1513L28.847 18.7513C28.6219 18.5262 28.3167 18.3998 27.9984 18.3998H26.7984Z" fill="white"/>
                    </svg>
                    <span className='block font-semibold text-[18px] text-[black]'>Shipments</span>
                    </NavLink>
                    :
                    <NavLink to='' className='flex items-center space-x-[24px] text-lg'>
                    <svg width="20" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.6 15.8a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0ZM16 15.8a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0Z" fill="#6B7280"/>
                        <path d="M1.6.8A1.2 1.2 0 0 0 .4 2v12a1.2 1.2 0 0 0 1.2 1.2h1.26a3.001 3.001 0 0 1 5.88 0H10a1.2 1.2 0 0 0 1.2-1.2V2A1.2 1.2 0 0 0 10 .8H1.6ZM14.8 4.4a1.2 1.2 0 0 0-1.2 1.2v7.26a3.001 3.001 0 0 1 3.54 2.34h1.26a1.2 1.2 0 0 0 1.2-1.2V8a1.2 1.2 0 0 0-.351-.848l-2.4-2.4A1.2 1.2 0 0 0 16 4.4h-1.2Z" fill="#6B7280"/>
                    </svg>
                    <span className='block font-semibold text-[18px]'>Shipments</span>
                    </NavLink>
                    

                    }
                 

                <NavLink to='' className='flex items-center space-x-[24px] text-lg'>
                    <svg width="20" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="m12.4.903-4.8 4.8v15.394l4.8-4.8V.903ZM2.449 2.952A1.2 1.2 0 0 0 .4 3.8v12c0 .318.126.624.351.849L5.2 21.097V5.703L2.449 2.952ZM19.249 5.352 14.8.903v15.394l2.752 2.752A1.2 1.2 0 0 0 19.6 18.2v-12a1.2 1.2 0 0 0-.351-.848Z" fill="#6B7280"/>
                    </svg>
                    <span className='block font-semibold text-[18px]'>Tracking</span>
                </NavLink>

                <NavLink to='' className='flex items-center space-x-[24px] text-lg'>
                    <svg width="16" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M.8 2.8A2.4 2.4 0 0 1 3.2.4h5.503a2.4 2.4 0 0 1 1.697.703L14.497 5.2a2.4 2.4 0 0 1 .703 1.697V17.2a2.4 2.4 0 0 1-2.4 2.4H3.2a2.4 2.4 0 0 1-2.4-2.4V2.8ZM3.2 10a1.2 1.2 0 0 1 1.2-1.2h7.2a1.2 1.2 0 1 1 0 2.4H4.4A1.2 1.2 0 0 1 3.2 10Zm1.2 3.6a1.2 1.2 0 0 0 0 2.4h7.2a1.2 1.2 0 1 0 0-2.4H4.4Z" fill="#6B7280"/>
                    </svg>
                    <span className='block font-semibold text-[18px]'>Documents</span>
                </NavLink>

                <NavLink to='' className='flex items-center space-x-[24px] text-lg'>
                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 .6A2.4 2.4 0 0 0 .6 3v2.4A2.4 2.4 0 0 0 3 7.8h2.4a2.4 2.4 0 0 0 2.4-2.4V3A2.4 2.4 0 0 0 5.4.6H3ZM3 10.2a2.4 2.4 0 0 0-2.4 2.4V15A2.4 2.4 0 0 0 3 17.4h2.4A2.4 2.4 0 0 0 7.8 15v-2.4a2.4 2.4 0 0 0-2.4-2.4H3ZM10.2 3A2.4 2.4 0 0 1 12.6.6H15A2.4 2.4 0 0 1 17.4 3v2.4A2.4 2.4 0 0 1 15 7.8h-2.4a2.4 2.4 0 0 1-2.4-2.4V3ZM10.2 12.6a2.4 2.4 0 0 1 2.4-2.4H15a2.4 2.4 0 0 1 2.4 2.4V15a2.4 2.4 0 0 1-2.4 2.4h-2.4a2.4 2.4 0 0 1-2.4-2.4v-2.4Z" fill="#6B7280"/>
                    </svg>
                    <span className='block font-semibold text-[18px]'>Rates</span>
                </NavLink>

                <NavLink to='' className='flex items-center space-x-[24px] text-lg'>
                    <svg width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.8.4a2.4 2.4 0 0 0-2.4 2.4v9.6a2.4 2.4 0 0 0 2.4 2.4H15a2.4 2.4 0 0 0 2.4-2.4V5.697A2.4 2.4 0 0 0 16.697 4L13.8 1.103A2.4 2.4 0 0 0 12.103.4H7.8Z" fill="#6B7280"/>
                        <path d="M.6 7.6A2.4 2.4 0 0 1 3 5.2v12h9.6a2.4 2.4 0 0 1-2.4 2.4H3a2.4 2.4 0 0 1-2.4-2.4V7.6Z" fill="#6B7280"/>
                    </svg>
                    <span className='block font-semibold text-[18px]'>Quotes</span>
                </NavLink>

                <NavLink to='' className='flex items-center space-x-[24px] text-lg'>
                    <svg width="16" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.2.4A2.4 2.4 0 0 0 .8 2.8v14.4a2.4 2.4 0 0 0 2.4 2.4h9.6a2.4 2.4 0 0 0 2.4-2.4V6.897a2.4 2.4 0 0 0-.703-1.697L10.4 1.103A2.4 2.4 0 0 0 8.703.4H3.2ZM4.4 10a1.2 1.2 0 0 0 0 2.4h7.2a1.2 1.2 0 1 0 0-2.4H4.4Z" fill="#6B7280"/>
                    </svg>
                    <span className='block font-semibold text-[18px]'>Invoice</span>
                </NavLink>
            </nav>
       
        </div>
       
        

      </div>

    </div>
  )
}

export default PhoneNavigation