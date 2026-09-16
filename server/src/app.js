const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const userRoutes = require('./routes/user.route')
 app.use(express.json());



 app.use('/user', userRoutes);
 module.exports = app;