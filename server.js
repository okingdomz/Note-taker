// port of my local host
const PORT = process.env.PORT || 5000;

const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// middleware in express
app.use(express.urlencoded({
    extended: true
}));
// root directory
app.use(express.static('public'));
app.use(express.json());
// connecting routes to app using use
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// asynchronus bind into specific port
app.listen(PORT, () => {
    console.log(`API is now on http://localhost:${PORT}`);
});