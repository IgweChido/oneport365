import React from 'react'
import SideNav from '../Components/SideNav'
import MainPage from './MainPage'

function MainContainer() {
  return (
    <div className='flex font-inter min-h-screen h-screen w-full relative '>
        
        
        <SideNav/>
        <MainPage/>

    </div>
  )
}

export default MainContainer