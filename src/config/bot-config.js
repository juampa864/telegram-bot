const dotenv = require('dotenv');
dotenv.config();

// imports the node package for us
const TelegramBot = require('node-telegram-bot-api');

// grabs the environment variable
const token = process.env.TeleToken;

// starts a new Telegram bot instance that "polls" for updates
// const bot = new TelegramBot(token, { polling: true });
// const user = 759126271;

const bot = {};
bot.bot = new TelegramBot(token, { polling: true });;
bot.user = 759126271;
bot.user2 = 1535366437;
bot.temp = 0;

module.exports = bot;
