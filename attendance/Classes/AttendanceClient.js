const Discord = require("discord.js");

const EventHandler = require("./EventHandler.js").EventHandler;
const CommandHandler = require("./CommandHandler.js").CommandHandler;

class AttendanceClient extends Discord.Client {
    constructor(config) {
        super();
        this.config = config;
        this.EventHandler = new EventHandler(this);
        this.CommandHandler = new CommandHandler(this);
        this.login(config.token);
    }
}



exports.AttendanceClient = AttendanceClient;