const express = require('express');
const products  = require('./data/products');

const app = express();

// endpoint handler
app.get('/', (req, res) => {
    res.send('AirspaceNext API is running --- ');
});

app.get('/products', (req, res) => {
    res.json(products);
})

app.listen(5000, console.log('Server started on port 5000'));