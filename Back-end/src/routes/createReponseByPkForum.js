/////////////////////////////////////////////////////
// Middlewares et routes
// Affichage de 1 message de discussions
////////////////////////////////////////////////////

const { Discussion } = require("../db/sequelize");
const { auth } = require("../auth/auth");
const { roles } = require("../middlewares");

module.exports = (app) => {
  app.get("/api/discussions/:id", auth(roles.client), (req, res) => {
    Discussion.findAll({
      where: {
        ForumId: req.params.id,
      },
    }).then((forum) => {
      const message = "Un méssage a bien été trouvé.";
      res.json({ message, data: forum });
    });
  });
};
