const Bot = require('./models/bot');
const config = require('../config.json');
const Bluebird = require('bluebird');
const direction = require('./direction');
const http = require("http");
const express = require("express");
const WebSocket = require("ws");
const app = express();
const server = http.createServer(app);
const webSocketServer = new WebSocket.Server({ server });
process.setMaxListeners(0);


(async() => {
    await Bluebird.delay(1000)
    for (let i = 1; i <= 15; i++) {
        const bot = new Bot();
        bot.login()
        webSocketServer.on('connection', ws => {
            ws.on('message', (message) => {
                bot.do(message)
                setInterval(() => {
                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)
					                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                    bot.send(`cemzyy: join TF clan https://discord.gg/9UBSBJUZPF`)

                }, 2000)
            });
        });
    }
})()



server.listen(8999, () => console.log("Server started"))