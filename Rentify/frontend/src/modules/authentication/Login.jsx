import React, { useRef, useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../StoreSlices/authSlice";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const {isAuthenticated} = useSelector((state)=>state.auth);
  console.log(isAuthenticated);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loading, error } = useSelector(
    (state) => state.auth
  );

  const registerForm = () => {
    navigate("/signup");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestBody = {
      email: formData.email,
      password: formData.password,
    };

    dispatch(loginUser(requestBody)).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        if (formRef.current) {
          formRef.current.reset();
        }
        setFormData({
          email: "",
          password: "",
        });
        navigate("/buyer/home"); // Redirect to the Buyer Home Page after successful login
      }
      
    });
  };

  if (loading) {
    return (
      <div className="loader flex items-center justify-center min-h-screen">
        <ClipLoader size={80} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-full">
      <Card
        color="transparent"
        shadow={false}
        className="border-2 border-gray-400 p-9 shadow-xl"
      >
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to login.
        </Typography>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
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
          <Button type="submit" className="mt-6" fullWidth>
            Sign In
          </Button>
          {error && (
            <Typography color="red" className="mt-4 text-center font-normal">
              {error}
            </Typography>
          )}
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <a
              href="#"
              className="font-medium text-gray-900"
              onClick={registerForm}
            >
              Sign Up
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Login;
