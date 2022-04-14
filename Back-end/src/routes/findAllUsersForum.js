const { User } = require('../db/sequelize')

//Token
// const auth = require('../auth/auth')
// app.get('/api/forums', auth, (req, res) => {
  
module.exports = (app) => {
  app.get('/api/signup', (req, res) => {
    User.findAll()
      .then(users => {
        const message = 'La liste des méssages a bien été récupérée.'
        res.json({ message, data: users })
      })
      .catch(error => {
        const message = "La liste des méssages n'a pas pu etre récupérée. Réessayez dans quelques instants."
        res.status(500).json({ message, data: error })
      })
  })
}