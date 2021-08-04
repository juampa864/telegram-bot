// configuration of the servrer
const express = require('express');
const cors = require('cors');
const app = express();

// this tells the app that the format will be json
app.use(express.json());
// this allows communication between routes
app.use(cors());

app.set('port', process.env.PORT || 3040);

module.exports = app;