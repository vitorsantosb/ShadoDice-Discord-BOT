exports.cmd = "info";
const index = require("../bot.js");
const Discord = require("discord.js");
exports.executecommand = function (message, args) {

    message.channel.send("Recolhendo Informações...").then(informacao => {
        let client = index.client;
        let bot_Avatar = client.user.avatarURL;
        let guild_url_img = client.user.splashURL;
        //let usuario_link =  new Discord.RichEmbed().setURL("")

        let mensagem_entrada = new Discord.RichEmbed().setImage(bot_Avatar).setDescription("Atualmente com " + client.users.size
            + " usuários, em " + client.channels.size + " canais, em " + client.guilds.size + " servidores. \nNecessita de ajuda ?").setURL("https://discord.gg/aEz7KN");

        informacao.edit(mensagem_entrada);
    });

}