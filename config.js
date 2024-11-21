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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_21_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDU0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxLFxuICAgICAgICA1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDc2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzEsXG4gICAgICAgIDQyLFxuICAgICAgICA3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTksXG4gICAgICAgIDM1LFxuICAgICAgICAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDksXG4gICAgICAgIDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg1LFxuICAgICAgICA4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUyLFxuICAgICAgICA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM4LFxuICAgICAgICA1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0LFxuICAgICAgICA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgODIsXG4gICAgICAgIDU2LFxuICAgICAgICA1NixcbiAgICAgICAgMjQwLFxuICAgICAgICA4NixcbiAgICAgICAgMjU1LFxuICAgICAgICA2NixcbiAgICAgICAgODIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZExNa1ZiR2NoZmtIMXhGSW9lbmpHVzVkNDlROTI5RkMrZlVxMkErNS9Ebz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYi14TTZsTDhSTHVmVld4Qm9ZdGY0UVwiLFxuICBcInBob25lSWRcIjogXCI5OTExNmQ0MC05MmVmLTQ0MjYtYTE4ZS03OGM3ZWRmNTI0ZDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQyLFxuICAgICAgMTAwLFxuICAgICAgMjQ1LFxuICAgICAgOTEsXG4gICAgICAxMTQsXG4gICAgICAzNixcbiAgICAgIDIzNyxcbiAgICAgIDIzMixcbiAgICAgIDgwLFxuICAgICAgMTExLFxuICAgICAgOTAsXG4gICAgICAxMTIsXG4gICAgICAxODEsXG4gICAgICAyNDgsXG4gICAgICAxMzMsXG4gICAgICAxMSxcbiAgICAgIDEwOSxcbiAgICAgIDMyLFxuICAgICAgNjYsXG4gICAgICA3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDIwNSxcbiAgICAgIDExOCxcbiAgICAgIDE5MyxcbiAgICAgIDI0MyxcbiAgICAgIDE0MyxcbiAgICAgIDEwOSxcbiAgICAgIDE2NyxcbiAgICAgIDIxOSxcbiAgICAgIDQxLFxuICAgICAgMTYwLFxuICAgICAgMTcyLFxuICAgICAgNzIsXG4gICAgICA4LFxuICAgICAgMTI3LFxuICAgICAgMTQ5LFxuICAgICAgMTI5LFxuICAgICAgMTg2LFxuICAgICAgMTg0LFxuICAgICAgMTAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxRUDlXVlhMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjUwMjMzMTk4ODo3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkL/wnZGC8J2RiPCdkL7wnZGG8J2RgvCdkYEg8J2RiPCdkY3wnZGI8J2RgPCdkLTwnZC+8J2QvCDwnZGH8J2QuPCdkLbwnZC7XCIsXG4gICAgXCJsaWRcIjogXCIxMjAxMzQ5MzMyMTc5NDo3MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKenQrYU1GRU1qQitia0dHRWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllqc0hITGRFRDVPY2lzSXhPNTZvQ1NQbHIwd2xyUFMyM2tna0hpN0ttMEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRUk0SkFsUHd5THMwKys1aFMvWDNrOFB6L2JtdzNDQk03NnRLYzlzZEw4ckIxczlkc1J5UkgrRzh1NUh2TmM5eHlNQXR4V0JDS25CZXZsN2FiVEdrQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQitIZk45ck55WXEyY2MzdXdVRy9VZmp2ZzNzNHUydVh6SHRIWVJLUmQyblNvbnFYWkR4NVFPT3hnTlFpYUltUmhTdWZkdzNEV25LTTdIdXRZWkpiRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1MDIzMzE5ODg6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjE0MTI2MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
