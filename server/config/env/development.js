module.exports = {
  DB: process.env.DB || 'mongodb+srv://whatsappclone:yqVF0kialZqsXA30@localdb.3dk81.mongodb.net/expense-app?retryWrites=true&w=majority',
  PORT: process.env.PORT || '3001',
  IS_CONSOLE_LOG: process.env.IS_CONSOLE_LOG || 'true'
}
