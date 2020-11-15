exports.cmd = "user";
const Discord = require("discord.js");
exports.executecommand = function(message, args) {
    
        message.channel.send("Carregando Profile...").then(profile => {
            let usuarioAvatar = message.author.avatarURL;
            let description = "Seu avatar: ";
            let embed = new Discord.RichEmbed().setImage(usuarioAvatar).setDescription(description);
            profile.edit(embed);
        });
}