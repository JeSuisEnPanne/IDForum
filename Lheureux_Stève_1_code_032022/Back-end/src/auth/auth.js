/////////////////////////////////////////////////////
// Systeme de sécuriter avec TOKEN et ROLES utilisateur
////////////////////////////////////////////////////

const jwt = require("jsonwebtoken");
const privateKey = require("../auth/private_key");
const { User } = require("../db/sequelize");
const { roles } = require("../middlewares");

const auth = (role = roles.client) => {
  return (req, res, next) => {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      const message = `Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.`;
      return res.status(401).json({ message });
    }

    const token = authorizationHeader.split(" ")[1];
    const decodedToken = jwt.verify(
      token,
      privateKey,
      (error, decodedToken) => {
        if (error) {
          const message = `L'utilisateur n'est pas autorisé à accèder à cette ressource.`;
          return res.status(401).json({ message, data: error });
        }

        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
          const message = `L'identifiant de l'utilisateur est invalide.`;
          res.status(401).json({ message });
        } else {
          User.findByPk(userId).then((user) => {
            if (!user || (role !== user.role && user.role !== roles.admin)) {
              res.status(401).json({ message: "le role est incorect" });
            } else {
              next();
            }
          });
        }
      }
    );
  };
};

module.exports = { auth };
