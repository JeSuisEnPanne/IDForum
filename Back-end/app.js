const express = require('express')
const morgan = require('morgan')
const app = express()
const CORS = require('cors')
const sequelize = require('./src/db/sequelize')
const bodyParser = require('body-parser')




///////////////////////////////////////////////////////////////////

           
app.use(morgan('dev'))
app.use(bodyParser.json())
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


// On ajoute la gestion des erreurs 404
app.use(({res}) => {
  const message = 'Imossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
  res.status(404).json({message})
})


// CORS protections
app.use((req, res, next) => {
    //accéder à notre API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Origin', '*')
    //ajouter les headers mentionnés aux requêtes envoyées vers notre API
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    //envoyer des requêtes avec les méthodes mentionnées
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
  })

// Serveur
app.listen(8880, () => console.log('Serveur lancer sur le port 8880'))






