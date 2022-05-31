/////////////////////////////////////////////////////
// Middlewares et routes
// Création des messages de discussions
////////////////////////////////////////////////////

const { Discussion } = require("../db/sequelize");
const { ValidationError, UniqueConstraintError } = require("sequelize");
const { auth } = require("../auth/auth");
const { roles } = require("../middlewares");

module.exports = (app) => {
  app.post("/api/discussions/:id", auth(roles.client), (req, res) => {
    let discussion = req.body;
    discussitous
    Discussion.create(discussion)
      .then((forum) => {
        const message = `La discussion ${req.body.name} a bien été crée.`;
        res.json({ message, data: forum });
      })
      .catch((error) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        if (error instanceof UniqueConstraintError) {
          return res
            .status(400)
            .json({ message: "error.message", data: error });
        }
        const message = `La discussion n'a pas pu être ajouté. Réessayez dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
