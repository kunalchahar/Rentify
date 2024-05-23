const express = require("express")
const {addProperty, getAllProperties} = require("../controllers/propertyController")


const propertyRouter = express.Router()


propertyRouter.post("/addProperty", addProperty);
propertyRouter.get("/properties", getAllProperties);

module.exports = propertyRouter;