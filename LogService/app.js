const express = require('express');
const logRoutes = require('./modules/routes');

const app = express();

app.use(express.json());
app.use('/log', logRoutes); 

module.exports = app;
