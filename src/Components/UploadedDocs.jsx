import React from 'react'
import DocsNavigation from './DocsNavigation'
import DocumentBoxs from './DocumentBoxs'
import upload from '../Images/doc-up.svg'

function UploadedDocs() {
  return (
    <div>

      <DocsNavigation/>

      {/* upload header */}
      <div className='flex-col sm:flex-row sm:flex justify-between items-center mb-7'>
        {/* left */}
        <div>
          <p className='text-base font-semibold mb-7 sm:mb-0'>Uploaded Documents</p>
        </div>

        {/* Right */}
        <div className='flex items-center gap-x-3'>

          {/* button 1 */}
          <button className='border border-gray rounded-md p-3.5 font-bold text-base'>Request Document</button>

          {/* button 2 */}
          <button className=' flex items-center rounded-md p-3.5 font-bold text-base text-white bg-main-green gap-x-2 '>
            <p>Upload Document</p>
            <img src={upload} alt=''></img>
          </button>
        </div>
      </div>

      <DocumentBoxs/>
    </div>
  )
}

export default UploadedDocs