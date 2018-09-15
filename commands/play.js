const Command = require('./command');

module.exports = class Play extends Command {
	static match(message){
		return message.content.startsWith('!p');
	}

	static action(message){
		message.
		
		let voiceChannel = message.guild.channels
			.filter((channel)=>{
				return channel.type === 'voice';
			})
			.first();

			voiceChannel.join()
				.then((connection)=>{
					connection.playFile('./ferme-ta-gueule.mp3');
				});
		
	}
}