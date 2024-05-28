import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import { useSelector } from 'react-redux';

const ProtectedSellerRoutes = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const token = sessionStorage.getItem("token");
    let userType;

    if (token) {
        const decodedToken = jwtDecode(token);
        userType = decodedToken.role;
    }

    const presentPage = () => {

    };

    if (!token) return <Navigate to="/login" />;

    useEffect(() => {
        if (token && userType !== "seller") {
         if (location.key !== "default") {
            navigate(-1);
        } else {
            navigate("/login");
        }
        }
    }, [token, userType]);

    if (userType === "seller") {
        return <Outlet {...props} />;
    } else {
        presentPage();
    }
};

export default ProtectedSellerRoutes;
