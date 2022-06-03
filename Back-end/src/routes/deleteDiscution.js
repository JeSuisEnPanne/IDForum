/////////////////////////////////////////////////////
// Middlewares et routes
// Supression des messages de discussion
////////////////////////////////////////////////////

const { Discussion } = require("../db/sequelize");
const { auth } = require("../auth/auth");
const { roles } = require("../middlewares");

module.exports = (app) => {
  app.delete("/api/discussions/:id", auth(roles.admin), (req, res) => {
    Discussion.findByPk(req.params.id)
      .then((forum) => {
        if (forum == null) {
          const message =
            "Le forum demandé n'existe pas. Réessayer avec un autre identifiant";
          return res.status(404).json({ message });
        }

        const forumDeleted = forum;
        return Discussion.destroy({
          where: { id: forum.id },
        }).then((_) => {
          const message = `Le méssage avec l'identifiant n°${forumDeleted.id} a bien été supprimé.`;
          res.json({ message, data: forumDeleted });
        });
      })
      .catch((error) => {
        const message =
          "La liste des méssages n'a pas pu etre supprimé. Réessayez dans quelques instants.";
        res.status(500).json({ message, data: error });
      });
  });
};
