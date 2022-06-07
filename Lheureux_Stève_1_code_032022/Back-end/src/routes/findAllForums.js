/////////////////////////////////////////////////////
// Middlewares et routes
// Affichage des messages du forum
////////////////////////////////////////////////////

const { Forum } = require('../db/sequelize')
const { auth } = require('../auth/auth')
const { roles } = require("../middlewares")
const { Discussion } = require('../db/sequelize')
const sequelize = require('../db/sequelize')

  
module.exports = (app) => {
  app.get('/api/forums', auth(roles.client), (req, res) => {
    const limit = parseInt(req.query.limit) || 50
    Forum.findAndCountAll({
      limit: limit,
    })
      .then(({count, rows}) => {
        
        
        const message = `Il y a ${count} méssages qui a bien été récupérée.`
        res.json({ message, data: rows })
      })
      .catch(error => {
        const message = "La liste des méssages n'a pas pu etre récupérée. Réessayez dans quelques instants."
        res.status(500).json({ message, data: error })
      })
  })
}