const userModel = require("../models/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET_KEY = 'rentify'

const signup = async (req, res) => {

    const {username, email, password, userType, firstName, lastName, phoneNumber} = req.body;


    // Existing User Check
    try{
        const existingUser = await userModel.findOne({email: email})
        if(existingUser){
            return res.status(400).json({message: "User already exists!"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await userModel.create({
            firstName: firstName, 
            lastName: lastName,
            email: email,
            password: hashedPassword, 
            phoneNumber: phoneNumber,
            username: username,
            userType: userType
        });

        const token = jwt.sign({email: result.email, id: result._id}, SECRET_KEY);

        res.status(201).json({user: result, token: token})

    }catch(error){
        console.log(error)
        res.status(500).json({message: "Something went wrong"});
    }

    // Hash the password


    // Create the User

    // Return the token
}

const signin = async (req, res) => {
    const {email, password} = req.body;
    
    try{
        const existingUser = await userModel.findOne({email: email})
        if(!existingUser){
            return res.status(404).json({message: "User not found!"})
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);


        if(!matchPassword){
            return res.status(400).json({message: "Wrong password!"})
        }

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, SECRET_KEY);

        res.status(201).json({user: existingUser, token: token})


    }catch(error){
        console.log(error)
        res.status(500).json({message: "Something went wrong"});
    }

}

module.exports = { signup, signin };