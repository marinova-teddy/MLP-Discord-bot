function ping(client, args) {
    const message = args.api[0];
    message.reply("pong");
}
exports.callback = ping;
exports.aliases = ["ping", "p"];