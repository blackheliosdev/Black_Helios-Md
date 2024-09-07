const bot = require(__dirname + '/lib/amd')
const { VERSION } = require(__dirname + '/config')

const start = async () => {
    console.info(`Starting Black Helios Dev ${VERSION}`)
  try {
    await bot.init()
    //bot.logger.info('⏳ Database syncing!')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    console.error(error);
    start(); // Restart the bot in case of failure
  }
}
start();
/**BLACK HELIOS WHATSAPP BOT**/
