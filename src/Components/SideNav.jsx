import React from 'react'
import { NavLink } from 'react-router-dom';

//images
import logo from '../Images/oneport-logo.svg';

function SideNav() {
  return (
    <div className='border hidden md:block max-h-screen h-screen w-72 shrink-0 py-[35px]  border-x-[1px] border-x-lighterGrey overflow-y-hidden '>
        
        <div className=' mb-[20px]'><img src={logo} alt="logo" className="w-40" /></div>
        <div className='h-full   overflow-auto  px-[41px] pb-[100px]'>
            <nav className='mt-[83px] flex flex-col space-y-8 about '>
                <NavLink to='' className='flex items-center space-x-9 text-lg'>
                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 .6A2.4 2.4 0 0 0 .6 3v2.4A2.4 2.4 0 0 0 3 7.8h2.4a2.4 2.4 0 0 0 2.4-2.4V3A2.4 2.4 0 0 0 5.4.6H3ZM3 10.2a2.4 2.4 0 0 0-2.4 2.4V15A2.4 2.4 0 0 0 3 17.4h2.4A2.4 2.4 0 0 0 7.8 15v-2.4a2.4 2.4 0 0 0-2.4-2.4H3ZM10.2 3A2.4 2.4 0 0 1 12.6.6H15A2.4 2.4 0 0 1 17.4 3v2.4A2.4 2.4 0 0 1 15 7.8h-2.4a2.4 2.4 0 0 1-2.4-2.4V3ZM10.2 12.6a2.4 2.4 0 0 1 2.4-2.4H15a2.4 2.4 0 0 1 2.4 2.4V15a2.4 2.4 0 0 1-2.4 2.4h-2.4a2.4 2.4 0 0 1-2.4-2.4v-2.4Z" fill="#6B7280"/>
                    </svg>
                    <span className='block'>Dashboard</span>
                </NavLink>
                <NavLink to='' className='flex items-center space-x-9 text-lg'>
                    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.6 10A9.6 9.6 0 1 1 .4 10a9.6 9.6 0 1 1 19.2 0Zm-7.2-3.6a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0ZM10 11.2a6 6 0 0 0-5.455 3.499 7.184 7.184 0 0 0 5.455 2.5c2.18 0 4.135-.969 5.455-2.5a6 6 0 0 0-5.455-3.5Z" fill="#6B7280"/>
                    </svg>
                    <span className='block'>Admin</span>
                </NavLink>
                <NavLink to='' className='flex items-center space-x-9 text-lg'>
                    <svg width="22" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6 4.2a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM20.6 6.6a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0ZM15.8 15a4.8 4.8 0 0 0-9.6 0v3.6h9.6V15ZM6.2 6.6a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0ZM18.2 18.6V15a7.167 7.167 0 0 0-.9-3.487A3.6 3.6 0 0 1 21.8 15v3.6h-3.6ZM4.7 11.513A7.167 7.167 0 0 0 3.8 15v3.6H.2V15a3.6 3.6 0 0 1 4.5-3.487Z" fill="#6B7280"/>
                    </svg>
                    <span className='block'>Customers</span>
                </NavLink>
                <NavLink to='' className='flex items-center space-x-9 text-lg'>
                    <svg width="20" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.6 15.8a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0ZM16 15.8a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0Z" fill="#6B7280"/>
                        <path d="M1.6.8A1.2 1.2 0 0 0 .4 2v12a1.2 1.2 0 0 0 1.2 1.2h1.26a3.001 3.001 0 0 1 5.88 0H10a1.2 1.2 0 0 0 1.2-1.2V2A1.2 1.2 0 0 0 10 .8H1.6ZM14.8 4.4a1.2 1.2 0 0 0-1.2 1.2v7.26a3.001 3.001 0 0 1 3.54 2.34h1.26a1.2 1.2 0 0 0 1.2-1.2V8a1.2 1.2 0 0 0-.351-.848l-2.4-2.4A1.2 1.2 0 0 0 16 4.4h-1.2Z" fill="#6B7280"/>
                    </svg>
                    <span className='block'>Shipments</span>
                </NavLink>
                <NavLink to='' className='flex items-center space-x-9 text-lg'>
                    <svg width="20" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="m12.4.903-4.8 4.8v15.394l4.8-4.8V.903ZM2.449 2.952A1.2 1.2 0 0 0 .4 3.8v12c0 .318.126.624.351.849L5.2 21.097V5.703L2.449 2.952ZM19.249 5.352 14.8.903v15.394l2.752 2.752A1.2 1.2 0 0 0 19.6 18.2v-12a1.2 1.2 0 0 0-.351-.848Z" fill="#6B7280"/>
                    </svg>
                    <span className='block'>Tracking</span>
                </NavLink>
                <NavLink to='' className='flex items-center space-x-9 text-lg'>
                    <svg width="16" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M.8 2.8A2.4 2.4 0 0 1 3.2.4h5.503a2.4 2.4 0 0 1 1.697.703L14.497 5.2a2.4 2.4 0 0 1 .703 1.697V17.2a2.4 2.4 0 0 1-2.4 2.4H3.2a2.4 2.4 0 0 1-2.4-2.4V2.8ZM3.2 10a1.2 1.2 0 0 1 1.2-1.2h7.2a1.2 1.2 0 1 1 0 2.4H4.4A1.2 1.2 0 0 1 3.2 10Zm1.2 3.6a1.2 1.2 0 0 0 0 2.4h7.2a1.2 1.2 0 1 0 0-2.4H4.4Z" fill="#6B7280"/>
                    </svg>
                    <span className='block'>Documents</span>
                </NavLink>
                <NavLink to='' className='flex items-center space-x-9 text-lg'>
                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 .6A2.4 2.4 0 0 0 .6 3v2.4A2.4 2.4 0 0 0 3 7.8h2.4a2.4 2.4 0 0 0 2.4-2.4V3A2.4 2.4 0 0 0 5.4.6H3ZM3 10.2a2.4 2.4 0 0 0-2.4 2.4V15A2.4 2.4 0 0 0 3 17.4h2.4A2.4 2.4 0 0 0 7.8 15v-2.4a2.4 2.4 0 0 0-2.4-2.4H3ZM10.2 3A2.4 2.4 0 0 1 12.6.6H15A2.4 2.4 0 0 1 17.4 3v2.4A2.4 2.4 0 0 1 15 7.8h-2.4a2.4 2.4 0 0 1-2.4-2.4V3ZM10.2 12.6a2.4 2.4 0 0 1 2.4-2.4H15a2.4 2.4 0 0 1 2.4 2.4V15a2.4 2.4 0 0 1-2.4 2.4h-2.4a2.4 2.4 0 0 1-2.4-2.4v-2.4Z" fill="#6B7280"/>
                    </svg>
                    <span className='block'>Rates</span>
                </NavLink>
                <NavLink to='' className='flex items-center space-x-9 text-lg'>
                    <svg width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.8.4a2.4 2.4 0 0 0-2.4 2.4v9.6a2.4 2.4 0 0 0 2.4 2.4H15a2.4 2.4 0 0 0 2.4-2.4V5.697A2.4 2.4 0 0 0 16.697 4L13.8 1.103A2.4 2.4 0 0 0 12.103.4H7.8Z" fill="#6B7280"/>
                        <path d="M.6 7.6A2.4 2.4 0 0 1 3 5.2v12h9.6a2.4 2.4 0 0 1-2.4 2.4H3a2.4 2.4 0 0 1-2.4-2.4V7.6Z" fill="#6B7280"/>
                    </svg>
                    <span className='block'>Quotes</span>
                </NavLink>
                <NavLink to='' className='flex items-center space-x-9 text-lg'>
                    <svg width="16" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.2.4A2.4 2.4 0 0 0 .8 2.8v14.4a2.4 2.4 0 0 0 2.4 2.4h9.6a2.4 2.4 0 0 0 2.4-2.4V6.897a2.4 2.4 0 0 0-.703-1.697L10.4 1.103A2.4 2.4 0 0 0 8.703.4H3.2ZM4.4 10a1.2 1.2 0 0 0 0 2.4h7.2a1.2 1.2 0 1 0 0-2.4H4.4Z" fill="#6B7280"/>
                    </svg>
                    <span className='block'>Invoice</span>
                </NavLink>
            </nav>
        </div>
        
    </div>
  )
}

export default SideNav