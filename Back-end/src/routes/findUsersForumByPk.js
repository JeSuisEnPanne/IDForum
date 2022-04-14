const { User } = require('../db/sequelize')

module.exports = (app) => {
  app.get('/api/signup/:id', (req, res) => {
    User.findByPk(req.params.id)
      .then(user => {
        const message = 'Un méssage a bien été trouvé.'
        res.json({ message, data: user })
      })
  })
}