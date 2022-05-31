///////////////////////////////////////////////////////////////
// Modele user pour tout les utilisateurs du forum pour la BDD
///////////////////////////////////////////////////////////////

const { roles } = require("../middlewares");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("User", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pseudo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Le pseudo est déjà pris.",
        },
        validate: {
          notEmpty: { msg: "Le pseudo ne peut pas etre vide." },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Le mot de passe ne peut pas etre vide." },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "L'adresse email est déjà pris.",
        },
        validate: {
          notEmpty: { msg: "L'adresse email ne peut pas etre vide." },
        },
      },
      avatar_id: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      role: {
        type: DataTypes.STRING,
        enum: [roles.admin, roles.client],
        defaultValue: roles.client,
      },
    },
    {
      timestamps: true,
      createdAt: "created",
      updatedAt: false,
    }
  );
};
