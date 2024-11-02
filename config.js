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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_51_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODcsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI5LFxuICAgICAgICA5MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODIsXG4gICAgICAgIDI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDkwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI4LFxuICAgICAgICA3NixcbiAgICAgICAgMzMsXG4gICAgICAgIDMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0NixcbiAgICAgICAgMTc2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk0LFxuICAgICAgICA2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDc5LFxuICAgICAgICAzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDY2LFxuICAgICAgICAzNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE4LFxuICAgICAgICA5NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlPUTFEdldiS1k4ZjExaVg3SVNMeGZVK3pNOXBpYVg1TTVZNlY0dUVpMEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNkc2pDM0FfUkk2QUVqY3RvSXliVmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDYwNDlkZDktZTk2Ni00NTUwLWE2ZTQtMGJkOGJiMTc4NWUzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1LFxuICAgICAgMTIwLFxuICAgICAgNTksXG4gICAgICA0NCxcbiAgICAgIDI1NCxcbiAgICAgIDgxLFxuICAgICAgNDYsXG4gICAgICAyNTEsXG4gICAgICAxMjAsXG4gICAgICAyNTMsXG4gICAgICAyMTEsXG4gICAgICAyNTAsXG4gICAgICAxOTEsXG4gICAgICAxNTUsXG4gICAgICA3OSxcbiAgICAgIDYsXG4gICAgICAxOTYsXG4gICAgICA0NyxcbiAgICAgIDEyOCxcbiAgICAgIDg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgNzcsXG4gICAgICAxNjQsXG4gICAgICAxODYsXG4gICAgICA2MSxcbiAgICAgIDE2MCxcbiAgICAgIDc0LFxuICAgICAgMTMxLFxuICAgICAgODEsXG4gICAgICAyMTEsXG4gICAgICAyMTcsXG4gICAgICAxNjIsXG4gICAgICA4MixcbiAgICAgIDUxLFxuICAgICAgMTQ4LFxuICAgICAgMjA1LFxuICAgICAgMTU5LFxuICAgICAgMjQyLFxuICAgICAgMTc3LFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllGNjRDVkIxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjUwMjMzMTk4ODo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiLlxcbsqfL/CdkpZcXG4gIOG0jy/wnZKbXFxuICAgIOG0nC/wnZKWXFxuICAgICAg4bSLL/Cdko5cXG4gICAgICAgIHMvIPCdkoJcXG4gICAgICAgICAg4bSPL/CdkoxcXG4gICAgICAgICAgICDJtC/wnZKKXCIsXG4gICAgXCJsaWRcIjogXCIxMjAxMzQ5MzMyMTc5NDo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p6dCthTUZFS0xzbDdrR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWWpzSEhMZEVENU9jaXNJeE81Nm9DU1BscjB3bHJQUzIza2drSGk3S20wRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoK0gvejdYc2ROTG1UOWZDUFVNOE5nc0dOZ1dLdmpPdnBUT3RQMjBYdHgreW1USW1VcEZIaUpFd0JMdWRrMnBEK3RDSGU5QitPemVPR2FBWnZkZkVCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkM3BRczFpcHZZeWhvWnpaQm1QUEcxNTBFREx5a2RkRE9RSXVHTEVWaEFyaW13bHhsSyszZ2gwdHo2MUczTFpUd3dnQlF5WG44R1krMFJvQldiVTRpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjUwMjMzMTk4ODo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA1NDEwOTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPMkZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU8yRi5qc29uIjogIntcImtleURhdGFcIjpcIjh3SFZOM1F6L2ZablA4U1FuYnBiTHNIcUNHVGpuSmR6K3M0ZGVOcjVySXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxNzU3NDA0NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNTEwOTEzNTgzXCJ9Igp9"  // PUT your SESSION_ID 


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
