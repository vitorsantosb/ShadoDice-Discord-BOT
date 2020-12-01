const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
exports.client = client;

function updateActivity() {
    // PT
    // client.user.setActivity(`Estou em ${client.guilds.size} servidores`);

    // EN
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
}

client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
    //message.guilds.send("Bot foi iniciado, com "+ client.users.size + "usuários, em " + client.channels.size +"canais, em" + client.guilds.size +" servidores.")
    updateActivity();
});

client.on("guildCreate", guild => {
    console.log(`O bot entrou nos servidores: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
    updateActivity();
});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do no servidor: ${guild.name} (id: ${guild.id})`)
    updateActivity();
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

// let list = new Map();
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
    // Return if message doesn't start with prefix
    if (!message.content.startsWith(prefix)) return;
    // Return if only prefix
    if (message.content == prefix) return;

    // User input to lower case, and trim
    let userInput = message.content.toLowerCase().trim();
    // User input to array
    let args = userInput.split(' ');
    // Command is first of array and remove prefix
    let comando = args[0].replace(prefix, "");
    // Remove first from array
    args.shift();
    
    // If command doesn't exists in cmdlist then return
    if (!cmdlist.has(comando)) return;
    cmdlist.get(comando).executecommand(message, args);
});

client.on("guildMemberAdd", guildmember => {
    guildmember.guild.channels.get("417812183460610048");
})

client.login(config.token);
