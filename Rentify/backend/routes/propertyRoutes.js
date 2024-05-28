const express = require("express")
const {addProperty, getAllProperties, getProperty, deleteProperty} = require("../controllers/propertyController")


const propertyRouter = express.Router()


propertyRouter.post("/addProperty", addProperty);
propertyRouter.get("/properties", getAllProperties);
propertyRouter.get("/property", getProperty);
propertyRouter.delete('/property', deleteProperty);

module.exports = propertyRouter;