const { User } = require('../db/sequelize')

//Token
const auth = require('../auth/auth')



module.exports = (app) => {
  app.get('/api/user/:id', (req, res) => {
    User.findByPk(req.params.id)
      .then(user => {
        const message = 'Un méssage a bien été trouvé.'
        res.json({ message, data: user })
      })
  })
}