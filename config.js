const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4" ;
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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4" || "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22502331988";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_06_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDc1LFxuICAgICAgICAzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTksXG4gICAgICAgIDk2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDgxLFxuICAgICAgICA4OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjksXG4gICAgICAgIDcxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDcxLFxuICAgICAgICA2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM0LFxuICAgICAgICA1NixcbiAgICAgICAgODUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NixcbiAgICAgICAgODUsXG4gICAgICAgIDY4LFxuICAgICAgICA0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDYwLFxuICAgICAgICAxODgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDc5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDUyLFxuICAgICAgICA1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM5LFxuICAgICAgICA0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJQWRHU0RSQ0p3VUVwdThSaXZJd2FjbzgweHdWemJBd3hvMzdpOXAxRGJZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTAyMzMxOTg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwNDNERDM3NzhDOTE1MUMxMjBDMTIzQTM2ODFFMDMxNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjgxMDEyMDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZzNMNDFENmlRemkyX1d1RmtpYmxEZ1wiLFxuICBcInBob25lSWRcIjogXCJlZDJmYTA0NS0yYjg3LTQzNjctYjg4Yi0wYzI0NzI1MDhjZTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAxMTUsXG4gICAgICAzMCxcbiAgICAgIDgwLFxuICAgICAgMjE0LFxuICAgICAgMTAsXG4gICAgICA2MSxcbiAgICAgIDgsXG4gICAgICAxMTksXG4gICAgICAxLFxuICAgICAgMzMsXG4gICAgICAyMTAsXG4gICAgICAyMDEsXG4gICAgICAxMDEsXG4gICAgICAyMDQsXG4gICAgICA1OCxcbiAgICAgIDg4LFxuICAgICAgMTcyLFxuICAgICAgMjksXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICAxMDIsXG4gICAgICA5OCxcbiAgICAgIDE2NSxcbiAgICAgIDE2LFxuICAgICAgMjA0LFxuICAgICAgMTYwLFxuICAgICAgMTAzLFxuICAgICAgMjM1LFxuICAgICAgNDcsXG4gICAgICAxOTgsXG4gICAgICAxMDksXG4gICAgICAyNTAsXG4gICAgICAxNixcbiAgICAgIDE1NixcbiAgICAgIDEwNyxcbiAgICAgIDIxMCxcbiAgICAgIDg2LFxuICAgICAgMjEwLFxuICAgICAgMTgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxDWlpaVzRTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjUwMjMzMTk4ODo5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIvwnZqv8J2QlPCdkIrwnZCS8J2ar/CdmrQt8J2QlPCdmq3wnZCU8J2as/CdmqvwnZCK8J2asFwiLFxuICAgIFwibGlkXCI6IFwiMTIwMTM0OTMzMjE3OTQ6OTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFRjejRvREVNUDJncmdHR0NBZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTcVNCSS9NdzFLWE91bW1uUFlkUGZkNytYQkozWHByUUhieGJJaHhweVg4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBkRTZwbFNXcjYyZkgzdmFFVXNUaGFRT2srS1lPTG1rblpWNlZMcUl5aW9kcmdBalNWcUQrWHFTN2k4Z0dqc2x0bjgvbTVaVEJVTGVWMHJCSzRZSERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImwwRHdXNExwdzZGZCt1bDRudVg5dEdsT2VsYnBKSldyVnlERVFtNS9lNVoyQ3Q0Mm9GR25pdkxxRUhmN1JIQlNLd0pqQjZXd0NWdjdZZDEzVmZhWEJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTAyMzMxOTg4OjkyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MTAxMjAxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRlJzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGUnMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwUkFyUWI0NTVTNi9yS2I1S1YzQm11dFhFOTMyMUdGTmY4VEV5ODZQK01zPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgyNzU4NDA1MixcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

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
  LANG: ( process.env.THEME ||  "NARUTO"  ).toUpperCase(),



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
