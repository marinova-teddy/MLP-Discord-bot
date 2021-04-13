var token = require("./auth.json").token;
var Discord = require("discord.js");
var client = new Discord.Client();

client.on("guildMemberAdd", (member) => {
	console.log(member.nickname);
	member.author.send("Welcome to the ACS Community Server!");
	console.log("acscs");
});

client.on("message", (message) => {
	if (message.content === "gib metro map") {
		message.channel.send({
			files: [{
				attachment: './images/sofia-metro.png',
				name: 'sofia-metro.png'
			}]
		});
	}
});

client.login(token);