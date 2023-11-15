require('dotenv').config(); // load env variable
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const express = require('express'); // commonjs
const webRoutes = require('./routes/web'); // commonjs

console.log("env variable: ", process.env);
// import express from 'express'; // ES2015 module
const app = express();// init app with express
const port = process.env.PORT || 3000; // get port from env variable
const hostname = process.env.HOST_NAME || 'localhost'; // get hostname from env variable

// config template engine
configViewEngine(app);

// khai bao route
app.use('/', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})