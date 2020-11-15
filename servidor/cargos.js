exports.cmd = "cargos";
const Discord = require("discord.js");
const index = require("../bot.js");
exports.executecommand = function (message, args) {
}
exports.raw = async function (dados) {
    //debug.log(dados);
    if (dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return;
    //id mensagem canal familia Shado
    console.log("1");
    if (dados.d.message_id != "662395217537925162") return;
    //id server Familia Shado
    console.log("2");
    let servidor = client.guilds.get("332681313666596864");
    let membro = servidor.members.get(dados.d.user_id);
    let cargo_membro = servidor.roles.get("332757763673292800");
    let cargo_lolicon = servidor.roles.get("633865903083225118");
    let cargo_osuplayer = servidor.roles.get("633810707099680778");
    if (dados.t === "MESSAGE_REACTION_ADD") {
        console.log("3" + dados.d.emoji.id);
        if (dados.d.emoji.id === "652257572052533269") {
            if (membro.roles.has(cargo_membro)) return;
            membro.addRole(cargo_membro);
        } else if (dados.d.emoji.id === "652257950387404810") {
            if (membro.roles.has(cargo_lolicon)) return;
            membro.addRole(cargo_lolicon);
        } else if (dados.d.emoji.id === "633810707099680778") {
            if (membro.roles.has(cargo_osuplayer)) return;
            membros.addRole(cargo_osuplayer);
        }
    }
    if (dados.t === "MESSAGE_REACTION_REMOVE") {
        if (dados.d.emoji.id === "652257572052533269") {
            membro.removeRole(cargo_membro);
        } else if (dados.d.emoji.id === "652257950387404810") {
            membro.removeRole(cargo_lolicon);
        } else if (dados.d.emoji.id === "633810707099680778") {
            membro.removeRole(cargo_osuplayer);
        }
    }
}