/////////////////////////////////////////////////////
// Modele message de discussions pour la BDD
////////////////////////////////////////////////////

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Discussion",{
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      contenu: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
      },
      nom_utilisateur: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdDate: {
        type: DataTypes.STRING,
      },

      avatar: {
        type: DataTypes.INTEGER,
      },
    },
    
    {
      timestamps: true,
      createdAt: "created",
      updatedAt: false,
    }
  );
};
