const express = require('express');
const products  = require('./data/products');

const app = express();

// endpoint handlers

// default
app.get('/', (req, res) => {
    res.send('AirspaceNext API is running --- ');
});

// get all products
app.get('/products', (req, res) => {
    res.json(products);
})

// get single product
app.get('/products/:id', (req, res) => {
    const product = products.find((p) => p.id === req.params.id);
    res.json(product);
})

app.listen(5000, console.log('Server started on port 5000'));