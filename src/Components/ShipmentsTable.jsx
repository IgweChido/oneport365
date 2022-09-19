import {React, useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom';

import link from '../Images/link.svg';
import imports from '../Images/import.svg';
import exports  from '../Images/export.svg';
import {useDispatch, useSelector} from 'react-redux'
import { AddCurrentDest } from '../Reducers/CustomerSlice';

function ShipmentsTable({data, input}) {

  const dispatch = useDispatch()
   //  useEffect method to filter search data
   const [filter, setFilter]= useState()
   const[filtLoad, setFiltLoad]= useState(true)

   useEffect(()=>{
    
    const filterData=()=>{
      
        if(input?.length > 0){
            console.log('>>>>0')
             const filtD = data?.filter((ship, id)=>(
                ((ship.origin_port_code?.toString().toLowerCase()+'').indexOf(input.toLowerCase()) > -1)=== true||
                ((ship.origin_port_city?.toString().toLowerCase()+'').indexOf(input.toLowerCase()) > -1)=== true||
                ((ship.origin_port_country?.toString().toLowerCase()+'').indexOf(input.toLowerCase()) > -1)=== true||
                ((ship.destination_port_city?.toString().toLowerCase()+'').indexOf(input.toLowerCase()) > -1)=== true||
                ((ship.destination_port_country?.toString().toLowerCase()+'').indexOf(input.toLowerCase()) > -1)=== true||
                ((ship.destination_port_code?.toString().toLowerCase()+'').indexOf(input.toLowerCase()) > -1)=== true||
                ((ship._id?.toString().toLowerCase()).indexOf(input.toLowerCase()+'') > -1)=== true
                )
             )
                

             setFilter(filtD)
             setFiltLoad(false)
             }
        else{
            setFilter(data)
            setFiltLoad(false)
        }
         
    }

    filterData()
},[data, input])


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
                {
                  filter &&(
                    filter.length ===0?
                    <p>Nothing to see here</p>
                    :
                    filter?.map(ship => (
                    <tr key={ship._id}>
                        <td>
                            <div className="name flex items-center space-x-3 py-[20px]">
                              {
                                ship.shipping_type === 'import' ?
                                <img className='ml-[26px] rotate-180' src={exports} alt="profile" />
                                :
                                <img className='ml-[26px]' src={exports} alt="profile" />
                              }
                              
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
                    )))}
            </tbody>
        </table>
          
     
      </div>
  )
}

export default ShipmentsTable