const { User } = require("../db/sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.delete("/api/compte/:id", (req, res) => {
    User.findByPk(req.params.id)
      .then((user) => {
        if (user == null) {
          const message =
            "Le user demandé n'existe pas. Réessayer avec un autre identifiant";
          return res.status(404).json({ message });
        }

        const userDeleted = user;
        return User.destroy({
          where: { id: user.id },
        }).then((_) => {
          const message = `Le méssage avec l'identifiant n°${userDeleted.id} a bien été supprimé.`;
          res.json({ message, data: userDeleted });
        });
      })
      .catch((error) => {
        const message =
          "La liste des méssages n'a pas pu etre supprimé. Réessayez dans quelques instants.";
        res.status(500).json({ message, data: error });
      });
  });
};
