// OPTIONAL
// Used to make the terminal more user friendly.
const colors = require('colors');

// OPTIONAL, but highly recommended.
// Using the .env file to store sensible information like the bot's token.
// This will load the .env file into the process.env variable.
// The .env file should be in root directory.
require('dotenv').config()

// Importing server configuration, CORS and Express. 
// See config/server.js for more details.
const app = require('./config/server');

// Import bot 
// See app/bot.js for more details.
// The server is passed as an argument to the bot, meaning the bot can handle http queries.
require('./app/bot')(app);

// Server connection 
app.listen(app.get('port'), () => {
    console.log('');
    console.log('📶 Server connection:'.bold.underline);
    console.log('Server running on port #️⃣  '.green + `${app.get('port')}`.black.bgGreen + '\n');
});
