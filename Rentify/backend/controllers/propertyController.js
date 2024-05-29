const Property = require('../models/propertyModel');  // Adjust the path as needed
const userModel = require('../models/userModel');
  // Adjust the path as needed

// Function to add a property
const addProperty = async(req, res) => {
    const { description, address, bhk, price, locality, nearbyHospitals, nearbyColleges, sellerId } = req.body;



    try {
        // Validate that the seller exists
        const seller = await userModel.findById(sellerId);
        if (!seller) {
            return res.status(404).json({ message: 'Seller not found' });
        }

        // Create a new property instance
        const property = new Property({
            description,
            address,
            bhk,
            price,
            locality,
            nearbyHospitals,
            nearbyColleges,
            seller: sellerId
        });

        // Save the property to the database
        await property.save();


        // Respond with the saved property
        res.status(201).json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getAllProperties = async (req, res) => {
    try{
        const properties = await Property.find();
        if(properties){
            res.status(200).json(properties);
        }else{
            res.status(404).json({message: "no properties found!"})
        }
    }catch(error){
        res.status(500).json({message: "something went wrong!"})
    }

}

const getProperty = async(req, res) => {

    const {sellerId} = req.query;

    try{
        const property = await Property.find({seller: sellerId})

    if(property){
        res.status(200).json(property);
    }else{
        res.status(404).json({message: "No properties found!"})
    }
    }catch(error){
        res.status(500).json({message: "something went wrong!"})
    }
}

const deleteProperty = async(req, res) => {
    const { propertyId } = req.query;

    try {
        const property = await Property.findById(propertyId);
        

        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        await property.deleteOne({_id: propertyId});

        res.status(200).json({ message: 'Property deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateProperty = async (req, res) => {
    const { propertyId } = req.query; // Assuming propertyId is passed as a URL parameter
    const { description, address, bhk, price, locality, nearbyHospitals, nearbyColleges } = req.body;
    try {
        // Check if the property exists
        let property = await Property.findById(propertyId);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        // Update the property fields
        property.description = description;
        property.address = address;
        property.bhk = bhk;
        property.price = price;
        property.locality = locality;
        property.nearbyHospitals = nearbyHospitals;
        property.nearbyColleges = nearbyColleges;

        // Save the updated property
        await property.save();

        // Respond with the updated property
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {addProperty, getAllProperties, getProperty, deleteProperty, updateProperty};
