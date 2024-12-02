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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_20_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjExLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDk4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA4OCxcbiAgICAgICAgOTksXG4gICAgICAgIDI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwLFxuICAgICAgICA2NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NixcbiAgICAgICAgNDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAwLFxuICAgICAgICAyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIyLFxuICAgICAgICA2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDcwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyLFxuICAgICAgICA0NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODYsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5cEc1UXM3VTRnSThPZ3l0VVpKUHUyeWozYzBNMElFTVg5cVFtZTQzejRRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTX2c4Z2lzTlJWcWNGblFYRnJsb09RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjcwNTZjZDEwLTQ4ZjMtNDg3Zi04Y2U2LTNmMjAxOGFkODljY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICAxNTYsXG4gICAgICA4LFxuICAgICAgODEsXG4gICAgICAzMSxcbiAgICAgIDU0LFxuICAgICAgMTI3LFxuICAgICAgMjM3LFxuICAgICAgMTg3LFxuICAgICAgODcsXG4gICAgICAyMDksXG4gICAgICAyMzAsXG4gICAgICAzLFxuICAgICAgMTEyLFxuICAgICAgMTkzLFxuICAgICAgMTA2LFxuICAgICAgMTM3LFxuICAgICAgMjMxLFxuICAgICAgMTI0LFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDE0OCxcbiAgICAgIDMwLFxuICAgICAgMjAsXG4gICAgICA1NCxcbiAgICAgIDc0LFxuICAgICAgMjEyLFxuICAgICAgMjI3LFxuICAgICAgMTAxLFxuICAgICAgMTQ3LFxuICAgICAgMTUsXG4gICAgICAxNCxcbiAgICAgIDEyMixcbiAgICAgIDY4LFxuICAgICAgMTI3LFxuICAgICAgMTIsXG4gICAgICAxNjYsXG4gICAgICAxOTIsXG4gICAgICAyMTAsXG4gICAgICA5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTWUI1TDc2U1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDIzMzE5ODg6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkL/wnZGC8J2RiPCdkL7wnZGG8J2RgvCdkYEg8J2RiPCdkY3wnZGI8J2RgPCdkLTwnZC+8J2QvCDwnZGH8J2QuPCdkLbwnZC7XCIsXG4gICAgXCJsaWRcIjogXCIxMjAxMzQ5MzMyMTc5NDo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tEdCthTUZFUGpSc3JvR0dCZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWWpzSEhMZEVENU9jaXNJeE81Nm9DU1BscjB3bHJQUzIza2drSGk3S20wRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqWEpuUFlOa2s5STRzVDFkZjZyWko1VmozeGtzcWRhNGFNS05WZ0lIS0NFSWIrSlNCYmNXS095Z0FxM3UzNk1EU1YzdEJIU1BrbnI2b0RORVFoL0JBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaZUpuT2tIeTh3Z25mQWoydkY0dHRxZ1o3bUdaWmU2dWpnYkVXNHBVZFNPejFtZWQ0Nlk0d1AvNVhleHp0a0RpQkhkc0xySkdXWjRyblFtSTVGZ0ppdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjUwMjMzMTk4ODo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMwNzcyNDVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
