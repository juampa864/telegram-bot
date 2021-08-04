const bot = require('../config/bot-config');


module.exports = (app) => {
    app.get('/telebot', (req, res) => {
        bot.bot.sendMessage(bot.user, "HTTP Request");
        res.status(200).json({
            message: 'Telegram Bot Server Responded.',
        });
        bot.bot.sendDice(bot.user);
    });

    bot.bot.onText(/\/start/, (msg) => {
        // listens for "/start" and responds with the greeting below.
        console.log(msg);
        bot.bot.sendMessage(msg.chat.id,
            "Hola 😃");
    });

    bot.bot.onText(/\/save me/, (msg) => {
        // listens for "/start" and responds with the greeting below.
        console.log(msg);
        bot.user = msg.chat.id;
        bot.bot.sendMessage(msg.chat.id,
            "You have been saved.");
    });


}