function message(client, args) {
    const message = args[0];
    
    if(!message.content.startsWith("!!")) return;
    if(message.author.bot) return;

    const words = message.content.substring(2).toLowerCase().split(" ");
    const cmd = words[0];
    const user_args = words.slice(1);


    const command = client.CommandHandler.isValidCommand(cmd);
    if(command) {
        command.callback(client, {
            api: args,
            user: user_args
        });
    }
}
exports.callback = message;