/////////////////////////////////////////////////////
// Middlewares et routes
// Mise a jour utilisateur
////////////////////////////////////////////////////

const { User } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const { auth } = require('../auth/auth')
const { roles } = require("../middlewares")
  
module.exports = (app) => {
  app.put('/api/signup/:id', auth(roles.client), (req, res) => {
    const id = req.params.id
    User.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return User.findByPk(id).then(forum => {
        if (forum == null) {
          const message = "Le forum demandé n'existe pas. Réessayer avec un autre identifiant"
          return res.status(404).json({message})
        }
        const message = `Le méssage ${forum.name} a bien été modifié.`
        res.json({message, data: forum })
      })
    })
    .catch(error => {
      if (error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error })
      }
      if (error instanceof UniqueConstraintError) {
        return res.status(400).json({ message: error.message, data: error })
        
      }
      const message = "La liste des méssages n'a pas pu etre modifié. Réessayez dans quelques instants."
      res.status(500).json({ message, data: error })
    })
  })
}