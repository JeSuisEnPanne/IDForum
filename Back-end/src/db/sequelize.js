const { Sequelize, DataTypes } = require('sequelize')
const ForumModel = require('../models/forum')
const forums = require('./mock-forum')
const UserModel = require('../models/user')
const bcrypt = require('bcrypt')
  
const sequelize = new Sequelize('pawak_projet7', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})
  
const Forum = ForumModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)
  
const initDb = () => {
  // return sequelize.sync({force: true}).then(_ => {
  //   forums.map(forum => {
  //     Forum.create({
  //       sujet: forum.sujet,
  //       contenu: forum.contenu,
  //       nom_utilisateur: forum.nom_utilisateur,
  //       id_discussion: forum.id_discussion,
  //       likes: forum.likes,
  //       avatar: forum.avatar
  //     }).then(forum => console.log(forum.toJSON()))
  //   })
    // bcrypt.hash('pikachu', 10)
    // .then(hash => {
    //   User.create({
    //     pseudo: 'pikachu',
    //     password: hash,
    //     email: 'steve.lheureux@yahoo.fr',
    //     Avatar: 1
    //   })
    //   .then(user => console.log(user.toJSON()))
    // })


  //   console.log('La base de donnée a bien été initialisée !')
  // })
}
  
module.exports = { 
  initDb, Forum, User
}