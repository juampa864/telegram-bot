const bot = require('../config/bot-config');


module.exports = (app) => {
    app.get('/dice', (req, res) => {
        bot.bot.sendMessage(bot.user2, "Here is a dice ༼ つ ◕_◕ ༽つ");
        res.status(200).json({
            message: 'Telegram Bot Server Responded.',
        });
        bot.bot.sendDice(bot.user2);
    });

    bot.bot.onText(/\/start/, (msg) => {
        bot.temp = msg.chat.id;
        const opts = {
            reply_to_message_id: msg.message_id,
            reply_markup: JSON.stringify({
                keyboard: [
                    ['Asociar Usuario de Telegram a Athenea Academy.'],
                    ['Cambiar Usuario de Telegram dentro de Athenea Academy.']
                    // ['No, sorry there is another one...'],
                    // ['I\'m not into you...'],

                ]
            })
        };
        bot.bot.sendMessage(msg.chat.id, '¡Hola! ¿Qué quieres hacer? 🦉', opts);
    });

    bot.bot.onText(/Asociar Usuario de Telegram a Athenea Academy./, (msg) => {
        // listens for "/start" and responds with the greeting below.
        console.log(msg);
        // bot.temp = msg.chat.id;
        bot.bot.sendMessage(msg.chat.id,
            "Ingresa tu nombre de usuario en Athenea Academy 🦉");
        bot.bot.sendMessage(msg.chat.id,
            "Por favor ingresalo de la siguiente manera '/add user_name'");
    });

    bot.bot.onText(/\add (.+)/, (msg, match) => {
        const user = match[1];
        bot.bot.sendMessage(msg.chat.id,
            "Usuario agregado correctamente 🦉");
    });

    // // Matches /love
    // bot.bot.onText(/\/love/, function onLoveText(msg) {
    //     const opts = {
    //         reply_to_message_id: msg.message_id,
    //         // reply_markup: JSON.stringify({
    //         //     keyboard: [
    //         //         ['Yes, you are the bot of my life ❤'],
    //         //         // ['No, sorry there is another one...'],
    //         //         // ['I\'m not into you...'],

    //         //     ]
    //         // })
    //     };
    //     bot.bot.sendMessage(msg.chat.id, 'Do you love me?', opts);
    // });

    // // Matches /editable
    // bot.bot.onText(/\/editable/, function onEditableText(msg) {
    //     const opts = {
    //         reply_markup: {
    //             inline_keyboard: [
    //                 [
    //                     {
    //                         text: 'Edit Text',
    //                         // we shall check for this value when we listen
    //                         // for "callback_query"
    //                         callback_data: 'edit'
    //                     }
    //                 ]
    //             ]
    //         }
    //     };
    //     bot.bot.sendMessage(msg.from.id, 'Original Text', opts);
    // });


    // // Handle callback queries
    // bot.bot.on('callback_query', function onCallbackQuery(callbackQuery) {
    //     const action = callbackQuery.data;
    //     const msg = callbackQuery.message;
    //     const opts = {
    //         chat_id: msg.chat.id,
    //         message_id: msg.message_id,
    //     };
    //     let text;

    //     if (action === 'edit') {
    //         text = 'lol';
    //     }

    //     bot.bot.editMessageText(text, opts);
    // });

    // bot.bot.onText(/\/save me/, (msg) => {
    //     // listens for "/start" and responds with the greeting below.
    //     console.log(msg);
    //     bot.temp = msg.chat.id;
    //     bot.bot.sendMessage(msg.chat.id,
    //         "You have been saved.");
    // });

    // bot.bot.onText(/\/add/, (msg) => {
    //     // listens for "/start" and responds with the greeting below.
    //     console.log(msg);
    //     bot.temp = msg.chat.id;
    //     bot.bot.sendMessage(msg.chat.id,
    //         "Hello 😃");
    // });


}