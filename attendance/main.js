const AttendanceClient = require("./Classes/AttendanceClient.js").AttendanceClient;
const token = require("./auth.json").token;


const client = new AttendanceClient({
    token: token,
    events: ["ready", "message"],
    commands: ["ping"]
});
client.attendance = {
    started: false,
    members: []
}
