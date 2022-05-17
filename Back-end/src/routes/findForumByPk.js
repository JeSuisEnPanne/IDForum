const { Forum } = require('../db/sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
  app.get('/api/forums/:id', auth, (req, res) => {
    Forum.findByPk(req.params.id)
      .then(forum => {
        const message = 'Un méssage a bien été trouvé.'
        res.json({ message, data: forum })
      })
  })
}