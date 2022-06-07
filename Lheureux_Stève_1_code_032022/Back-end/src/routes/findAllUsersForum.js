/////////////////////////////////////////////////////
// Middlewares et routes
// Affichage de tous les utilisateurs du forum
////////////////////////////////////////////////////

const { User } = require("../db/sequelize");
const { auth } = require("../auth/auth");
const { roles } = require("../middlewares");

module.exports = (app) => {
  app.get("/api/signup", auth(roles.client), (req, res) => {
    User.findAll()
      .then((users) => {
        const message = "La liste des méssages a bien été récupérée.";
        res.json({ message, data: users });
      })
      .catch((error) => {
        const message =
          "La liste des méssages n'a pas pu etre récupérée. Réessayez dans quelques instants.";
        res.status(500).json({ message, data: error });
      });
  });
};
