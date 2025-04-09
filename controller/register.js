const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const Register = require('../model/register')

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hasPassword = await bcrypt.hash(password, 5);
        const users = await Register.find({ email: email });

        if (users.length > 0) {
            return res.json({ message: "User Already Exist change email id" })
        }
        const CreateUser = await new Register({ name, email, password: hasPassword }).save()
        res.status(201).json({ message: "Registered Successfully", data: CreateUser })

    }
    catch (err) {
        console.log("Registration Error");
        res.status(500).json({ message: "Server Error" });
    }
})
module.exports = router;