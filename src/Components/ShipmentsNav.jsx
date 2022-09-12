import React from 'react'

function ShipmentsNav() {
  return (
    <div>
        {/* headers */}
        <div className="text-3xl font-bold underline">
            {/* left */}
            <div>
                <img src='' alt=''></img>
                <p>Shipments</p>
            </div>

            {/* right */}
            <div>
                {/* box1 */}
                <button>Invoice</button>
                {/* box2 */}
                <button>Track/Update Shipment</button>
            </div>
        </div>
    </div>
  )
}

export default ShipmentsNav