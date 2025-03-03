//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ The welcome message is configured')
  } else throw `✳️ welcome goo babu 🥹\n@user (mention) one time pic diya intro dao tomar 🥹🤭`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = false
handler.owner = true

export default handler
