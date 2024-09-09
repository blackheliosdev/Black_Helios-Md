const fs = require("fs-extra");
if (fs.existsSync(".env")) 
  require("dotenv").config({ path: __dirname + "/.env" });

global.audio = "";
global.video = "";
global.port = process.env.PORT || 3000;
global.appUrl = process.env.APP_URL || "";
global.email = "blackheliosdev@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/blackheliosdev/Black_Helios-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafxn8UAzNc2X8jUlL2w";
global.website = process.env.WEBSITE || "https://whatsapp.com/channel/0029Vafxn8UAzNc2X8jUlL2w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || "https://telegra.ph/file/4d9e5af46fa726c8646f4.jpg";
global.devs = process.env.DEVS || "2348094718285";
global.sudo = process.env.SUDO || "2348094718285";
global.owner = process.env.OWNER_NUMBER || "2348094718285";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.welcome_message = process.env.WELCOME_MESSAGE || "Welcome to the group, @username! Enjoy your stay.";
global.goodbye_message = process.env.GOODBYE_MESSAGE || "Goodbye, @username! We'll miss you.";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false";
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/blackhelios-scan";

global.SESSION_ID = process.env.SESSION_ID || "";

module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".,!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Black Helios just generated a new file!",
  author: process.env.PACK_AUTHER || "Black Helios Dev",
  packname: process.env.PACK_NAME || "Black Helios Pack",
  botname: process.env.BOT_NAME || "Black_Helios-Md",
  ownername: process.env.OWNER_NAME || "Black Helios Dev",
  errorChat: process.env.ERROR_CHAT || "Black Helios doesn’t understand this yet.",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || "public",
  LANG: (process.env.THEME || "BLACK_HELIOS").toUpperCase(),
};

global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update '${__filename}'`);
  delete require.cache[file];
  require(file);
});
