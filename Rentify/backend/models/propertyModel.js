const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    bhk: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    nearbyHospitals: {
        type: String,
        required: false
    },
    nearbyColleges: {
        type: String,
        required: false
    }, 
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    
}, {timestamps: true})

module.exports = mongoose.model("Properties", propertySchema, "Properties")