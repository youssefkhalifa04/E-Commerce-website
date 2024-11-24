const express = require('express');
const router = express.Router();
const multer = require('multer');
const User = require('../models/user');
const bcrypt = require('bcrypt')




router.post('/Signup' ,async (req, res)=>{

const saltPassword = await bcrypt.genSalt(10)
const securePassword= await bcrypt.hash(req.body.Password, saltPassword)




    const signupUser = new User({
        Name:req.body.Name,
        Email:req.body.Email,
        Password:securePassword

    })
    signupUser.save()
     .then(
        (data)=>{
            res.json(data)
        }
     )
     .catch(
        (err)=>{
            res.json(err)
        }
     )
})


router.post('/Login', async (req, res) => {
    const { Name, Password } = req.body;

    try {
        // Find user by Name
        const user = await User.findOne({ Name });
        if (!user) {
            return res.status(401).json({ message: "Invalid name or password" });
        }

        // Compare the provided password with the hashed password
        const isPasswordValid = await bcrypt.compare(Password, user.Password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid name or password" });
        }

        // If credentials are valid, send success response
        return res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "An error occurred", error });
    }
});


module.exports=router;
