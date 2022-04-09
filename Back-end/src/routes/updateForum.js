const { Forum } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')

  
module.exports = (app) => {
  app.put('/api/forums/:id', (req, res) => {
    const id = req.params.id
    Forum.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Forum.findByPk(id).then(forum => {
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