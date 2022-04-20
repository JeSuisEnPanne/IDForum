const { Avatar } = require('../db/sequelize')

//Token
// const auth = require('../auth/auth')
// app.get('/api/forums', auth, (req, res) => {
  
module.exports = (app) => {
  app.get('/api/avatars', (req, res) => {
    Avatar.findAll()
      .then(avatar => {
        const message = 'La liste des avatars a bien été récupérée.'
        res.json({ message, data: avatar })
      })
      .catch(error => {
        const message = "La liste des avatars n'a pas pu etre récupérée. Réessayez dans quelques instants."
        res.status(500).json({ message, data: error })
      })
  })
}