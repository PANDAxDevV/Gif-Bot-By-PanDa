const request = require('request-promise-native');
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')


exports.run = async (Bastion, message, args) => {
  if(message.channel.nsfw == false) 
return message.channel.send(new Discord.MessageEmbed()
.setTitle('Gif Ara')
.setImage('https://cdn.discordapp.com/attachments/773087334140739597/773546087504019486/Adsz.png')
.setDescription(`${message.author} `)
.setColor('#00001'))


try {

if (args.length < 1) {

const embed = new Discord.MessageEmbed()

.setColor("BLACK")
.setDescription("**Gif Ara**");
      
return message.channel.send(embed);
      
}
    
let options = {

url: 'http://api.giphy.com/v1/gifs/search',

qs: {

q: encodeURI(args.join('+')),

api_key: 'dc6zaTOxFJmzC',

limit: 10,

offset: 0

},

json: true

};

let response = await request(options);

if (response.data.length) {

const embed = new Discord.MessageEmbed()

.setColor("BLACK")
.setDescription(`Gif Aranıyor : ${args.join(' ')}`.slice(0, 256))
.setImage(response.data[Math.floor(Math.random() * response.data.length)].images.original.url)
.setFooter("CodeBase")

return message.channel.send(embed);

}

else {

return Bastion.emit('Hata', '', Bastion.i18n.error(message.guild.language, 'Bulunamadı', 'Görsel'), message.channel);

}

}
  
catch (e) {

if (e.response) {

return Bastion.emit('Hata', e.response.statusCode, e.response.statusMessage, message.channel);

}

console.log(e);
}


};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['gif', 'gifara','ara'],

  permLevel: 0

};

exports.help = {

  name: 'gif-ara',

  description: "CodeBase",

  usage: 'gif-ara'

};
