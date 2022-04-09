const { Forum } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/forums/:id', (req, res) => {
    Forum.findByPk(req.params.id)
      .then(forum => {
        const message = 'Un méssage a bien été trouvé.'
        res.json({ message, data: forum })
      })
  })
}