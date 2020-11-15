const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
exports.client = client;

client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
    //message.guilds.send("Bot foi iniciado, com "+ client.users.size + "usuários, em " + client.channels.size +"canais, em" + client.guilds.size +" servidores.")
    client.user.setGame(`Eu estou em ${client.guilds.size} servidores`);

});

client.on("guildCreate", guild => {
    console.log(`O bot entrou nos servidores: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do no servidor: ${guild.name} (id: ${guild.id})`)
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

let cmdlist = new Map();
let cmds = [require("./commands/rolls.js"),
require("./commands/ajuda.js"),
require("./commands/info.js"),
require("./commands/ping.js"),
require("./commands/user.js"),
require("./commands/time.js")];

for (let cmd of cmds) {
    cmdlist.set(cmd.cmd, cmd);
}

let list = new Map();
//let  serv_list = [require("./servidor/cargos.js")];

//for (let cmd of serv_list) {
//    serv_list.set(cmd.list, list);
//}

let cargos = require("./servidor/cargos.js");
cmdlist.set(cargos.cmd, cargos);

client.on("raw", dados => {
    cargos.raw(dados);
});

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let args = message.content.slice(config.prefix.lenght).trim().split(/ +/g);
    let comando = args.shift().toLowerCase();

    if (comando.toLowerCase().startsWith(prefix)) {
        comando = comando.replace(prefix, "");
        if (cmdlist.has(comando)) {
            cmdlist.get(comando).executecommand(message, args);
            return;
        }

    }

});
client.on("guildMemberAdd", guildmember => {
    guildmember.guild.channels.get("417812183460610048");
})
client.login(config.token);
