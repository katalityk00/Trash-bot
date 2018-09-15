module.exports = class Bot {


	constructor(bot,token){

		this.bot = bot;

		this.bot.login(token);

		this.listeningReadyEvent();

		this.listeningMessages();

	}


	listeningReadyEvent(){
		this.bot.on('ready',()=>{

			console.log("[BOT] The bot is connected the Discord Channel");
		});
	}

	listeningMessages(){

		this.bot.on('message',(message)=>{

			let commandUsed = Play.parse(message);
		})
	}

}