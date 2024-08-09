//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sandaru:sandu123@cluster0.piqcnbr.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "94784585726@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/GmvpSn3gDvw0svXoknTDL9";
global.website = process.env.GURL || "https://chat.whatsapp.com/GmvpSn3gDvw0svXoknTDL9";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94784585726";
global.owner = process.env.OWNER_NUMBER || "94784585726";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUtYd2N6Yzc3UmdiMXJYSnNXQllZYTMxdGdMU2tsY3FWaFpZeEV4THFsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEprSUM2ckREdkxmcUVmeEJCN0NFRzBBb3Z1RDI3Tjd4aGhxSFM5ckJWUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRlllckR1RVdOa25hV3VBZERWUHdrclJwU2tZUGIzUFBHWTBsZUlnc1hvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNM29VdHJnZC9RMjJYTWQvUHhZT282MFo5NTJIRE0vOWNBYVhvZkx3VUUwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlGNXlxK2FNRUxKZjl3KzIwc2tPbVZtdStEd1lyL0xJbk1TUjU3UXZ2WFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhaNWVmTHlsQXV0ZmFvYS9HR3RKcmErZWtRd2VjVkhDZEFwNktYaWRtRmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0ttL0gwcEcrMjNGdnZBcStadGhWQTNBdTBtRm5EYlNaOWdlb0JaaTJsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZISDRQTzFOVGlIUDdWaThaQkJpT25VNk4wNnIyQkRTRVBPNGpkc3pHND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ink0d0o0RDBkSE1UVVZoQUFlQitGUGFJWThNMVFCZUF4S1VhZ1Fnc0pIRUpUemJTSElYbEhHaUROdFFrUUdtNzdSZW1iQ1UzOGNNMEhHZzNHdDg3SER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJRQnRxOWdhTkUxSUFKc3B3Tzc2ZmJzV3lYZEJrTXF4WG9rbEFyZElRMnEwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg0NTg1NzI2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkM2MzAxREI1RDQzOTQ5RkE5MDI3RjEwQjRGQzA3ODdEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMyMTMzNjR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg0NTg1NzI2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE0QThBRjNEQzU5RkIxMkQzRDRCMDdFNDU0QkQyMkI4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMyMTMzNjR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjQxcjRVRWNIU0JHZW00YTB2dVFlZkEiLCJwaG9uZUlkIjoiM2ExMWYzNWItOWYyOC00ZDI4LTgwODEtNzAzODU5NDdmYzkzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndXbmpLdmJnTmFiY0lBUWJiM3VTT3dmNmpLTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYTEI4Z2ZWS3JoMEVkZ0N2bWM2UG1WdnB5SlU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWlJYVFBNUU4iLCJtZSI6eyJpZCI6Ijk0Nzg0NTg1NzI2OjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ii8vLi4uV2FzaS1NRC4uLi8vfiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXF3dURzUXBjell0UVlZQ1NBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicGpHNUgvK3R1SXhBZUlubS9YQkQ4eE1BWUFZblN3UytLU3hGMm1aUWQyRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiK3IzUjRrYjJ6ZEVYTm5OUlZqSTBCdVhpM2FMVVZFWnlJODVYQmFCOTlyekdmeWlKQTgvK2dORkRmbXBYbHVhdHRvcXlJSkhqTDViRmJxWHpLY1lRQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IjJ3L0NteElyOVA2VUhLOFppUzFkaEx1eHZ5cG15QXdEaHk2WVhrbVlOdmtFOFdCQXBPeGgzMGY1YkRyM1ZONlJHOUZmdWM3VXZlSTFtU2dmMlYxbUJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODQ1ODU3MjY6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYVl4dVIvL3JiaU1RSGlKNXYxd1EvTVRBR0FHSjBzRXZpa3NSZHBtVUhkaCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzIxMzM2MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKbTMifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "Sandaru",
  errorChat: process.env.ERROR_CHAT || "94784585726",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-4d6032b2-5c2e-41bd-89af-e98237d8cbae",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
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
