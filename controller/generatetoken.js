const token = require("jsonwebtoken");
const generateToken = (user) => {
    let tokens = token.sign({ id: user._id }, process.env.KEY, { expiresIn: '20m' })
    return tokens
}
module.exports = generateToken;