/////////////////////////////////////////////////////
// Middlewares et routes
// Affichage de 1 message du forum
////////////////////////////////////////////////////

const { Forum } = require("../db/sequelize");
const { auth } = require("../auth/auth");
const { roles } = require("../middlewares");

module.exports = (app) => {
  app.get("/api/forums/:id", auth(roles.client), (req, res) => {
    Forum.findByPk(req.params.id).then((forum) => {
      const message = "Un méssage a bien été trouvé.";
      res.json({ message, data: forum });
    });
  });
};
