import React, { useState } from "react";
import {
  Dialog,
  Card,
  CardBody,
  Input,
  Typography,
  Button,
} from "@material-tailwind/react";

const EditPropertyForm = ({ property }) => {


    const TABLE_HEAD = [
        { placeholder: "Description", accessor: "description" },
        { placeholder: "Address", accessor: "address" },
        { placeholder: "BHK", accessor: "bhk" },
        { placeholder: "Price", accessor: "price" },
        { placeholder: "Locality", accessor: "locality" },
        { placeholder: "Nearby Hospitals", accessor: "nearbyHospitals" },
        { placeholder: "Nearby Colleges", accessor: "nearbyColleges" },
        { placeholder: "Date Added", accessor: "createdAt" },
      ];

      

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
  };

  return (

      <Card className=" p-6 mx-auto w-full min-w-[44rem] -ml-20">
        <CardBody className="flex flex-col gap-4">
          <Typography variant="h4" color="blue-gray">
            Edit Property
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
              {TABLE_HEAD.map((item, index) => (
                <div key={index} className="flex flex-col gap-6">
                  <Input
                    label={item.placeholder}
                    name={item.accessor}
                    size="lg"
                    value={property[item.accessor]}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>
            <Button className="mt-8" color="blue" type="submit" fullWidth>
              Save Changes
            </Button>
          </form>
        </CardBody>
      </Card>

  );
};

export default EditPropertyForm;
