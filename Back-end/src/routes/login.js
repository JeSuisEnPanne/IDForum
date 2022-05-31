const { User } = require('../db/sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const privateKey = require('../auth/private_key')
const auth = require('../auth/auth')

module.exports = (app) => {
  app.post('/api/login', (req, res) => {
  
    User.findOne({ where: { email: req.body.email } }).then(user => {

        if (!user) {
            const message = `L'adresse Mail n'existe pas.`
            return res.status(404).json({ message })
        }
      bcrypt.compare(req.body.password, user.password).then(isPasswordValid => {
        if(!isPasswordValid) {
          const message = "Le mot de passe est incorrect.";
          return res.status(401).json({ message })
        }

        // JWT
        const token = jwt.sign(
            { userId: user.id },
            privateKey,
            { expiresIn: '24h' },

        )

        var randomNumber=Math.random().toString();
        randomNumber=randomNumber.substring(2,randomNumber.length);
        res.cookie('ids',randomNumber, { maxAge: 31536000000, httpOnly: true });
        

        const message = `L'utilisateur a été connecté avec succès`;
          return res.json({ message, data: user, token })
      })
    })
    .catch(error => {
        const message = `L'utilisateur n'a épas pu etre connecté. Réessayez dans quelques instants.`;
          return res.json({ message, data: error })
    })
  })
}