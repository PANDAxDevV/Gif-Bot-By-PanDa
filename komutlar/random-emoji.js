const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(message.channel.nsfw == false) 
return message.channel.send(new Discord.MessageEmbed()
.setTitle('Halaiak Habu!')
.setImage('https://cdn.discordapp.com/attachments/773087334140739597/773546087504019486/Adsz.png')
.setDescription(`${message.author} `)
.setColor('#00001'))

    let replies = ["https://cdn.discordapp.com/attachments/773949072573857857/786656529000038480/1_Png.png","https://cdn.discordapp.com/attachments/773949072573857857/786656531307298856/0_emoji.png","https://cdn.discordapp.com/attachments/773949072573857857/786656532757610546/1pingblob.png","https://cdn.discordapp.com/attachments/773949072573857857/786656541264314378/31.png","https://cdn.discordapp.com/attachments/773949072573857857/786656541796466748/477ed565df23c36d182e6d6876f065d0.webp","https://cdn.discordapp.com/attachments/773949072573857857/786656544745586688/1038_Among_Us_Pepe.png","https://cdn.discordapp.com/attachments/773949072573857857/786656551212417084/1349_Pepe_Comfy.png","https://cdn.discordapp.com/attachments/773949072573857857/786656555151523880/1235_wojak_pepe_hoodie.png","https://cdn.discordapp.com/attachments/773949072573857857/786656581982617620/734416074757374042.png","https://cdn.discordapp.com/attachments/773949072573857857/786656603805974578/Ayar_Png.png","https://cdn.discordapp.com/attachments/773949072573857857/786656740975706152/Gulen_Yuz_Png.png","https://cdn.discordapp.com/attachments/773949072573857857/786656909335330836/YEET.png"];
    let result = Math.floor((Math.random() * replies.length));
    let gifembed = new Discord.MessageEmbed()
          .setTitle(":heart: Random Emoji :heart: ")
        .setColor("BLACK")
        .setFooter(`${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);
    message.channel.send(gifembed);
  
};
  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emoji-random','emoji','emojirandom','randomemoji'],
  permLevel: 0
};

exports.help = {
  name: 'random-emoji',
  description: 'Rastgele gif atar.',
  usage: 'woman'
};

