import React, { useState } from 'react';
import api from '../../Axios';
import {
   Card,
   Input,
   Checkbox,
   Button,
   Typography,
   TabsHeader,
   Tab,
   Tabs,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const Register = () => {
   const navigate = useNavigate();

   const loginForm = () => {
      navigate('/login');
   };
   
   
   const [userType, setUserType] = useState("buyer");

   const [isChecked, setIsChecked] = useState(false);

   const handleCheckboxChange = (e) => {
      setIsChecked(e.target.checked);
   };

   // storing from data 

   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      username: '',
      userType: ''
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

      if (!isChecked) {
         alert('Please agree to the Terms and Conditions before signing up.');
         return;
      }

      const requestBody = {
         firstName: formData.firstName,
         lastName: formData.lastName,
         email: formData.email,
         password: formData.password,
         phoneNumber: formData.phoneNumber,
         username: formData.username,
         userType: userType
      };

      try {

         const response = await api.post('/user/signup', requestBody);
         setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phoneNumber: '',
            username: '',
            userType: ''
         });
         navigate("/login");
      } catch (error) {
         console.error('Error submitting the form:', error);
      }
   };
   // form data done 



   return (
      <div className='flex items-center justify-center min-h-full'>
         <Card color="transparent" shadow={false} className="border-2 border-gray-400 p-9 shadow-xl w-full max-w-[34rem]">
            <Typography variant="h4" color="blue-gray">
               Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
               Nice to meet you! Enter your details to register.
            </Typography>
            <div className='w-full -mb-3 mt-4'>
                           <Tabs value={userType} className="overflow-visible">
                              <TabsHeader className="relative z-0 ">
                                 <Tab
                                    value="buyer"
                                    onClick={() => setUserType("buyer")}
                                    className={`${userType === "buyer" ? "text-blue-500" : "text-gray-500"
                                       }`}
                                 >
                                    I am a buyer
                                 </Tab>
                                 <Tab
                                    value="seller"
                                    onClick={() => setUserType("seller")}
                                    className={`${userType === "seller" ? "text-red-500" : "text-gray-500"
                                       }`}
                                 >
                                    I am a Seller
                                 </Tab>
                              </TabsHeader>
                           </Tabs>
                        </div>
            <form onSubmit={handleSubmit} className=" ">
               <div className=" flex flex-col w-full mt-8 gap-3">
                  <div className='flex justify-between items-center gap-8'>
                     <div className='w-1/2'>
                        

                        <Typography variant="h6" color="blue-gray" className='mb-2'>
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
                     </div>
                     <div className='w-1/2'>
                        <Typography variant="h6" color="blue-gray" className='mb-2'>
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
                     </div>
                  </div>
                  <Typography variant="h6" color="blue-gray" className='-mb-1'>
                     Phone Number
                  </Typography>
                  <Input
                     name={"phoneNumber"}
                     value={formData.phoneNumber}
                     onChange={handleChange}
                     type='number'
                     size="lg"
                     placeholder="Phone Number"
                     className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                     labelProps={{
                        className: "before:content-none after:content-none",
                     }}
                  />
                  <Typography variant="h6" color="blue-gray" className='-mb-1'>
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
                  <Typography variant="h6" color="blue-gray" className='-mb-1'>
                     Username
                  </Typography>
                  <Input
                     name={"username"}
                     value={formData.username}
                     onChange={handleChange}
                     type='text'
                     size="lg"
                     placeholder="Enter your username"
                     className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                     labelProps={{
                        className: "before:content-none after:content-none",
                     }}
                  />
                  <Typography variant="h6" color="blue-gray" className='-mb-1'>
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
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  label={
                     <Typography
                        variant="small"
                        color="gray"
                        className="flex items-center font-normal"
                     >
                        I agree to the
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
               <Button type='submit' className="mt-6 bg-blue-700" fullWidth>
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