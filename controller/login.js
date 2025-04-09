const express = require('express');
const route = express.Router();
const Loging = require("../model/register");
const bcrypt = require("bcryptjs");
const generateToken = require("./token");

route.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const login = await Loging.find({ email: email });
    const passwordCheck = await bcrypt.compare(password, login[0].password,);
    if (passwordCheck) {
        const token = generateToken(login);
        return res.json({ token, msg: 'Login Success fully ' })
    }

    res.status(401).json({ msg: 'Password Incorrect' });

})
module.exports = route;
