import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Head from '../Components/Head';

function MainPage() {
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <Head/>
        <div className='py-[70px] px-[40px] md:px-[70px]'>

        </div>
    </div>
  )
}

export default MainPage