import React, { useEffect } from 'react'
import BuyerSidebar from './BuyerSidebar'
import BuyerFooter from './BuyerFooter'
import BuyerBody from './BuyerBody'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProperties } from '../../StoreSlices/propertiesSlice'
import BuyerNavbar from './BuyerNavbar'

const BuyerHomePage = () => {
  const dispatch = useDispatch();
  

  useEffect(()=>{
    dispatch(getAllProperties());
  }, [])

  return (
    <div className='w-screen max-w-screen bg-gray-50'>
      <div>
        <BuyerNavbar/>
      </div>
      <div className='flex h-screen max-h-screen overflow-hidden'>
        <div className='p-8'>
          <BuyerSidebar />
        </div>
        <div className='w-full'>
          <BuyerBody/>
        </div>
      </div>
      <div className=' mt-8'>
        <BuyerFooter/>
      </div>
    </div>
  )
}


export default BuyerHomePage;