const express = require('express');
const app = express();
const mongoose = require('mongoose');
const env = require('dotenv').config();
const loginRoute = require('./login');
const registerRoute=require('./register');



app.get('/get', (req, res) => {
    return res.json({ 'app': 'app' })
});

async function connectDB() {
    await mongoose.connect(process.env.CONNECTION_STRING, { dbName: process.env.DB_NAME })
}

connectDB()
    .then(() => console.log('Database Connected Successfully'))
    .catch((err) => console.log(err, 'some errors'));

app.use(express.json())
app.use(loginRoute);
app.use(registerRoute)
app.listen(9000, () => {
    console.log('server connected port 9000');
})

//  "start": "nodemon --exec \"cls && node controller/index.js\""
