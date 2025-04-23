const token = require("jsonwebtoken");
const generateToken = (user) => {
    const expiresIn = 20 * 60;
    let tokens = token.sign({ id: user._id }, process.env.KEY, { expiresIn: expiresIn })
    return { tokens, expiresIn: expiresIn * 1000 }
}
module.exports = generateToken;