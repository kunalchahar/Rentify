import React, { useEffect, useState } from 'react';
import { PropertyCard } from '../../components/PropertyCard';
import { useSelector } from 'react-redux';
import { Card } from '@material-tailwind/react';

const BuyerBody = () => {
  const { properties } = useSelector((state) => state.property);
  const { bhkFilter, cityFilter, dateFilter, priceFilter } = useSelector((state) => state.filters);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let filteredProperties = properties;

    if (bhkFilter) {
      filteredProperties = filteredProperties.filter(property => property.bhk === bhkFilter);
    }

    if (cityFilter) {
      filteredProperties = filteredProperties.filter(property => property.city === cityFilter);
    }

    if (dateFilter) {
      filteredProperties = filteredProperties.filter(property => new Date(property.date) >= new Date(dateFilter));
    }

    if (priceFilter) {
      const [minPrice, maxPrice] = priceFilter.split('-').map(price => parseInt(price, 10));
      filteredProperties = filteredProperties.filter(property => {
        const propertyPrice = parseInt(property.price, 10);
        if (!isNaN(minPrice) && !isNaN(maxPrice)) {
          return propertyPrice >= minPrice && propertyPrice <= maxPrice;
        } else if (!isNaN(minPrice)) {
          return propertyPrice >= minPrice;
        } else if (!isNaN(maxPrice)) {
          return propertyPrice <= maxPrice;
        }
        return true;
      });
    }

    setFilteredData(filteredProperties);
  }, [properties, bhkFilter, cityFilter, dateFilter, priceFilter]);

  return (
    <div className='p-8 bg-gray-50 h-screen max-h-screen w-full'>
      <Card className='p-8 max-h-screen overflow-scroll'>
        <PropertyCard data={filteredData} />
      </Card>
    </div>
  );
};

export default BuyerBody;
