class CommandHandler {
    constructor(client) {
        this.client = client;

        this.CommandRunners = [];
        for(let i = 0; i < this.client.config.commands.length; i++) {
            const command = this.client.config.commands[i];
            let temp_command;
            try {
                temp_command = require(`../Commands/${command}.js`);
            }
            catch(err) {
                console.log(err);
                continue;
            }
            this.CommandRunners.push(temp_command);
        }
    }
    isValidCommand(cmd) {
        for(const command of this.CommandRunners) {
            if(command.aliases.includes(cmd)) return command;
        }
        return false;
    }
}
exports.CommandHandler = CommandHandler;