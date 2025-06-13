// Imports the basic configuration of the bot.
const bot_object = require('../config/bot-config');


module.exports = (app) => {

    // GET request from the server.
    // Example: If the server receives a GET request, the bot will send a message and a dice to the user with ID stored in bot_object.user_id.
    app.get('/dice', (req, res) => {
        bot_object.bot.sendMessage(bot_object.user_id, "Here is a dice ༼ つ ◕_◕ ༽つ");
        res.status(200).json({
            message: 'Telegram Bot Server Responded.',
        });
        bot_object.bot.sendDice(bot_object.user_id);
    });

    // Basic message handling with options send back to the user.
    // When the user sends /start command the bot responds with the options listed bellow.
    bot_object.bot.onText(/\/start/, (msg) => {
        // This allows us to see the information of the message, containing all the data from the user and the message itself.
        // console.log(msg);
        opts = {
            // reply_to_message_id: msg.message_id,
            "reply_markup": {
                "keyboard": [
                    ['Quiero un dado'],
                    ['Quiero ver un perrito'],
                    ['Quiero ver un gatito'],
                    ['Quiero ver la información de la respuesta']
                ]
            }
        };
        // Listens for "/start" and responds with the greeting below, it also gives the user two options.
        bot_object.bot.sendMessage(msg.chat.id, '¡Hola ' + msg.from.first_name + '! ¿Qué quieres hacer?', opts);
    });

    // Sends a dice to the user
    bot_object.bot.onText(/Quiero un dado/, (msg) => {
        bot_object.bot.sendDice(msg.from.id);
    });

    // Sends an image to the user
    bot_object.bot.onText(/Quiero ver un perrito/, (msg) => {
        bot_object.bot.sendPhoto(msg.chat.id, "https://unsplash.com/photos/golden-retriever-puppy-lying-on-floor-aPvB8KMIh5w", {caption : '🐶'});
    });

    // Sends an image to the user
    bot_object.bot.onText(/Quiero ver un gatito/, (msg) => {
        bot_object.bot.sendPhoto(msg.chat.id, "src/img/cat.jpg");
    });

    // Returns the message information
    bot_object.bot.onText(/Quiero ver la información de la respuesta/, (msg) => {
        console.log(msg);
        bot_object.bot.sendMessage(msg.chat.id, '<code>'+JSON.stringify(msg)+'</code>', {parse_mode: 'HTML'});
    });

    bot_object.bot.on('polling_error', (error) => {
        console.log(`[polling_error] ${error.code}: ${error.message}`);
    });
}
