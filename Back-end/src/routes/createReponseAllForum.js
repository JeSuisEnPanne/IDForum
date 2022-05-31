const { Discussion } = require("../db/sequelize");
const { auth } = require("../auth/auth");
const { roles } = require("../middlewares");

module.exports = (app) => {
  app.get("/api/discussions/", auth(roles.client), (req, res) => {
    Discussion.findAll()
      .then((forums) => {
        const message = "La liste des méssages a bien été récupérée.";
        res.json({ message, data: forums });
      })
      .catch((error) => {
        const message =
          "La liste des méssages n'a pas pu etre récupérée. Réessayez dans quelques instants.";
        res.status(500).json({ message, data: error });
      });
  });
};
