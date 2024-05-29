import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const ProtectedBuyerRoutes = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    let userType;

    if (token) {
        const decodedToken = jwtDecode(token);
        userType = decodedToken.role;
    }

    const presentPage = () => {

    };

    if (!token) return <Navigate to="/login" />;

    useEffect(() => {
        if (token && userType !== "buyer") {
         if (location.key !== "default") {
            navigate(-1);
        } else {
            navigate("/login");
        }
        }
    }, [token, userType]);

    if (userType === "buyer") {
        return <Outlet {...props} />;
    } else {
        presentPage();
    }
};

export default ProtectedBuyerRoutes;
