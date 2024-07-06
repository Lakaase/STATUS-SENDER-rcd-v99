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
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
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

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0FQQlBDRXg0WWcxQ2RHREk3Y214NkhvSmxwdG02Y3JwTHQwR0RzMFFYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTFTaCtjNXkxcVp4V0d4eDI1L3BMUXFWSERmYU5qTU5JcVE5RlY2cTZFMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Q2dLeCtsTG9HWWI2VGlIbGtFMVNVb0xNRjZEZjRsRkIxSFh4UndZNFZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6VEI0ZDVSWXUyVkxVT1pSQ3ljOUFkdTdkZFFLSC8wWVdtUmhuRU5ZWnlFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFLcVFBWEI3VDl6WjdjZy8rS3llZlJ4ZGZTSmtOUWtCcXVKYWhlRGwyVkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImU1OCtrSjVnY3BTZG5VMU05TWR3MG1aVkVhcWtaS0xuTGJDYk5KTGFzaVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0lsUGFiTmk3MGp2endhNUszUmRzbXFSV0RHdWZ5RkhJbjFrRkgxNXRucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHpuTXJ0WUlENkp5eS96N2VsaGlTRTdsZE5SVFhuTzBUb2NJQ0twYmhqTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNnTlpOdUxhWmJYRWtFRmJQa3hWSGx1WWErQ1ltUkk0b1BHaFJOVmFJbnphL1BVWHV4eXJjUnNENTQwby9YRkxPVXZRcU9tTXJKNzZyNEVyQlRJN0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY1LCJhZHZTZWNyZXRLZXkiOiIvMlp1QXpqdHpxTjRtUkpIam1vVkErbFhVRVRuM3F4eDNYc24zMHRsemY0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaUVVydkhFb1JWcWJtb2J6WWpDQkJ3IiwicGhvbmVJZCI6ImVjYjMyNTBmLWFkZGEtNDk5YS1hZTk5LWUwNjNjNTQwZWYwNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJONjk4bFBjelBPVzNPQjdnS3VJRXhDZEhEOVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXZURGUySWJMRXZHN1puc1BVSExwN1lZV1QwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilc5WTRRS01aIiwibWUiOnsiaWQiOiI5NDcxNzg2NzM4OTo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ii8+XG7wnZemXG7wnZenXG7wnZeUXG7wnZenXG7wnZeoXG7wnZemXG5cblxu8J2Xp1xu8J2XmFxu8J2Xnlxu8J2XlFxuXG7wnZepXG7wnZecXG7wnZejXG5cbvCdl5VcbvCdl6JcbvCdl6dcblxu8J2XlFxu8J2Xllxu8J2Xolxu8J2XqFxu8J2XoVxu8J2Xp1xuXG7vvKXvvLLvvLLvvK/vvLIgID8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0liV3FKUUdFUDNNb3JRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdXcjcwRUFhUXVmYUg4WFRKM0xaWEVpNEpNNkYrS25JR2pvVjFiT1UxU0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1zVFFsZlhmWGk4Vm1uczQwMkxsak1MdnZ5MVRwRmNvWkVCRkFMeWNrVFg5UTFtTEF2M0c3SlN4WkRJd3QvSmtRZFBpSG5HUXhzY2ZYei85aGFHWkN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQQU5DRW9ZWWFtdE1iVWZDUmt1NUdaSHBtZTJ6ZHk1M3M0RWlQYk1nOC9mZGdRdXlTRmwza2c1S2dNTmF5Vms2cGN6UHI2UU5yWUdxM3NzS3gzV21Edz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzE3ODY3Mzg5OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmxxKzlCQUdrTG4yaC9GMHlkeTJWeEl1Q1RPaGZpcHlCbzZGZFd6bE5VZyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDIzMTU2MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOejAifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ R͢C͢D͢ M͢D͢",
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
  LANG: (process.env.THEME || "RCD").toUpperCase(),
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
