// This module is a middleware to facilitate the implementation of Telegram bots.
const TelegramBot = require('node-telegram-bot-api');

// Grabs the token from the .env file, stored in the process.env variable.
const token = process.env.bot_token;


// Starts a new Telegram bot instance that "polls" for updates
const bot_object = {};
bot_object.bot = new TelegramBot(token, { polling: true });;
bot_object.user_id = process.env.jp_user_id;
bot_object.temp = 0;

module.exports = bot_object;
