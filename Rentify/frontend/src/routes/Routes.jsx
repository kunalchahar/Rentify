import React from 'react';
import Login from '../modules/authentication/Login'
import Signup from '../modules/authentication/Register'
import BuyerRoutes from '../routes/ProtectedBuyerRoutes'
import SellerRoutes from '../routes/ProtectedSellerRoutes'
import BrokerHomePage from '../modules/Broker/BrokerHomePage'
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../modules/HomePage/HomePage';
import PageNotFound from '../components/PageNotFound';


const AppRoutes = () => {

    return (
            <Routes>
                {/* Common Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Buyer Routes */}
                <Route path="/buyer/*" element={<BuyerRoutes />}>
                    <Route path="home" element={<BrokerHomePage />} />
                    {/* Add other buyer-specific routes here */}
                </Route>

                {/* Seller Routes */}
                <Route path="/seller/*" element={<SellerRoutes />}>
                    {/* <Route path="dashboard" element={<SellerDashboard />} /> */}
                    {/* Add other seller-specific routes here */}
                </Route>

                {/* Redirect any unknown paths to a 404 page */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
    );
};

export default AppRoutes;
