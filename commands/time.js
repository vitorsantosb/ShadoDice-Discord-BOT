exports.cmd = "time";
const index = require("../bot.js");
exports.executecommand = function (message, args) {
    let client = index.client;
    message.channel.send("Tempo Ativo...").then(ativo => {
        ativo.edit("Ativo a: " + Math.floor((client.uptime / 1000) / 60) + " minutos")
        //membros.edit("Membros online:" + client.user.presence.clientStatus.desktop + "|" +client.user.presence.clientStatus.web +"|"+ client.user.presence.clientStatus.mobile +"|");
    });

}