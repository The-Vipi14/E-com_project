const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const App = express();

// import routes

const userRoutes = require('../routes/userRoutes');

// ṃiddlewares

App.use(cors());
App.use(bodyParser.json());

// api creation or routes

App.use('/api',userRoutes);

module.exports = App;

