exports.cmd = "ajuda";
const Discord = require("discord.js");
exports.executecommand = function (message, args) {

    message.channel.send("Um momento aguade...").then(ajuda => {
        let comandos_l = "Comandos Disponiveis, !roll/!r, !user/!u, !time/t, !info, !ping/!p";
        let lista_comandos = new Discord.RichEmbed().setDescription(comandos_l);
        ajuda.edit(lista_comandos);
    });

}