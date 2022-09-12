import React from 'react'
import DocsNavigation from './DocsNavigation'
import DocumentBoxs from './DocumentBoxs'

function UploadedDocs() {
  return (
    <div>

      <DocsNavigation/>

      {/* upload header */}
      <div className='flex justify-between items-center'>
        {/* left */}
        <div>
          <p>Uploaded Documents</p>
        </div>

        {/* Right */}
        <div>

          {/* button 1 */}
          <button></button>

          {/* button 2 */}
          <button>
            <p>Upload Document</p>
            <img src='' alt=''></img>
          </button>
        </div>
      </div>

      <DocumentBoxs/>
    </div>
  )
}

export default UploadedDocs