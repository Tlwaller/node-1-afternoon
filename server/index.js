const express = require("express")
const app = express();
const port = 1134;
const products = require('../products.json');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

function c(val){console.log(val)}

app.get('/api/products', getProducts);

app.get('/api/products/:id', getProduct);

app.listen(port, () => {
    c(`Server listening on port: ${port}`)
});