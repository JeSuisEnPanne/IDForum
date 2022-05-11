const { Discussion } = require("../db/sequelize");
const { ValidationError, UniqueConstraintError } = require("sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.post("/api/discussions/:id", (req, res) => {
    let discussion = req.body;
    discussion.ForumId = Number(req.params.id);

    Discussion.create(discussion)
      .then((forum) => {
        const message = `Le pokémon ${req.body.name} a bien été crée.`;
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
        const message = `Le pokémon n'a pas pu être ajouté. Réessayez dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
