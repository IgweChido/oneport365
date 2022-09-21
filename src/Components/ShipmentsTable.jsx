import {React, useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import load from '../Images/loading.webp';
import link from '../Images/link.svg';
import imports from '../Images/import.svg';
import exports  from '../Images/export.svg';
import {useDispatch, useSelector} from 'react-redux'
import { AddCurrentDest } from '../Reducers/CustomerSlice';
import ShipmentTableHeaders from './ShipmentTableHeaders';

function ShipmentsTable({data, input, typeButton, date, date1, error, loading}) {

  const dispatch = useDispatch()
   //  useEffect method to filter search data
   const [filter, setFilter]= useState()
   const[filtLoad, setFiltLoad]= useState(true)
   const[filtDate, setFiltDate]= useState([])


   


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
                ((ship.delivery_location?.toString().toLowerCase()+'').indexOf(input.toLowerCase()) > -1)=== true||
                ((ship.pickup_location?.toString().toLowerCase()+'').indexOf(input.toLowerCase()) > -1)=== true||
                ((ship.state?.toString().toLowerCase()+'').indexOf(input.toLowerCase()) > -1)=== true||
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


    // useEffect to check the shipment type
    useEffect(()=>{
      if(typeButton?.length > 0){
      const filtD = data?.filter((ship)=>(
        ship.shipping_type === typeButton
      ))

      setFilter(filtD)
      setFiltLoad(false)
      }
      else{
        setFilter(data)
        setFiltLoad(false)
      }
    },[typeButton, data])



   
    // useEffect to check date range
    useEffect(()=>{

       // function to parse date and date1
    function parseDate(input) {
      if(input?.length >= 10){
        console.log('imput >>>')
        var parts = input.match(/(\d+)/g);
        // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
        return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
      }
      else{
        console.log('return null')
      return null
      }
    
    }
     
       function getDatesInRange(startDate, endDate) {
     
        const date = new Date(startDate?.getTime());
        console.log('getting date')
        const dates = [];
      
        while (date <= endDate) {
          dates.push(new Date(date).toISOString());
          date.setDate(date.getDate() + 1);
        }
      
        setFiltDate(dates);
      
      }

      getDatesInRange(parseDate(date),parseDate(date1))
    },[date, date1])


    // useEffect to filter the range dates
    useEffect(()=>{
      function compareDate(check){
          for(var i=0; i<filtDate.length; i++){
              if(check === filtDate[i].slice(0, 10)){
                return true
              }   
          }
          return false
      }

      if(filtDate?.length > 0){
      const filtD = data?.filter((ship, id)=>(
          compareDate(ship.shipment_pickup_date.slice(0, 10))
      ))
      setFilter(filtD)
      setFiltLoad(false)
      }
      else{
        setFilter(data)
        setFiltLoad(false)
      }
      
    },[data, filtDate])


  return (
    <div className=' relative'>
      <div className='overflow-x-auto mt-10 t-overflow   rounded-xl'>
        <table className=' w-full  border-separate border-spacing-0 min-w-[1000px]'>
            <thead className='mb-[11px]'>
                <tr>
                 <ShipmentTableHeaders text={'SHIPMENT TYPE'}/>
                 <ShipmentTableHeaders text={'ORIGIN'}/>
                 <ShipmentTableHeaders text={'LINK'}/>
                 <ShipmentTableHeaders text={'DESTINATION'}/>
                 <ShipmentTableHeaders text={'SHIPMENT DATE'}/>
                 <ShipmentTableHeaders text={'SHIPPING ID'}/>

                </tr>
            </thead>
            <tbody>
               {
                    error &&
                    <p className='text-[red]'>Something went wrong</p>
                }
                {loading &&
                    <div className='absolute    w-[250px] h-[250px] top-[150px] left-[50%] ml-[-125px]'>
                        <img src={load} alt=''></img>
                    </div>
                }
                {
                  filter &&(
                    filter.length ===0?
                    <p>Nothing to see here</p>
                    :
                    filter?.map(ship => (
                    <tr key={ship._id}>
                        <td className=''>
                            <div className=" name flex items-center space-x-3 py-[20px]">
                              {
                                ship.shipping_type === 'import' ?
                                <img className='ml-[26px] rotate-180' src={exports} alt="profile" />
                                :
                                <img className='ml-[26px]' src={exports} alt="profile" />
                              }
                              
                                <p className='font-semibold text-[16px] 2xl:text-[18px] pr-[30px]'>{ship.shipping_type.charAt(0).toUpperCase() + ship.shipping_type.slice(1)}</p>
                            </div> 
                        </td>

                        {/* import */}
                        { ship.shipping_type === 'import' ?
                          <td className='max-w-[150px] pr-[20px]'>
                            <p className='font-semibold text-[16px] 2xl:text-[18px]'>{ship.delivery_location}</p>
                            <p className='text-[#6B7280] text-[14px] font-semibold'>{ship.state}</p>
                          </td>
                        :
                          <td className='max-w-[150px] pr-[20px]'>
                            <p className='font-semibold text-[16px] 2xl:text-[18px]'>{ship.pickup_location}</p>
                            <p className='text-[#6B7280] text-[14px] font-semibold'>{ship.state}</p>
                          </td>
                        }
                        <td>
                          <div ><img  src={link} alt="" /></div>
                        </td>

                        { ship.shipping_type === 'import' ?
                          <td className='w-[110px]'>
                            <p className='font-semibold text-[16px] 2xl:text-[18px]'>{ship.origin_port_code}</p>
                            <p className='text-[#6B7280] text-[14px] font-semibold'>{ship.origin_port_country}</p>
                          </td>
                        :
                          <td className='w-[110px]'>
                            <p className='font-semibold text-[16px] 2xl:text-[18px]'>{ship.destination_port_code}</p>
                            <p className='text-[#6B7280] text-[14px] font-semibold'>{ship.destination_port_country}</p>
                          </td>
                        
                        }
                        <td className='font-semibold text-[16px] 2xl:text-[18px] pr-[20px]'>{ship.shipment_pickup_date.slice(0, 10)}</td>
                        <td className='font-semibold text-[16px] 2xl:text-[18px] max-w-[50px]'><p>{ship._id.slice(0,10)}...</p></td>
                        <td className='min-w-[230px]'>
                            <div className='flex flex-1 justify-end items-center'>
                                <Link to='/shipmentdetail' onClick={()=>{
                                
                                    dispatch(AddCurrentDest({
                                      id: ship._id,
                                      destICode: ship.origin_port_code,
                                      destICountry: ship.origin_port_country,
                                      originICode: ship.delivery_location,
                                      originICountry: ship.state,

                                      destECode: ship.destination_port_code,
                                      destECountry: ship.destination_port_country,
                                      originECode: ship.pickup_location,
                                      originECountry: ship.state,

                                      type: ship.shipping_type,
                                      date: ship.shipment_pickup_date.slice(0, 10)
                                    }))
                                }} className='py-3.5 px-5 text-sm rounded-md bg-main-green ml-[19px] mr-[18px] text-white'>View Details</Link>
                            </div>
                        </td>     
                    </tr>
                    )))}
            </tbody>
        </table>
          
     
      </div>
    </div>
    
  )
}

export default ShipmentsTable