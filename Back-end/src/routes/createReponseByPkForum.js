
    const { Discussion } = require('../db/sequelize')
  
    module.exports = (app) => {
      app.get('/api/discussions/:id', (req, res) => {
        Discussion.findByPk(req.params.id)
          .then(forum => {
            const message = 'Un méssage a bien été trouvé.'
            res.json({ message, data: forum })
          })
      })
    }