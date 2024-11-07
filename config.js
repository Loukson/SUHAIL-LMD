const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Loukson/SUHAIL-LMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/dmKqfTP.jpg" || "https://iili.io/dmKqfTP.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22502331988";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4,https://iili.io/dmKqfTP.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "22502331988,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_01_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDgzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyLFxuICAgICAgICA2NCxcbiAgICAgICAgODksXG4gICAgICAgIDMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk0LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAzMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDY3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNixcbiAgICAgICAgMjQwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDkxLFxuICAgICAgICA1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNixcbiAgICAgICAgMTMxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIllhZEZiZ3R2U21kZTkyTFIrVk5FWGY3dnR2UWRYTEJub0pJa2RJSlZjenM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5MaThMRzBqVEQtYlVfdlV2SnJRWGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDliYmYyMjQtMmIxNS00M2U2LTk5NjgtYWUxMGQ1ZGM4ZjE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgOSxcbiAgICAgIDUzLFxuICAgICAgMTk3LFxuICAgICAgNjQsXG4gICAgICAyMDIsXG4gICAgICAzMCxcbiAgICAgIDE5NyxcbiAgICAgIDQwLFxuICAgICAgMTA5LFxuICAgICAgNTgsXG4gICAgICA0MSxcbiAgICAgIDE5NCxcbiAgICAgIDIzMixcbiAgICAgIDM3LFxuICAgICAgODQsXG4gICAgICAxNTgsXG4gICAgICAxMDcsXG4gICAgICA1MyxcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcwLFxuICAgICAgMTQ5LFxuICAgICAgMTAzLFxuICAgICAgMjA4LFxuICAgICAgMjA5LFxuICAgICAgMTU0LFxuICAgICAgNTcsXG4gICAgICAxMzcsXG4gICAgICAyNTQsXG4gICAgICAyMTksXG4gICAgICAxMzYsXG4gICAgICAyMTAsXG4gICAgICAxNjksXG4gICAgICA2OCxcbiAgICAgIDEwNSxcbiAgICAgIDE3LFxuICAgICAgMjM1LFxuICAgICAgMjUyLFxuICAgICAgMzIsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSTVI0SFY1OVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDIzMzE5ODg6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZm78J2ZvvCdmoTwnZm68J2agvCdmb7wnZm9IPCdmoTwnZqJ8J2ahPCdmbzwnZmw8J2ZuvCdmbhcIixcbiAgICBcImxpZFwiOiBcIjEyMDEzNDkzMzIxNzk0OjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p6dCthTUZFTUxJczdrR0dCVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWWpzSEhMZEVENU9jaXNJeE81Nm9DU1BscjB3bHJQUzIza2drSGk3S20wRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkMk5qNGFuQm5zblM3YjcvZHdkMW5rcldhTGxYOEQwcHZ6ZS9iNHpKWDIwWDNRZXFYcVVrMUV6U1AyUC95RTU2aGN2a0thUzdLMXZSUkgwaHhkRm5EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWcitMZlVHWlNDMmFxUkhaS1Q1enVBVWJCUXFRbzVNbHI1WVQ1YkkydU1XVFJucGZXZU9JU2Z6VmNhdzcyc0dXbUNmbU9MYnhxMHYwaDVMM0xZM1FqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjUwMjMzMTk4ODoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwOTk1MjcwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTzJGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPMkYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4d0hWTjNRei9mWm5QOFNRbmJwYkxzSHFDR1RqbkpkeitzNGRlTnI1ckl3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MTc1NzQwNDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDUxMDkxMzU4M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳ ® 』```", //*『✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  packname: process.env.PACK_NAME || "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  botname : process.env.BOT_NAME  || "NARUTO-MD",
  ownername:process.env.OWNER_NAME|| "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "THOMAS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
