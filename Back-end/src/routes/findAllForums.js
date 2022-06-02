/////////////////////////////////////////////////////
// Middlewares et routes
// Affichage des messages du forum
////////////////////////////////////////////////////

const { Forum } = require('../db/sequelize')
const { auth } = require('../auth/auth')
const { roles } = require("../middlewares")
const { Discussion } = require('../db/sequelize')
const sequelize = require('../db/sequelize')

//Token
// const auth = require('../auth/auth')
// app.get('/api/forums', auth, (req, res) => {
  
module.exports = (app) => {
  app.get('/api/forums', auth(roles.client), (req, res) => {
    // Discussion.query("SELECT ForumId, COUNT(ForumId) FROM `Discussions` GROUP BY ForumId").then(data => {
    //   console.log(data);
    // })
    // const [totalDiscussion, metadata] = await sequelize.query("SELECT ForumId, COUNT(ForumId) FROM `Discussions` GROUP BY ForumId");
    const limit = parseInt(req.query.limit) || 3
    Forum.findAndCountAll({
      limit: limit,
    })
      .then(({count, rows}) => {
        
        
        const message = `Il y a ${count} méssages qui a bien été récupérée.`
        res.json({ message, data: rows })
      })
      .catch(error => {
        const message = "La liste des méssages n'a pas pu etre récupérée. Réessayez dans quelques instants."
        res.status(500).json({ message, data: error })
      })
  })
}