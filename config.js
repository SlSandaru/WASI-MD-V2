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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK09STXFRL0lDY0RnbHVnTlQySzU0UC9kMnhYZzVUNFlXbk9OYVQyZHhsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVN0eW5pMmxJYkYwZ2lyL0x2OVhaVkEzL2pXcVVGcWw2a3lTTWJKRTFRdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvT1VJclRjSExRZXdTZTd6RHJGNzR6S0xuNm80VEdpME5LTGhsT2hZUW1VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKTjV6TkpzVjMwSVR5bXAzWVMzWHpBaXJHQmIwODA5YXJWdS9FWUJMcEJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBJOVFRVGtTTUpiMGdGNFV1M2J2ZGxDbUdaaTZjQXZBRGNLTS91MUNaMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpKeVNLNXFUbjlvaHFPcEFRYUZOOFpwcHhENTkyVE83Zk02YkRjMUZTblk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1BjWThpWEptZWZodmhRVTlUempHMTdpK3NaZk1sR0lxSWtsZm0xV3dXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlV5VHlPS2ovcHRLVmRnQjVlTVNTMVhoMmhYQWpKQWVCNkpGZkhremlGMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVqUjhKbjZRc1N4UThuMnFaemNObmlmRDRDcVNyVGt5S091Z1pxQlB5c2JnNjhsRFJHMUI2eHlkRUREaFBxUnZBWE03MjNCOHI0dTBUYmNCUkoydmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQsImFkdlNlY3JldEtleSI6IlM2cFgxd1NDVDhmZjlZQVFVdWlSbjRPd09vdk1EYVVucUxBOHFWTmtFTms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODQ1ODU3MjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkRFQkRBQzc3ODM3Njc3MDQxMjg0QjU3NTAxQTNGQzQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTkwNzcxN30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODQ1ODU3MjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUEyQkY4NzJCOTkyREFDNzUzRjVGNzQ2Rjc4MjMzOTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTkwNzcxN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZWVmYUNIRXZSTldROURFYU5RMXRuZyIsInBob25lSWQiOiJlOTAyNWI3Yy03OTljLTQwYjUtOGU0OS0xMjQxNDYyZWFiNWIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3pNZ0VRSnZ6Y3RrVUg3WTl4Q1hGUW9Qb3ZZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImREcmNpMEVlQmFTS0czRGpWU09rMEpkcHlwZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKNUhCVkM1SiIsIm1lIjp7ImlkIjoiOTQ3ODQ1ODU3MjY6OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIvLy4uLlJhZ2Fub3JrLU1ELi4uLy9+In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJcXd1RHNROXZPSXRRWVlCeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwakc1SC8rdHVJeEFlSW5tL1hCRDh4TUFZQVluU3dTK0tTeEYybVpRZDJFPSIsImFjY291bnRTaWduYXR1cmUiOiJ4YWUzdWJWOENjdVNlQjI1dzRFWDhLRWJFZGxzOWl3WnNmeUwxUlVJQURQclB3WXo5QTRpbXUvMDhHTVZ1Q0RqTVlBYWtVTytiQ0lMNXdvSlFweWlEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY1htQ3F3TnZpaWxZN0h1aFA4bTRYZWhzZTZGVzFrTVZUUVNTa3pueFlRVk51aC9INWUwaG5zdUdIYWlaSG5sNTVmYkJCRUI0cGt0emMxWHNqWFV4amc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4NDU4NTcyNjo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFZeHVSLy9yYmlNUUhpSjV2MXdRL01UQUdBR0owc0V2aWtzUmRwbVVIZGgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE5MDc3MTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSm5CIn0="
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
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
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
