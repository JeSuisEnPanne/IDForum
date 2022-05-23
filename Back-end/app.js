const express = require('express')
const morgan = require('morgan')
const app = express()
const CORS = require('cors')
const sequelize = require('./src/db/sequelize')
const bodyParser = require('body-parser')




///////////////////////////////////////////////////////////////////

           
app.use(morgan('dev'))
app.use(bodyParser.json({limit:'100mb'}))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(CORS())


///////////////////////////////////////////////////////////////////


sequelize.initDb()

//
// ici nous placerons nos futurs points de terminaison.
//

require('./src/routes/findAllForums')(app)
require('./src/routes/findForumByPk')(app)
require('./src/routes/createForum')(app)
require('./src/routes/updateForum')(app)
require('./src/routes/deleteForum')(app)
require('./src/routes/login')(app)
require('./src/routes/signup')(app)
require('./src/routes/deleteCompte')(app)
require('./src/routes/avatarsForum')(app)
require('./src/routes/findAllUsersForum')(app)
require('./src/routes/findUsersForumByPk')(app)
require('./src/routes/createReponseForum')(app)
require('./src/routes/createReponseByPkForum')(app)
require('./src/routes/createReponseAllForum')(app)
require('./src/routes/deleteDiscution')(app)







// On ajoute la gestion des erreurs 404
// app.use(({res}) => {
  //   const message = 'Imossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
  //   res.status(404).json({message})
  // })
  
  
  // CORS protections
  app.use((req, res, next) => {
    //accéder à notre API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080/')
    //ajouter les headers mentionnés aux requêtes envoyées vers notre API
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    //envoyer des requêtes avec les méthodes mentionnées
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
  })

  
  const path = require('path')
  
  
  
  

  app.use('src//avatars', express.static(path.join(__dirname + 'src//avatars')))
  
  
  require('dotenv').config();
  
  
  // Serveur
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Serveur lancer sur le port ${PORT}`))
  

  
  