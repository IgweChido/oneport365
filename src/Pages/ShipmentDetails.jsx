import React from 'react'
import ExportBox from '../Components/ExportBox'
import ShipmentsNav from '../Components/ShipmentsNav'
import UploadedDocs from '../Components/UploadedDocs'
import {useDispatch, useSelector} from 'react-redux'
import UploadModal from './UploadModal'

function ShipmentDetails({setFixed}) {
  const {mSlice}= useSelector((state)=>state.modal)
  console.log(mSlice)
  console.log('test1')
  return (
    <div className='m-4 '>
        <ShipmentsNav/>
        <ExportBox/>
        <UploadedDocs setFixed={setFixed}/>

        {
          mSlice &&
          <UploadModal setFixed={setFixed}/>

        }
    </div>
    
  )
}

export default ShipmentDetails