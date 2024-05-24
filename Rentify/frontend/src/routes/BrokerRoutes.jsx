import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddPropertyForm from '../modules/Broker/AddPropertyForm'
import BrokerHomePage from '../modules/Broker/BrokerHomePage'

const BrokerRoutes = () => {
  return (
    <div>
      <Routes> 
            <Route path="/addProperty" element={<AddPropertyForm/>}/> 
         </Routes>
    </div>
  )
}

export default BrokerRoutes;
