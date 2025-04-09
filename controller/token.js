const token = require("jsonwebtoken");
const generateToken = (user) => {
    console.log(user)
    return token.sign({ id: user._id }, process.env.KEY, { expiresIn: '1m' })
}
module.exports = generateToken;