function voiceStateUpdate(args) {
	// oldState, newState
	// VoiceState
	const oldState = args[0];
	const newState = args[1];
	if (!oldState.channelID && newState.channelID) {
		//someone connected
		const attendance = client.attendance;
		if(attendance.started) {
			if(!attendance.members.includes(oldState.member.id)) {
				attendance.members.push(oldState.member.id);
				attendance.member.data[oldState.member.id] = {
					time: 0,
					inChannel: true
				} 
			} else {
				attendance.member_data[oldState.member.id].inChannel = true;
			}
		}
	}

	if (oldState.channelID && !newState.channelID) {
		//someone connected
		const attendance = client.attendance;
		if(attendance.started) {
		if(!attendance.members.includes(oldState.member.id)) {
			attendance.members.push(oldState.member.id);
			attendance.member.data[oldState.member.id] = {
			time: 0,
			inChannel: true
			} 
		} else {
			attendance.member_data[oldState.member.id].inChannel = true;
		}
		}
	}
}
exports.callback = voiceStateUpdate;