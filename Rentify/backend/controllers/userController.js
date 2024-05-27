const joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const SECRET_KEY = 'rentify';

const signupSchema = joi.object({
    username: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
    userType: joi.string().required(),
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    phoneNumber: joi.string().min(10).max(15).required()
});

const signup = async (req, res) => {
    const { username, email, password, userType, firstName, lastName, phoneNumber } = req.body;

    // Input Validation
    const { error } = signupSchema.validate({ username, email, password, userType, firstName, lastName, phoneNumber });
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        // Existing User Check
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists!" });
        }

        // Username Check
        const existingUsername = await userModel.findOne({ username: username });
        if (existingUsername) {
            return res.status(400).json({ message: "Username is already taken!" });
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create User
        const result = await userModel.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phoneNumber,
            username,
            userType
        });

        // Generate Token
        const token = jwt.sign({ email: result.email, id: result._id, role: result.userType }, SECRET_KEY, { expiresIn: '1h' });

        // Respond with user and token
        res.status(201).json({ user: result, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const signinSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required()
});

const signin = async (req, res) => {
    const { email, password } = req.body;

    // Input Validation
    const { error } = signinSchema.validate({ email, password });
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        // Check if user exists
        const existingUser = await userModel.findOne({ email: email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate Token
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id, role: existingUser.userType }, SECRET_KEY, { expiresIn: '1h' });

        // Respond with user and token
        res.status(200).json({ user: existingUser, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { signup, signin };
