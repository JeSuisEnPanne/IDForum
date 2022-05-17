const { Discussion } = require("../db/sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.get("/api/discussions/:id", auth, (req, res) => {
    Discussion.findAll({
      where: {
        ForumId: req.params.id
      }
    }).then((forum) => {
      const message = "Un méssage a bien été trouvé.";
      res.json({ message, data: forum });
    });
  });
};
