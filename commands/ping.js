exports.cmd = "ping";
const index = require("../bot.js");
const Discord = require("discord.js");
exports.executecommand = function (message, args) {

    message.channel.send("Ping?").then(msg => {
        msg.edit(`Pong! A Latência é ${msg.createdTimestamp - message.createdTimestamp}. A Latência da API é ${Math.round(index.client.ping)}ms`);
    }).catch(error => console.log(error));
}