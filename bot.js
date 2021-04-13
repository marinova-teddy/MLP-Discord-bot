var token = require("./auth.json").token;
var Discord = require("discord.js");
var client = new Discord.Client();

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!isNaN(Number(message.content))) {
    if (message.channel.permissionsFor(client.user).has("SEND_MESSAGES")) {
      message.reply(Number(message.content)+1);
    }
  } else {
    if (message.channel.permissionsFor(client.user).has("ADD_REACTIONS")) {
      // message.react('\:watermelon:');
    }
  }
  if (message.content === "mlp what can you do") {
    let functions = new Discord.MessageEmbed()
      .setColor("8b32a8")
      .setTitle("MLP BOT FUNCTIONS")
      .setAuthor('MyLittlePony','https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/My_Little_Pony_G4_logo.svg/1200px-My_Little_Pony_G4_logo.svg.png', 'https://en.wikipedia.org/wiki/My_Little_Pony:_Friendship_Is_Magic')
      .setDescription("Here is what this bot can do:")
      .setThumbnail("https://www.pngitem.com/pimgs/m/362-3629212_my-little-pony-mane-6-and-spike-hd.png")
      .addFields(
        {name: "Ask for functions", value: "Type 'mlp what can you do'", inline: false},
        {name: '\u200B', value: '\u200B'},
        {name: "Add one", value: "Send any number", inline: true},
        {name: "Trigger angry Starlight Glimmer", value: "Delete any message", inline: true},
        {name: "Go to Wikipedia", value: "Click on the author name of this embed", inline: true},
        {name: "Say bye", value: "Type 'bye'", inline: true},
        {name: '\u200B', value: '\u200B'}
      )
      .setFooter('Friendship is magic!','https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/My_Little_Pony_G4_logo.svg/1200px-My_Little_Pony_G4_logo.svg.png', 'https://en.wikipedia.org/wiki/My_Little_Pony:_Friendship_Is_Magic')
      .setTimestamp()
    message.channel.send(functions);
  }
  if (message.content === "bye") {
    message.reply("bye bye!");
  }
  if (message.content.includes("/tts")) {
    let tts = new Discord.MessageEmbed()
      .setTitle(message.author.username)
      .setDescription("typed '/tts'")
    message.channel.send(tts);
  }
});

client.on("messageDelete", function(message){
  if (message.author.bot) return;

  let embed = new Discord.MessageEmbed()
    .setTitle(message.author.username) 
    .setColor("00ff00")
    //.setAuthor(Util.resolveString(message.author.username), "https://images-na.ssl-images-amazon.com/images/I/71qm5gxBDEL._AC_SL1417_.jpg", "https://discord.js.org/#/docs/main/master/class/MessageEmbed?scrollTo=setAuthor")
    .setImage("https://images6.fanpop.com/image/photos/38400000/Angry-Pony-my-little-pony-friendship-is-magic-38436638-1280-720.png")
    .setDescription(message.content)
    .setFooter("6to triesh ma", "https://target.scene7.com/is/image/Target/GUEST_1ec7846f-487b-4312-91b2-81e2bddc665e")
  message.channel.send(embed);
});

// client.on("messageReactionAdd", function(message){
//   console.log(message.MessageReactionEmoji.name);
// });

client.login(token);