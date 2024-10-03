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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_54_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MixcbiAgICAgICAgODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU0LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwLFxuICAgICAgICAxODQsXG4gICAgICAgIDg5LFxuICAgICAgICAxODQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDMsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDUwLFxuICAgICAgICA5NyxcbiAgICAgICAgODIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0LFxuICAgICAgICA5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMixcbiAgICAgICAgMTc1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQzLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMzRVVjF2NVMxNWRLWWJRMkl3amVOY2dZQU5YUEd3a2M4OUVaQzh6S0I2MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjUwMjMzMTk4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDRDMzg0QTcyNjc5QzIwNUY1MTc3RDc2OEY5RkMyMTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3OTI0MDYxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJIUW1Cc1F4UWRHN2luaWZTeWFJQmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTZlZDk4OGMtZmQ2Mi00ZjU1LWFlZTMtZjY2MzRmN2Y1ZDRmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDIwNyxcbiAgICAgIDE3MixcbiAgICAgIDIwNyxcbiAgICAgIDQ1LFxuICAgICAgMTUsXG4gICAgICAyNTQsXG4gICAgICA1OCxcbiAgICAgIDEzOCxcbiAgICAgIDIwNyxcbiAgICAgIDE3NSxcbiAgICAgIDIxLFxuICAgICAgOCxcbiAgICAgIDEzMixcbiAgICAgIDIzNixcbiAgICAgIDEzMSxcbiAgICAgIDcsXG4gICAgICAxNjMsXG4gICAgICAyMCxcbiAgICAgIDI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNyxcbiAgICAgIDEyMixcbiAgICAgIDE2OSxcbiAgICAgIDE2MSxcbiAgICAgIDI1MyxcbiAgICAgIDExLFxuICAgICAgNTIsXG4gICAgICA0MSxcbiAgICAgIDQ3LFxuICAgICAgMTU1LFxuICAgICAgMjUyLFxuICAgICAgNTksXG4gICAgICAyMDQsXG4gICAgICAxNzYsXG4gICAgICAxMjEsXG4gICAgICAzLFxuICAgICAgMjExLFxuICAgICAgNTksXG4gICAgICAyMzYsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTTE1TldDTDlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTAyMzMxOTg4OjkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4LyGyp/htI/htJzhtItz4bSPybQg4bWY4ba74bWY4bWQ4bWD4bWP4oGx4LySXCIsXG4gICAgXCJsaWRcIjogXCIxMjAxMzQ5MzMyMTc5NDo5MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMVGN6NG9ERU5XTytMY0dHQjRnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNxU0JJL013MUtYT3VtbW5QWWRQZmQ3K1hCSjNYcHJRSGJ4YkloeHB5WDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwickpEcnEvanYzeEMzRk5WTE5kalVvZ0VhTWl0VXNWd2lqOGJsYUZTa201eGd0bGlIeFV3STBHNTRYdDNvNjZrQ3hrUjdJajU4TDNrQzZoTFVrbVBtQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ2R1K0JuUWl2WXk0L05jRkRSams2MlNTbE5MNnMzSytJcktJaVgreGxBSmp6cG5naU40M1BHR2llMUQvb3pSL295V0RrRlF3TXlseUMrc2RHY1hlQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1MDIzMzE5ODg6OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc5MjQwNTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGUnNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZScy5qc29uIjogIntcImtleURhdGFcIjpcIjBSQXJRYjQ1NVM2L3JLYjVLVjNCbXV0WEU5MzIxR0ZOZjhURXk4NlArTXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODI3NTg0MDUyLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDMsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
