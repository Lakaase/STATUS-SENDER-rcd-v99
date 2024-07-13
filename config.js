//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUdQUWhnWlF1amF6aTk1K2RuTG0wOFZhem4xajhsMlExaDlzNjJza3UxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlVzb2dUVVduY04ra1Rva2MvdlZZQk1sSnMva3M2bmlTajNGK0FZWDNoUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTzNhek83VVZxYnJpcFg3MHR1eWR4RGVqTi9jeGhmTFZVbXZZOHhmTVZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzYkdSWlVWR1hnMVE0M0cySkVKQ1Fnd3BaemV0MXNCU21kdk84QjF1cVVFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBFTCtaVFE0c2QxeXZiektJVSsyTnIvUjc2MVErbGFSRnYvY0VVL25vMlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBBcDB6UFhTbmNpQ1NKZy9EU0JLNHZXR3FaNGErajBHOXBvdk4vUmlnQzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0VhTWFHOXkwZmQ2S2dsUkxmL2xRRGJwNVdrdE45VVZLMkpsbERxU3FuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2tKUzVwSUdsRmo1TVp4dHYrdVlTY1M5VVM0anhXSU12UW9RUGtKS05HZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9GcWRBTEFsQ1ZwOWxjcmZwdFpWSXEyYzd4bFVTa1pqcHBzYmI3SXpwMGM4WExpbmh0eDhhWTJ3NndNMURaUGpIZWpyenE0OHkvczFrYkNnS0RGVkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzQsImFkdlNlY3JldEtleSI6Ii9WOG14TmU5SHgzNFF0Ulh6RjFPVWJGNEVuOFpuYnJhbW92eTVYL01yZzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTc4NjczODlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUNFRTZFMUYxM0I2NzUzMzQyNEUzNDlENUEwNjk1NjcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDkwNzM0Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYTNwOTFZTENUSmFKdVBDcWUwMnl6USIsInBob25lSWQiOiIyOTA5MzNhYy01OTU0LTRjZWQtYWQ4ZC01YWVjMzIzZDJkZDkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmlDNXZQbEF2Y0w1NHkvc1NzNnZueTVWNWpZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdSTzZSekVPRTdvd2xsR0p4aVJscEFUejR3UT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJWNUZSMktZRCIsIm1lIjp7ImlkIjoiOTQ3MTc4NjczODk6OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiItI2Bf8J2XqSDwnZecIPCdl6Nf8J2XpiDwnZebIPCdl5Qg8J2XlyDwnZeiIPCdl6pfW/Cdl6Ag8J2Xl10gXG7wnZepXG7wnZecXG7wnZejXG5cbvCdl5VcbvCdl6JcbvCdl6dcblxu8J2XlFxu8J2Xllxu8J2Xolxu8J2XqFxu8J2XoVxu8J2Xp1xu77yl77yy77yy77yv77yyIF8/In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJaldxSlFHRU1Mc3k3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHV3I3MEVBYVF1ZmFIOFhUSjNMWlhFaTRKTTZGK0tuSUdqb1YxYk9VMVNBPSIsImFjY291bnRTaWduYXR1cmUiOiJ0TC9OTWVZclRvdVB4b3RNV1krUFJVMHU1akdlNGFPWGtJdG52cG5qVTgyZEVUR0hOK1pJNEt6d3hqVTUvcmNITmtqV1NuQVNNN0JObVpTam5iY1hCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ1R5T05yaGtVVDZCK0p4TWdRNWZWU2pGeDROMFd1aU44OWdPQUxESVVrNlhRT1RDMklFaUMyWDYrWENraVQyUExUaDBQeUFNUWltOFJCZEMrNXhjQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxNzg2NzM4OTo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJscSs5QkFHa0xuMmgvRjB5ZHkyVnhJdUNUT2hmaXB5Qm82RmRXemxOVWcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA5MDczNDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTnowIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
