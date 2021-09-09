const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

const newsRoutes = require('./routes/news');

// Middlewares.
app.use(express.json());
app.use('/news', newsRoutes);

// Database access data for this coding exercise is loaded from .env as an environment variable.
const connection_uri = process.env.DB_CONNECTION;
try {
    mongoose.connect(connection_uri, {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log("Connected to database"));    
} catch (error) { 
    console.error("Could not connect to database");    
}

app.listen(3001);

