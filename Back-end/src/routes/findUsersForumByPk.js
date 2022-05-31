/////////////////////////////////////////////////////
// Middlewares et routes
// Affichage de 1 utilisateur du forum
////////////////////////////////////////////////////

const { User } = require("../db/sequelize");
const { auth } = require("../auth/auth");
const { roles } = require("../middlewares");

module.exports = (app) => {
  app.get("/api/user/:id", auth(roles.client), (req, res, next) => {
    User.findByPk(req.params.id)
      .then((forum) => {
        if (forum === null) {
          const message = `L'utilisateur demandé n'existe pas. Réessayez avec un autre identifiant.`;
          return res.status(404).json({ message });
        }

        const message = "Utilisateur a bien été trouvé.";
        res.json({ message, data: forum });
      })
      .catch((error) => {
        const message = `L'utilisateur n'a pas pu être récupéré. Réessayez dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
