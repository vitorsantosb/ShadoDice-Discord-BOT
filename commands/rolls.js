exports.cmd = "roll";
const Discord = require("discord.js");
exports.executecommand = function (message, args) {

    let rolls = 1;
    let maxpercent = 20;
    if (args.length >= 1) {
        if (args[0].toLowerCase().startsWith("d")) {
            args[0] = args[0].replace("d", "");
            if (Number.isInteger(Number.parseInt(args[0]))) {
                maxpercent = Number.parseInt(args[0])

            }
            if(args.length >= 2){
                if (Number.isInteger(Number.parseInt(args[1]))) {
                    rolls = Number.parseInt(args[1]);
                    if (rolls > 20) {
                        let mensagem_limite = new Discord.RichEmbed().setDescription("LIMITE ATINGIDO, MAXIMO PERMITIDO 20 ROLLS POR VEZ");
                        rolls = 20;
                        message.channel.send(mensagem_limite);
                    }
                    
                }
            }
        } else {
            if (Number.isInteger(Number.parseInt(args[0]))) {
                rolls = Number.parseInt(args[0]);
                if (rolls > 20) {
                    let mensagem_limite = new Discord.RichEmbed().setDescription("LIMITE ATINGIDO, MAXIMO PERMITIDO 20 ROLLS POR VEZ");
                    rolls = 20;
                    message.channel.send(mensagem_limite);
                }

            }
        }
    }
    message.channel.send("Rolando dados...").then(roll => {
        let result = "";
        //implementar sistema de dados de rpg d4 d6 d8 d10 d12 d20 d50 d100;

        for (let i = 0; i < rolls; i++) {
            let random = Math.floor(Math.random() * maxpercent + 1);
            if (random === 0) {
                result += " | " + Math.floor(Math.random() * maxpercent + 1);
            } else {

                result += " | " + random;
            }
        }
        result = result.replace(" | ", "");
        //.split(" | ").join(""); caso queiro trocar todos os valores.
        let roll_result = new Discord.RichEmbed().setDescription("Resultado dos dados: " + result);
        roll.edit(roll_result);
    });
}
