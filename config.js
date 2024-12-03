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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_30_12_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjExLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDc3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODksXG4gICAgICAgIDM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDM3LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA3OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODYsXG4gICAgICAgIDIsXG4gICAgICAgIDksXG4gICAgICAgIDg2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDk2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMwLFxuICAgICAgICAzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDM4LFxuICAgICAgICAzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDcwLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA3MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjksXG4gICAgICAgIDkwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM4LFxuICAgICAgICA5MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDgwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDksXG4gICAgICAgIDg4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDg0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDgwLFxuICAgICAgICA2MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1UDRLWXRaWHQ4YXI3SENnSEdlcHJkNEtyNTBZZ0tBRUlxcGdXa3NOeFRzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYUXgxUWVzeFFyaXY0S1pLTE1wQXVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ0Njc2MWY2LTgxNzUtNDdmZC04ZGQyLWQ0MzMxMDE5ODQzMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICA1LFxuICAgICAgMTkwLFxuICAgICAgMTg1LFxuICAgICAgMzksXG4gICAgICAxMjcsXG4gICAgICA1NCxcbiAgICAgIDIwMSxcbiAgICAgIDE1NSxcbiAgICAgIDQ2LFxuICAgICAgMTA0LFxuICAgICAgODQsXG4gICAgICAyMDIsXG4gICAgICAyNyxcbiAgICAgIDQ2LFxuICAgICAgMTUwLFxuICAgICAgMTY3LFxuICAgICAgMTIsXG4gICAgICAyMzIsXG4gICAgICAxMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQsXG4gICAgICAxNjMsXG4gICAgICAxNDgsXG4gICAgICAxNzMsXG4gICAgICAxNzYsXG4gICAgICA2MCxcbiAgICAgIDE0LFxuICAgICAgMTk1LFxuICAgICAgNDksXG4gICAgICAxMzIsXG4gICAgICAxNTEsXG4gICAgICAxMzYsXG4gICAgICAxMCxcbiAgICAgIDY1LFxuICAgICAgMjMsXG4gICAgICAyMDIsXG4gICAgICAxNjcsXG4gICAgICAxMDYsXG4gICAgICAyMSxcbiAgICAgIDExM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTSlk3UUhEWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDIzMzE5ODg6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZC/8J2RgvCdkYjwnZC+8J2RhvCdkYLwnZGBIPCdkYjwnZGN8J2RiPCdkYDwnZC08J2QvvCdkLwg8J2Rh/CdkLjwnZC28J2Qu1wiLFxuICAgIFwibGlkXCI6IFwiMTIwMTM0OTMzMjE3OTQ6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0R0K2FNRkVPK1B2TG9HR0I4Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZanNISExkRUQ1T2Npc0l4TzU2b0NTUGxyMHdsclBTMjNrZ2tIaTdLbTBFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVyekF3QUFEZGtIWG10b2k3dGQyRVlGblFVVDljeU5veHF5NnFNY2FESW9FL3g2L2RzZUZvR2kxemRkamMxOEoxT0cwVVhLRWZpRmoxUUtFOFBEYUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInllL2J5SHpNZ3I3dHFMZGg5Q2RaWW1ZdTJBQnpBNGNkZmhiTVZ6Z1hHWVgvQUNNc1NiU05nNWxTUlFsa2VlVXk5bi9nTkU3bHZBTkFCTEFhVzlNakNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTAyMzMxOTg4OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMyMzI2MjZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
