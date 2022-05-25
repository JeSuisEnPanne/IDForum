const { Forum } = require("../db/sequelize");
const { ValidationError, UniqueConstraintError } = require("sequelize");
const { auth } = require("../auth/auth");
const { roles } = require("../middlewares")




module.exports = (app) => {
  app.post("/api/forums", auth(roles.client), (req, res, next) => {
        
    console.log(req.body.role);

    Forum.create(req.body)
      .then((forum) => {POST
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







