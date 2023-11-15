const path = require('path');
const express = require('express'); // commonjs

const configViewEngine = (app) => {
    // config static file
    // app.use(express.static(path.join(__dirname, '..', 'public')));
    app.use(express.static(path.join('./src', 'public')));

    // config view engine
    app.set('views', path.join(__dirname, '..', 'views'));
    app.set('view engine', 'ejs');
};

module.exports = configViewEngine;