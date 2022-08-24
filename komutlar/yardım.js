const Discord = require ('discord.js')

exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
        .setTitle(` **بەخێربێن بۆ مێنۆی یارمەتی کۆدبەیس بۆت** `)
        .addField('Farmani Gif', 'Prefix + ara | Prefix + Girl | Prefix + random-pp | Prefix + Boy | Prefix + emoji ', true)
        .addField('Bo Bangesht Krdni Botaka', 'Prefix + davet', true)
        .setFooter(`Gif Kurdish`)
    return  message.channel.send(embed);
  
        };




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'g!davet-sistemi Menüsü',
  usage: 'yardım'
};
