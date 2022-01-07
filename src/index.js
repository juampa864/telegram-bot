// colors :p
const colors = require('colors');

// Server configuration, cors and express. 
const app = require('./config/server');


require('./app/bot')(app);

// Server connection 
app.listen(app.get('port'), () => {
    console.log('');
    console.log('📶 Server connection:'.bold.underline);
    console.log('Server running on port #️⃣  '.green + `${app.get('port')}`.black.bgGreen + '\n');
});
