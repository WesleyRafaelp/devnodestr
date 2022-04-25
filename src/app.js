//'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

//conecta com banco de dados
mongoose.connect(config.connectionString, { useMongoClient: true });

//carrega os models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({ extended: false }));

//habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Alllow-Origin', '*');
    res.header('Access-Control-Alllow-Headers', 'Origin, X-Reequested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Alllow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;