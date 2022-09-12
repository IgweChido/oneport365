import React from 'react'
import UploadBox from './UploadBox'

function UploadModal() {
  return (
    <div>

      {/* box in the modal */}
      <div>
        {/* cancel button */}
        <div>
          <img src='' alt=''></img>
        </div>

        {/* header */}
        <div>
          <p>Documents Upload</p>
          <p>Rhoncus dui convallis lorem egestas molestie vitae nibh.</p>
        </div>

        {/* form area */}
        <form>
          {/* input area */}
          <div>
            <label>Select Document type to upload</label>
            <input />
          </div>

          <UploadBox/>

          {/* upload button */}
          <button>Upload</button>


        </form>
      </div>
    </div>
  )
}

export default UploadModal