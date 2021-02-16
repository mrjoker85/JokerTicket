const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args, functions) => {

    if (message.content === '?help') {
        message.react('✅');
    } 

let embed = new Discord.MessageEmbed()

   .setTitle(`Ticket`)
   .setDescription(`Hey <@${message.author.id}> Mamnoon Az In Az Bot Ma Estefade Kardid`)
   .setColor(`#A025E2`)
   .addField("```?setlogs```", "Az In Command Baraye Set Kardan Log Dar Channel Khod Estefade Konid ```?setlogs #channel```", false)
   .addField("```?ticket```", "Az Command Baraye Sakhtane Ticket Estefade Konid ```?ticket```", false)
   .addField("```?close```", "Az In Command Baraye Delete Kardan Ya Bastane Har Ticket Anjam Bedid ```?close```", false)
   return message.channel.send(embed);

}
exports.help = {
    name: "help",
}
