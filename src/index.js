// imports the node package for us
const TelegramBot = require('node-telegram-bot-api');

// grabs the environment variable
const token = '1776355209:AAGWMFNpkZf0zOlVM6G2y84Hu6T07MtRAO8';

// starts a new Telegram bot instance that "polls" for updates
const bot = new TelegramBot(token, { polling: true });

// we're using the API's in-built "onText" method
// it takes in a regex and the message
bot.onText(/\/start/, (msg) => {
    // listens for "/start" and responds with the greeting below.
    bot.sendMessage(msg.chat.id,
        "Surprice Shorty");
});


