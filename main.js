const Discord = require('discord.js');

const config = require('./config.json');

const bot = new Discord.Client;


bot.on('ready', async () =>{
    
    bot.user.setActivity('t!help');
    console.log(`${bot.user.username} est en ligne !`);

});

bot.on('message', async message => {

    if(message.author.bot)return;
    if(message.channel.type === 'dm')return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(message.content === prefix + "help"){
        let embed = new Discord.RichEmbed()
          .setTitle('Help')
          .setColor('#2ecc71')
          .addField('General : ', `**- t!help :** Show help.`)
          .addField('Moderation : ', `**- Empty**`)
          .setFooter('Copyright © 2018 - 2019 Catsuri33');

        
        return message.channel.send(embed);
    }
});

bot.login(config.token);