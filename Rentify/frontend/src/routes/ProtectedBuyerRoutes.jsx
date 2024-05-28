import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import { useSelector } from 'react-redux';

const BuyerRoutes = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    let userType;

    if (token) {
        const decodedToken = jwtDecode(token);
        userType = decodedToken.role;
    }
    const presentPage = () => {
        navigate(-1);
    };

    if (!token) return <Navigate to="/login" />;

    useEffect(() => {
        if (token && userType !== "buyer") {
            presentPage();
        }
    }, [token, userType]);

    if (userType === "buyer") {
        return <Outlet {...props} />;
    } else {
        presentPage();
    }
};

export default BuyerRoutes;
