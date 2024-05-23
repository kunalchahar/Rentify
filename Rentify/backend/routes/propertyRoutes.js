const express = require("express")
const {addProperty, getAllProperties, getProperty} = require("../controllers/propertyController")


const propertyRouter = express.Router()


propertyRouter.post("/addProperty", addProperty);
propertyRouter.get("/properties", getAllProperties);
propertyRouter.get("/property", getProperty);

module.exports = propertyRouter;