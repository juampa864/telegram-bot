// Configuration for the server.
// Import the required modules.
const express = require('express');
// CORS is used to handle requests from different domains or origins in the web app.
const cors = require('cors');

// Express is a middleware that provides an abstracton layer to handle routing and HTTP requests.
const app = express();

// This tells the app that the format will be JSON for responses.
app.use(express.json());
// This allows communication between routes, tells the app to accept requests from all origins.
app.use(cors());

// Sets a port for the server, it can use the 3040 port or the port defined in process.env.PORT.
app.set('port', process.env.PORT || 3040);

// For a more modular implementation, the server.js file exports the server configuration to be imported in other files.
module.exports = app;
