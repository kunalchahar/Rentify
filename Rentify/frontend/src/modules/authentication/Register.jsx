import React from 'react'
import axios from 'axios'; 
import { useState } from 'react';

import {
   Card,
   Input,
   Checkbox,
   Button,
   Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const Register = () => {
   const navigate = useNavigate();

   const loginForm = () => {
      navigate('/login');
    };

    // storing from data 

    const [formData, setFormData] = useState({
      firstName: '',
      lastName:'',
      email: '',
      password: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    };
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const requestBody = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      };
      
      try {
   
        const response = await axios.post('https://your-api-endpoint.com/submit', requestBody);
  
        setFormData({
         firstName: '',
         lastName:'',
         email: '',
         password: ''
        });
      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    };
         // form data done 

   return (
      <div className='flex items-center justify-center min-h-screen'>
      <Card color="transparent" shadow={false} className="border-2 border-gray-400 p-9 shadow-xl">
         <Typography variant="h4" color="blue-gray">
            Sign Up
         </Typography>
         <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
         </Typography>
         <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
               <Typography variant="h6" color="blue-gray" className="-mb-3">
                  First Name
               </Typography>
               <Input
               name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  type='text'
                  size="lg"
                  placeholder="First Name"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                     className: "before:content-none after:content-none",
                  }}
               />
               <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Last Name
               </Typography>
               <Input
                  name={"lastName"}
                  value={formData.lastName}
                  onChange={handleChange}
                  type='text'
                  size="lg"
                  placeholder="Last Name"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                     className: "before:content-none after:content-none",
                  }}
               />
               <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Email
               </Typography>
               <Input
                  name={"email"}
                  value={formData.email}
                 onChange={handleChange}
                  type='email'
                  size="lg"
                  placeholder="Enter Your Email ID"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                     className: "before:content-none after:content-none",
                  }}
               />
               <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
               </Typography>
               <Input
               name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                     className: "before:content-none after:content-none",
                  }}
               />
            </div>
            <Checkbox
               label={
                  <Typography
                     variant="small"
                     color="gray"
                     className="flex items-center font-normal"
                  >
                     I agree the
                     <a
                        href="#"
                        className="font-medium transition-colors hover:text-gray-900"
                     >
                        &nbsp;Terms and Conditions
                     </a>
                  </Typography>
               }
               containerProps={{ className: "-ml-2.5" }}
            />
            <Button type='submit' className="mt-6" fullWidth>
               sign up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
               Already have an account?{" "}
               <a href="#" className="font-medium text-gray-900" onClick={loginForm}>
                  Sign In
               </a>
            </Typography>
         </form>
      </Card>
      </div>
   );
}

export default Register