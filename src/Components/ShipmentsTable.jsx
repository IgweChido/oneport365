import React from 'react'
import { Link, useParams } from 'react-router-dom';

import link from '../Images/link.svg';
import imports from '../Images/import.svg';
import exports  from '../Images/export.svg';
import {useDispatch, useSelector} from 'react-redux'
import { AddCurrentDest } from '../Reducers/CustomerSlice';

function ShipmentsTable({data}) {

  const dispatch = useDispatch()

  return (
    <div className='overflow-x-auto mt-10'>
        <table className='w-full min-w-[1000px]'>
            <thead className='mb-[11px]'>
                <tr>
                  <td className='text-lightGrey text-xs font-medium'>SHIPMENT TYPE</td>
                  <td className='text-lightGrey text-xs font-medium'>ORIGIN</td>
                  <td className='text-white text-xs font-medium'>LINK</td>
                  <td className='text-lightGrey text-xs font-medium'>DESTINATION</td>
                  <td className='text-lightGrey text-xs font-medium'>SHIPMENT DATE</td>
                  <td className='text-lightGrey text-xs font-medium'>SHIPPING ID</td>
                </tr>
            </thead>
            <tbody>
                {data && data.map(ship => (
                <tr key={ship._id}>
                    <td>
                        <div className="name flex items-center space-x-3 py-[20px]">
                            <img className='ml-[26px]' src={exports} alt="profile" />
                            <p>{ship.shipping_type.charAt(0).toUpperCase() + ship.shipping_type.slice(1)}</p>
                        </div> 
                    </td>
                    <td>
                      <p>{ship.origin_port_code}</p>
                      <p className='text-lightGrey'>{`${ship.origin_port_city}, ${ship.origin_port_country}`}</p>
                    </td>
                    <td>
                      <div><img src={link} alt="" /></div>
                    </td>
                    <td>
                      <p>Airlington</p>
                      <p className='text-lightGrey'>VA, USA</p>
                    </td>
                    <td>{ship.shipment_pickup_date.slice(0, 10)}</td>
                    <td>{ship._id}</td>
                    <td>
                        <div className='flex flex-1 justify-end items-center'>
                            <Link to='/shipmentdetail' onClick={()=>{
                                dispatch(AddCurrentDest({
                                  code: ship.origin_port_code,
                                  city:`${ship.origin_port_city}, ${ship.origin_port_country}`,
                                }))
                            }} className='py-3.5 px-5 text-sm rounded-md bg-main-green ml-[19px] mr-[18px] text-white'>View Details</Link>
                        </div>
                    </td>     
                </tr>
                ))}
            </tbody>
        </table>
          
     
      </div>
  )
}

export default ShipmentsTable