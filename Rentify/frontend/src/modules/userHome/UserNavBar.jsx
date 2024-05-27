import { Button } from '@material-tailwind/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../StoreSlices/authSlice';
import { useNavigate } from 'react-router-dom';


const UserNavBar = () => {

  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  
  // const handleLogout = () =>{
  //   dispatch(logout());
  //   navigate('/login');
    



  return(
    <>
      <div>
        Hello this is Prabhat
      </div>
    </>
  )
}

export default UserNavBar