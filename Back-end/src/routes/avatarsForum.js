const { Avatar } = require("../db/sequelize");
const jwt = require("jsonwebtoken");
const privateKey = require("../auth/private_key");
const { auth } = require("../auth/auth");
const { roles } = require("../middlewares");

module.exports = (app) => {
  app.get("/api/avatars", auth(roles.client), (req, res) => {
    Avatar.findAll()
      .then((avatar) => {
        const message = "La liste des avatars a bien été récupérée.";
        res.json({ message, data: avatar });
      })
      .catch((error) => {
        const message =
          "La liste des avatars n'a pas pu etre récupérée. Réessayez dans quelques instants.";
        res.status(500).json({ message, data: error });
      });
  });
};
