
const bcrypt = require('bcrypt')
const { User } = require('../db/sequelize')

const { roles } = require('../middlewares')
// const User = require('../models/user')


module.exports = (app) => {
    app.post('/api/signup', (req, res) => {
  
    bcrypt.hash(req.body.password, 10)

    
    .then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash,
            pseudo: req.body.pseudo,
            avatar_id: req.body.avatar_id,
            isAdmin: req.body.isAdmin,
            role: req.body.role
        })
        
        require('dotenv').config();

        if (this.email === process.env.ADMIN_EMAIL.toLowerCase()) {
            this.role = roles.admin
        }
        
        user.save()
        // Si tout c'est bien passer je donne un status 201
        .then(() => res.status(201).json({ message: 'Utilisateur créé !'}))
        
            // Sinon je renvoie une erreur 400
            .catch(error => res.status(400).json({ error }))
    })
    // S'il y a une erreur alors je donne une erreur 500
    .catch(error => res.status(500).json({ error }))
})}

