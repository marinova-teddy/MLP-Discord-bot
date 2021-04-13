/*
config = {
    token: "gt 34w5y345y34y6t34",
    events: ["ready"]
}

*/


class EventHandler {
    constructor(client) {
        this.client = client;
        
        this.EventListeners = [];
        for(let i = 0; i < this.client.config.events.length; i++) {
            const event = this.client.config.events[i];
            let temp_event;
            try {
                temp_event = require(`../Events/${event}.js`);
            }
            catch(err) {
                console.log(err);
                continue;
            }
            this.EventListeners.push(temp_event);
            
            this.client.on(event, function(...args) {
                temp_event.callback(client, args);
            });
        }
    }
}
exports.EventHandler = EventHandler;