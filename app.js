import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import airplanemodels from './data/airplanemodels.js';

dotenv.config();
connectDB();   // connect to MongoDB 

const app = express();

// endpoint handlers

// default
app.get('/', (req, res) => {
    res.send('AirspaceNext API is running --- ');
});

// get all products
app.get('/airplanemodels', (req, res) => {
    res.json(airplanemodels);
})

// get single product
app.get('/airplanemodel/:id', (req, res) => {
    const airplanemodel = airplanemodels.find((p) => p.id === req.params.id);
    res.json(airplanemodel);
})

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.listen(PORT, console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`));