const { Forum } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
  
module.exports = (app) => {
  app.post('/api/forums', (req, res) => {
    Forum.create(req.body)
      .then(forum => {
        const message = `Le méssage ${req.body.name} a bien été crée.`
        res.json({ message, data: forum })
      })
      .catch(error => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error })
        }
        if (error instanceof UniqueConstraintError) {
          return res.status(400).json({ message: error.message, data: error })
          
        }
        const message = "La liste des méssages n'a pas pu etre ajouté. Réessayez dans quelques instants."
        res.status(500).json({ message, data: error })
      })
  })
}