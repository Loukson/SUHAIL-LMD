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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_36_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc3LFxuICAgICAgICA1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk0LFxuICAgICAgICA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDExLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDkwLFxuICAgICAgICAxMzksXG4gICAgICAgIDc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MixcbiAgICAgICAgMjA0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDY2LFxuICAgICAgICAxODEsXG4gICAgICAgIDExLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTksXG4gICAgICAgIDY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY2LFxuICAgICAgICAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzksXG4gICAgICAgIDU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTgsXG4gICAgICAgIDksXG4gICAgICAgIDEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV05aNzFPTUEzVHpwZElWeW5mYkpaYUNJZ2VZSDhjNzU3aUF1VTF4Sm1VQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMkFYT2R1ZUxTRldWYlhxUC0zWlprd1wiLFxuICBcInBob25lSWRcIjogXCIwMzY1Zjc1MC1kNTZmLTQxYjgtODVkYS0xM2U0YTU4MjBiYWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAxNCxcbiAgICAgIDkwLFxuICAgICAgMjI0LFxuICAgICAgMTA5LFxuICAgICAgOTksXG4gICAgICAxMSxcbiAgICAgIDI3LFxuICAgICAgNTYsXG4gICAgICAyNTUsXG4gICAgICAxMTksXG4gICAgICAxOTgsXG4gICAgICAxNjcsXG4gICAgICA1NyxcbiAgICAgIDQsXG4gICAgICAxMTQsXG4gICAgICAxODUsXG4gICAgICA4MyxcbiAgICAgIDE2MSxcbiAgICAgIDU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOCxcbiAgICAgIDI0OSxcbiAgICAgIDk2LFxuICAgICAgMTczLFxuICAgICAgMjA0LFxuICAgICAgMjQzLFxuICAgICAgMTM0LFxuICAgICAgMTk1LFxuICAgICAgMTg2LFxuICAgICAgMTk0LFxuICAgICAgMTYyLFxuICAgICAgMTQ1LFxuICAgICAgNzIsXG4gICAgICA0NyxcbiAgICAgIDI0LFxuICAgICAgMjQ2LFxuICAgICAgNzUsXG4gICAgICAyMTQsXG4gICAgICAyMTcsXG4gICAgICA3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1RVFZOUszNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQzODI2MDkyOTM2OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ekfCdnpLwnZ6X8J2Zh/CdmZQg8J2ZjvCdnpPwnZ6b8J2ek1wiLFxuICAgIFwibGlkXCI6IFwiNTk5MDY3MDcxODk3NjY6MTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTS9veXRjRkVJbkd5cmtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZaVZQVFVOemw3SVdrVHF4b1RRM1dNVkZ6ejdBY2FyYVd3UzBLdTJEY3o0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRZVHBQdkd0Z1d3Nlc3K25CcnRtRVY5SElReXljM3dWMnpHTmQzc3ZTak1FTU9rekRkQjU4SFlXMGNqZ2FrS1diT0w5YUVKUDhudlpQdmtxRDFVdkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRhVHMzQzM0cUIyVnpWREVoR0xYeWVvUjZmeGp5RDBxbkZnNDFBY1hqbVhIazdCOW5KcUR3cWJWdlJWdG9mZWlaV09sN25oWHo4UnRTWjdzMis3V0RRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0MzgyNjA5MjkzNjoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEzNzE3OTBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
