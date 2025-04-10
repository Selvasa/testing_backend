const express = require('express');
const route = express.Router();
const Loging = require("../model/register");
const bcrypt = require("bcryptjs");
const generateToken = require("./generatetoken");
const verifyToken = require('../middleware/verifyToken');

route.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const [login] = await Loging.find({ email: email });

    if (login) {
        const passwordCheck = await bcrypt.compare(password, login?.password,);
        if (passwordCheck) {
            const token = generateToken(login);
            return res.json({ token: token, msg: 'Login Success fully ' })
        }

        return res.status(401).json({ msg: 'Password Incorrect' });

    }
    else {

        return res.status(400).json({ message: "User Not Found Register first" })
    }


})

route.get("/verify", verifyToken, (req, res) => {

    res.json({ message: req.user })
})
module.exports = route;
