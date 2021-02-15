const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args, functions) => {

if(message && message.deletable) message.delete().catch(e => {});

let embed = new Discord.MessageEmbed()
.setTitle(`Ticket System`)
.setColor(color.none)
.setDescription(`Baraye Sakhte Ticket Roye 🎟️ Bezanid`);
message.channel.send(embed).then(m => {
  m.react('🎟️');
});

}

exports.help = {
    name: "ticket",
    aliases: ['createticket', "t"]
}
