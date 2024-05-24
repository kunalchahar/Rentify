import { Card, Input, Typography } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddPropertyForm = () => {



  const formFields = [
    {
      name: "description",
      placeholder: "Description",
      value: "",
      type: "input",
    },
    {
      name: "address",
      placeholder: "Complete Address",
      value: "",
      type: "input",
    },
    {
      name: "bhk",
      placeholder: "BHK",
      value: "",
      type: "input",
    },
    {
      name: "price",
      placeholder: "Price",
      value: "",
      type: "input",
    },
    {
      name: "locality",
      placeholder: "Locality",
      value: "",
      type: "input",
    },
    {
      name: "nearbyHospitals",
      placeholder: "Nearby Hospitals",
      value: "",
      type: "input",
    },
    {
      name: "nearbyColleges",
      placeholder: "Nearby Colleges",
      value: "",
      type: "input",
    },
  ];
  return (
    <div>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddPropertyForm;
