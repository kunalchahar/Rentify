import React from 'react'
import { useState } from 'react';
import {
   Card,
   Input,
   Button,
   Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const Login = () => {

   const navigate = useNavigate();

   const registerForm = () => {
      navigate('/register');
   };

   // storing from data 

   const [formData, setFormData] = useState({
      email: '',
      password: ''
   });

   const handleChange = (e) => {
      console.log(e);
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
         ...prevFormData,
         [name]: value
      }));
   };


   const handleSubmit = async (e) => {
      e.preventDefault();

      const requestBody = {
         email: formData.email,
         password: formData.password
      };

      console.log(requestBody)
      try {

         const response = await axios.post('https://your-api-endpoint.com/submit', requestBody);
         console.log('Response:', response.data);

         setFormData({
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
               Sign In
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
               Nice to meet you! Enter your details to login.
            </Typography>
            <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
               <div className="mb-1 flex flex-col gap-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                     Your Email
                  </Typography>
                  <Input
                     value={formData.email}
                     name="email"
                     type="email"
                     onChange={handleChange}
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
                     value={formData.password}
                     name="password"
                     type="password"
                     onChange={handleChange}
                     size="lg"
                     placeholder="********"
                     className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                     labelProps={{
                        className: "before:content-none after:content-none",
                     }}
                  />
               </div>
               <Button type='submit' className="mt-6" fullWidth>
                  Sign In
               </Button>
               <Typography color="gray" className="mt-4 text-center font-normal">
                  Don't have a account Click to register{" "}
                  <a href="#" className="font-medium text-gray-900" onClick={registerForm}>
                     Sign Up
                  </a>
               </Typography>
            </form>
         </Card>
      </div>
   )
}

export default Login