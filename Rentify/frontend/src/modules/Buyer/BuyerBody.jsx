import React from 'react'
import { PropertyCard } from '../../components/PropertyCard'
import { useSelector } from 'react-redux';
import { Card } from '@material-tailwind/react';

const BuyerBody = () => {
   const {properties}= useSelector((state)=>state.property);

  return (
    <div className='p-8 bg-gray-50 h-screen max-h-screen w-full'><Card className='p-8 max-h-screen overflow-scroll '><PropertyCard data ={properties}/></Card></div>
  )
}

export default BuyerBody