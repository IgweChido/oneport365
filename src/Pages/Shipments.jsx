import React from 'react'
import ExportBox from '../Components/ExportBox'
import ShipmentsNav from '../Components/ShipmentsNav'
import UploadedDocs from '../Components/UploadedDocs'

function Shipments() {
  return (
    <div>
        <ShipmentsNav/>
        <ExportBox/>
        <UploadedDocs/>
    </div>
    
  )
}

export default Shipments