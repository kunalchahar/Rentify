import React from 'react';
import { useState } from 'react';
import { Button, Input, Card, CardBody, Typography, useSelect } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { addProperty } from '../../StoreSlices/propertiesSlice';

const AddPropertyForm = () => {

  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    description: '',
    address: '',
    bhk: '',
    price: '',
    locality: '',
    nearbyHospitals: '',
    nearbyColleges: '',
    seller: userInfo._id
  });

  const fields = [
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'address', label: 'Address', type: 'text' },
    { name: 'bhk', label: 'BHK', type: 'number' },
    { name: 'price', label: 'Price', type: 'number' },
    { name: 'locality', label: 'Locality', type: 'text' },
    { name: 'nearbyHospitals', label: 'Nearby Hospitals', type: 'text' },
    { name: 'nearbyColleges', label: 'Nearby Colleges', type: 'text' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestBody = {
      description: formData.description,
      address: formData.address,
      bhk: formData.bhk,
      price: formData.price,
      locality: formData.locality,
      nearbyHospitals: formData.nearbyHospitals,
      nearbyColleges: formData.nearbyColleges,
      sellerId:formData.seller
    };

    dispatch(addProperty(requestBody)).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        if (formRef.current) {
          formRef.current.reset();
        }
        setFormData({
          description: '',
          address: '',
          bhk: '',
          price: '',
          locality: '',
          nearbyHospitals: '',
          nearbyColleges: '',
          seller:''
        });
      }

    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-3/4 max-h-screen border border-gray-300 shadow-sm">
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="text-left mb-4 mt-4 ml-5">
            Add your property here
          </Typography>
          <form onSubmit={handleSubmit} className='p-5'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {fields.map((field) => (
                <div key={field.name} className="w-full">
                  <Input
                    type={field.type}
                    label={field.label}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    size="lg"
                  />
                </div>
              ))}
            </div>
            <Button type="submit" color="blue" className="mt-6 w-full mt-10">
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddPropertyForm;
