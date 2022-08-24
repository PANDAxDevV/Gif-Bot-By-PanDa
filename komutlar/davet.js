const Discord = require ('discord.js')

exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
        .setTitle(` **** `)
        .addField('Support =>', '[Server Support!]() ', true)
        .setFooter('Magnetic CodeShare')
    return  message.channel.send(embed);
  
        };




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Support'],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: 'Support Bot Server',
  usage: 'yardım'
};
