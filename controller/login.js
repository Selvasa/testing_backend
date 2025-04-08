const express = require('express');
const route = express.Router();
const Loging = require("../model/register");
const bcrypt = require("bcryptjs");

route.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const login = await Loging.find({ email:email });
    const passwordCheck = await bcrypt.compare(password, login[0].password,)
    console.log(passwordCheck)

    res.status(200).json({ msg: 'Login successfully' });

})
module.exports = route;
