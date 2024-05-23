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

module.exports = {addProperty, getAllProperties};
