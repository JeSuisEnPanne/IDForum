/////////////////////////////////////////////////////
// Modele forum pour les messages forum pour la BDD
////////////////////////////////////////////////////

const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Forum", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      sujet: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contenu: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
      },
      nom_utilisateur: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatar: {
        type: DataTypes.STRING,
      },
      createdDate: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
      createdAt: "created",
      updatedAt: false,
    }
  );
};
